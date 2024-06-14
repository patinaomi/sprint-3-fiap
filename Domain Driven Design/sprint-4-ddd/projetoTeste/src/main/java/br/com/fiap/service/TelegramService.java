package br.com.fiap.service;

import br.com.fiap.config.Config;
import br.com.fiap.model.bo.ContatoBo;
import br.com.fiap.model.bo.ConsultaBo;
import br.com.fiap.model.bo.QuestFeedbackBo;
import br.com.fiap.model.bo.Validacoes;
import br.com.fiap.model.dao.impl.ConsultaDaoImpl;
import br.com.fiap.model.dao.impl.ContatoDaoImpl;
import br.com.fiap.model.dao.impl.QuestFeedbackDaoImpl;
import br.com.fiap.model.vo.Consulta;
import br.com.fiap.model.vo.Contato;
import br.com.fiap.model.vo.QuestFeedback;
import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.UpdatesListener;
import com.pengrad.telegrambot.model.CallbackQuery;
import com.pengrad.telegrambot.model.Message;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.model.request.InlineKeyboardButton;
import com.pengrad.telegrambot.model.request.InlineKeyboardMarkup;
import com.pengrad.telegrambot.request.SendAudio;
import com.pengrad.telegrambot.request.SendMessage;

import java.io.File;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

/**
 * Serviço para interagir com o bot do Telegram, gerenciar comandos e realizar ações.
 */
public class TelegramService {
    private TelegramBot bot;
    private OpenAiService openAiService;
    private TextToSpeechService textToSpeechService;

    private ContatoBo contatoBo;
    private ConsultaBo consultaBo;
    private QuestFeedbackBo questFeedbackBo;

    private Map<String, String> userStates = new HashMap<>();
    private Map<Object, Contato> tempUsers = new HashMap<Object, Contato>();
    private Map<String, QuestFeedback> tempFeedbacks = new HashMap<>();

    /**
     * Constrói uma instância de TelegramService configurando o cliente do Telegram e os serviços dependentes.
     *
     * @param token        A chave API do Telegram.
     * @param openAiService O serviço OpenAiService para gerar conteúdo de texto.
     */
    public TelegramService(String token, OpenAiService openAiService) {
        this.bot = new TelegramBot(token);
        this.openAiService = openAiService;
        this.textToSpeechService = new TextToSpeechService();
        this.contatoBo = new ContatoBo(new ContatoDaoImpl());
        this.consultaBo = new ConsultaBo(new ConsultaDaoImpl());
        this.questFeedbackBo = new QuestFeedbackBo(new QuestFeedbackDaoImpl());
    }

    /**
     * Inicia o bot do Telegram e configura o listener de atualizações.
     */
    public void startBot() {
        this.bot = new TelegramBot(Config.getProperty("telegram.api.key"));
        bot.setUpdatesListener(updates -> {
            updates.forEach(this::processUpdate);
            return UpdatesListener.CONFIRMED_UPDATES_ALL;
        }, e -> {
            if (e.response() != null) {
                System.err.println("Erro da API do Telegram: " + e.response().description());
            } else {
                System.err.println("Erro de rede ou de conexão: " + e.getMessage());
                e.printStackTrace();
            }
        });
        System.out.println("Bot iniciado com sucesso!");
    }

    private void processUpdate(Update update) {
        Message message = update.message();
        CallbackQuery callbackQuery = update.callbackQuery();

        if (message != null && message.text() != null && !message.text().isEmpty()) {
            handleUserMessage(message);
        } else if (callbackQuery != null && callbackQuery.data() != null) {
            handleCallbackQuery(callbackQuery);
        }
    }

    private void handleUserMessage(Message message) {
        String chatId = String.valueOf(message.chat().id());
        String userText = message.text().trim();

        String state = userStates.get(chatId);
        if (state != null) {
            opcaoAcoesUser(chatId, userText);
        } else {
            switch (userText.toLowerCase()) {
                case "/start":
                    opcaoStart(chatId);
                    break;
                case "/contato":
                    opcaoContato(chatId);
                    break;
                case "/consulta":
                    opcaoConsulta(chatId);
                    break;
                case "/feedback":
                    opcaoFeedback(chatId);
                    break;
                case "/site":
                    opcaoSite(chatId);
                    break;
                default:
                    opcaoDefault(chatId);
                    break;
            }
        }
    }

    private void handleCallbackQuery(CallbackQuery callbackQuery) {
        String chatId = String.valueOf(callbackQuery.message().chat().id());
        String data = callbackQuery.data();

        if (data.startsWith("consulta_")) {
            boolean isAudio = data.equals("consulta_audio");
            userStates.put(chatId, isAudio ? "awaiting_consulta_audio_query" : "awaiting_consulta_text_query");
            bot.execute(new SendMessage(chatId, "Escreva a sua pergunta sobre a Salesforce:"));
        } else if (data.equals("feedback_sim")) {
            opcaoFeedback(chatId);
        } else if (data.equals("feedback_nao")) {
            bot.execute(new SendMessage(chatId, "Obrigado por usar nossos serviços!"));
        } else if (data.startsWith("produto_")) {
            fluxoContato(chatId, data);
        } else if (data.startsWith("tamanho_")) {
            fluxoContato(chatId, data);
        }
    }


    private void opcaoStart(String chatId) {
        String welcomeMessage = "Bem-vindo ao SalesBot! Utilize o menu inferior à esquerda para acessar as opções.";
        bot.execute(new SendMessage(chatId, welcomeMessage));
        userStates.put(chatId, null);
    }

    private void opcaoContato(String chatId) {
        bot.execute(new SendMessage(chatId, "Digite seu nome:"));
        userStates.put(chatId, "awaiting_nome");
    }

    private void fluxoContato(String chatId, String userText) {
        String state = userStates.get(chatId);
        Contato contato = tempUsers.getOrDefault(chatId, new Contato());

        try {
            switch (state) {
                case "awaiting_nome":
                    if (!Validacoes.validarUsuario(userText)) {
                        bot.execute(new SendMessage(chatId, "Erro: Nome inválido. O nome deve ter entre 2 e 30 caracteres."));
                        return;
                    }
                    contato.setNome(userText);
                    tempUsers.put(chatId, contato);
                    userStates.put(chatId, "awaiting_email");
                    bot.execute(new SendMessage(chatId, "Digite seu e-mail:"));
                    break;
                case "awaiting_email":
                    if (!Validacoes.validarEmail(userText)) {
                        bot.execute(new SendMessage(chatId, "Erro: Email inválido. Por favor, insira um email válido."));
                        return;
                    }
                    contato.setEmail(userText);
                    tempUsers.put(chatId, contato);
                    userStates.put(chatId, "awaiting_telefone");
                    bot.execute(new SendMessage(chatId, "Digite seu telefone:"));
                    break;
                case "awaiting_telefone":
                    String telefoneLimpo = userText.replaceAll("[^0-9]", "");
                    if (!Validacoes.validarTelefone(telefoneLimpo)) {
                        bot.execute(new SendMessage(chatId, "Erro: Telefone inválido. Use apenas números."));
                        return;
                    }
                    contato.setTelefone(telefoneLimpo);
                    tempUsers.put(chatId, contato);
                    userStates.put(chatId, "awaiting_segmento");
                    bot.execute(new SendMessage(chatId, "Digite seu segmento:"));
                    break;
                case "awaiting_segmento":
                    contato.setSegmento(userText);
                    tempUsers.put(chatId, contato);
                    userStates.put(chatId, "awaiting_cargo");
                    bot.execute(new SendMessage(chatId, "Digite seu cargo:"));
                    break;
                case "awaiting_cargo":
                    contato.setCargo(userText);
                    tempUsers.put(chatId, contato);
                    userStates.put(chatId, "awaiting_mensagem");
                    bot.execute(new SendMessage(chatId, "Digite sua mensagem:"));
                    break;
                case "awaiting_mensagem":
                    contato.setMensagem(userText);
                    tempUsers.put(chatId, contato);
                    userStates.put(chatId, "awaiting_produto");
                    bot.execute(new SendMessage(chatId, "Escolha o produto de interesse:")
                            .replyMarkup(new InlineKeyboardMarkup(
                                    new InlineKeyboardButton("Atendimento").callbackData("produto_1"),
                                    new InlineKeyboardButton("Cloud").callbackData("produto_2"),
                                    new InlineKeyboardButton("Slack").callbackData("produto_3"),
                                    new InlineKeyboardButton("Einstein").callbackData("produto_4"),
                                    new InlineKeyboardButton("Vendas").callbackData("produto_5"),
                                    new InlineKeyboardButton("Marketing").callbackData("produto_6")
                            )));
                    break;
                case "awaiting_produto":
                    if (!userText.startsWith("produto_")) {
                        bot.execute(new SendMessage(chatId, "Erro: Selecione uma opção válida."));
                        return;
                    }
                    int produtoId = Integer.parseInt(userText.split("_")[1]);
                    contato.setProdutoId(produtoId);
                    tempUsers.put(chatId, contato);
                    userStates.put(chatId, "awaiting_tamanho_empresa");
                    bot.execute(new SendMessage(chatId, "Escolha o tamanho da empresa:")
                            .replyMarkup(new InlineKeyboardMarkup(
                                    new InlineKeyboardButton("Pequena").callbackData("tamanho_1"),
                                    new InlineKeyboardButton("Média").callbackData("tamanho_2"),
                                    new InlineKeyboardButton("Grande").callbackData("tamanho_3"),
                                    new InlineKeyboardButton("Multinacional").callbackData("tamanho_4")
                            )));
                    break;
                case "awaiting_tamanho_empresa":
                    if (!userText.startsWith("tamanho_")) {
                        bot.execute(new SendMessage(chatId, "Erro: Selecione uma opção válida."));
                        return;
                    }
                    int tamanhoEmpresaId = Integer.parseInt(userText.split("_")[1]);
                    contato.setTamanhoEmpresaId(tamanhoEmpresaId);
                    contatoBo.inserir(contato);
                    bot.execute(new SendMessage(chatId, "Contato concluído com sucesso!"));
                    tempUsers.remove(chatId);
                    userStates.remove(chatId);
                    break;
            }
        } catch (SQLException e) {
            System.err.println("Erro ao registrar contato: " + e.getMessage());
            bot.execute(new SendMessage(chatId, "Erro: Tivemos um problema ao registrar seu contato!"));
            tempUsers.remove(chatId);
            userStates.remove(chatId);
        }
    }


    private void opcaoConsulta(String chatId) {
        InlineKeyboardMarkup keyboard = new InlineKeyboardMarkup(
                new InlineKeyboardButton("Texto").callbackData("consulta_texto"),
                new InlineKeyboardButton("Áudio").callbackData("consulta_audio")
        );
        bot.execute(new SendMessage(chatId, "Você gostaria de receber a resposta em texto ou áudio?").replyMarkup(keyboard));
        userStates.put(chatId, "awaiting_consulta_response_type");
    }

    private void fluxoConsulta(String chatId, String userText) {
        boolean isAudio = userText.equals("audio");
        userStates.put(chatId, isAudio ? "awaiting_consulta_audio_query" : "awaiting_consulta_text_query");
        bot.execute(new SendMessage(chatId, "Escreva a sua pergunta sobre a Salesforce:"));
    }

    private void handleConsultaQuery(String chatId, String userText, boolean isAudio) {
        Consulta consulta = new Consulta();
        consulta.setPergunta(userText);
        String responseText = openAiService.gerarInformacao(userText);
        consulta.setResposta(responseText);

        try {
            consultaBo.inserir(consulta);
        } catch (SQLException e) {
            System.err.println("Erro ao armazenar consulta: " + e.getMessage());
        }

        if (responseText != null) {
            if (isAudio) {
                File audioFile = textToSpeechService.synthesizeToFile(responseText);
                if (audioFile != null) {
                    try {
                        bot.execute(new SendAudio(chatId, audioFile));
                    } catch (Exception e) {
                        bot.execute(new SendMessage(chatId, "Erro ao enviar áudio: " + e.getMessage()));
                    }
                } else {
                    bot.execute(new SendMessage(chatId, "Erro ao gerar áudio."));
                }
            } else {
                bot.execute(new SendMessage(chatId, responseText));
            }
            perguntarFeedback(chatId);
        } else {
            bot.execute(new SendMessage(chatId, "Desculpe, não consegui gerar uma resposta no momento."));
        }

        userStates.remove(chatId);
    }


    private void perguntarFeedback(String chatId) {
        InlineKeyboardMarkup keyboard = new InlineKeyboardMarkup(
                new InlineKeyboardButton("Sim").callbackData("feedback_sim"),
                new InlineKeyboardButton("Não").callbackData("feedback_nao")
        );
        bot.execute(new SendMessage(chatId, "Obrigado por usar nossos serviços! Gostaria de deixar um feedback?").replyMarkup(keyboard));
    }

    private void opcaoFeedback(String chatId) {
        bot.execute(new SendMessage(chatId, "Digite seu nome:"));
        userStates.put(chatId, "awaiting_feedback_name");
    }

    private void fluxoFeedback(String chatId, String userText) {
        String state = userStates.get(chatId);
        QuestFeedback feedback = tempFeedbacks.getOrDefault(chatId, new QuestFeedback());

        try {
            switch (state) {
                case "awaiting_feedback_name":
                    feedback.setNome(userText);
                    tempFeedbacks.put(chatId, feedback);
                    userStates.put(chatId, "awaiting_feedback_email");
                    bot.execute(new SendMessage(chatId, "Digite seu e-mail:"));
                    break;
                case "awaiting_feedback_email":
                    if (!Validacoes.validarEmail(userText)) {
                        bot.execute(new SendMessage(chatId, "Erro: Email inválido. Por favor, insira um email válido."));
                        return;
                    }
                    feedback.setEmail(userText);
                    tempFeedbacks.put(chatId, feedback);
                    userStates.put(chatId, "awaiting_feedback_rating");
                    bot.execute(new SendMessage(chatId, "Dê uma avaliação de 1 a 5:"));
                    break;
                case "awaiting_feedback_rating":
                    int rating = Integer.parseInt(userText);
                    if (rating < 1 || rating > 5) {
                        bot.execute(new SendMessage(chatId, "Erro: Avaliação inválida. Por favor, forneça uma avaliação entre 1 e 5."));
                        return;
                    }
                    feedback.setAvaliacao(rating);
                    tempFeedbacks.put(chatId, feedback);
                    userStates.put(chatId, "awaiting_feedback_message");
                    bot.execute(new SendMessage(chatId, "Digite seu feedback:"));
                    break;
                case "awaiting_feedback_message":
                    feedback.setMensagem(userText);
                    questFeedbackBo.inserir(feedback);
                    bot.execute(new SendMessage(chatId, "Obrigado pelo seu feedback!"));
                    tempFeedbacks.remove(chatId);
                    userStates.remove(chatId);
                    break;
            }
        } catch (SQLException e) {
            System.err.println("Erro ao registrar feedback: " + e.getMessage());
            bot.execute(new SendMessage(chatId, "Erro ao registrar seu feedback, por favor tente novamente mais tarde."));
            tempFeedbacks.remove(chatId);
            userStates.remove(chatId);
        } catch (NumberFormatException e) {
            bot.execute(new SendMessage(chatId, "Erro: Avaliação inválida. Por favor, forneça uma avaliação entre 1 e 5."));
        }
    }

    private void opcaoSite(String chatId) {
        String messageText = "Você pode visitar nosso site para mais informações.";
        InlineKeyboardMarkup keyboard = new InlineKeyboardMarkup(
                new InlineKeyboardButton("Visite nosso site").url("https://homologacao-challenge-salesforce.vercel.app/")
        );

        bot.execute(new SendMessage(chatId, messageText).replyMarkup(keyboard));
    }

    private void opcaoAcoesUser(String chatId, String userText) {
        String state = userStates.get(chatId);
        if (state != null) {
            try {
                switch (state) {
                    case "awaiting_nome":
                    case "awaiting_email":
                    case "awaiting_telefone":
                    case "awaiting_segmento":
                    case "awaiting_cargo":
                    case "awaiting_mensagem":
                    case "awaiting_produto":
                    case "awaiting_tamanho_empresa":
                        fluxoContato(chatId, userText);
                        break;
                    case "awaiting_consulta_response_type":
                        fluxoConsulta(chatId, userText);
                        break;
                    case "awaiting_consulta_text_query":
                        handleConsultaQuery(chatId, userText, false);
                        break;
                    case "awaiting_consulta_audio_query":
                        handleConsultaQuery(chatId, userText, true);
                        break;
                    case "awaiting_feedback_name":
                    case "awaiting_feedback_email":
                    case "awaiting_feedback_rating":
                    case "awaiting_feedback_message":
                        fluxoFeedback(chatId, userText);
                        break;
                    default:
                        opcaoDefault(chatId);
                        break;
                }
            } catch (Exception e) {
                System.err.println("Erro inesperado: " + e.getMessage());
                bot.execute(new SendMessage(chatId, "Erro inesperado. Por favor, tente novamente."));
            }
        } else {
            opcaoDefault(chatId);
        }
    }



    /**
     * Configura o listener para receber atualizações do bot do Telegram e processá-las.
     */
    public void setListener() {
        bot.setUpdatesListener(updates -> {
            for (Update update : updates) {
                processUpdate(update);
            }
            return UpdatesListener.CONFIRMED_UPDATES_ALL;
        }, e -> {
            if (e.response() != null) {
                System.err.println("Erro da API do Telegram: " + e.response().description());
            } else {
                System.err.println("Erro de rede ou de conexão: " + e.getMessage());
                e.printStackTrace();
            }
        });
    }

    /**
     * Responde a comandos desconhecidos ou inválidos.
     * Este método é chamado quando um comando fornecido pelo usuário não corresponde a nenhum comando conhecido.
     *
     * @param chatId O identificador do chat no Telegram, usado para interagir com o usuário.
     * Este método envia uma mensagem ao usuário informando que a opção selecionada é inválida e solicita que uma opção válida seja selecionada do menu.
     */
    private void opcaoDefault(String chatId) {
        bot.execute(new SendMessage(chatId, "Opção inválida, por favor selecione uma opção localizada no menu inferior à esquerda."));
    }
}
