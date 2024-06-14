package br.com.fiap.service;

import br.com.fiap.config.Config;
import br.com.fiap.model.bo.CadastroBo;
import br.com.fiap.model.bo.ConsultaProdutoBo;
import br.com.fiap.model.bo.QuestFeedbackBo;
import br.com.fiap.model.bo.Validacoes;
import br.com.fiap.model.dao.CadastroDao;
import br.com.fiap.model.dao.ConsultaProdutoDao;
import br.com.fiap.model.dao.QuestFeedbackDao;
import br.com.fiap.model.dao.impl.CadastroDaoImpl;
import br.com.fiap.model.dao.impl.ConsultaProdutoDaoImpl;
import br.com.fiap.model.dao.impl.QuestFeedbackDaoImpl;
import br.com.fiap.model.vo.Cadastro;
import br.com.fiap.model.vo.ConsultaProduto;
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

    private CadastroBo cadastroBo;
    private ConsultaProdutoBo consultaProdutoBo;
    private QuestFeedbackBo questFeedbackBo;

    private Map<String, String> userStates = new HashMap<>();
    private Map<String, Cadastro> tempUsers = new HashMap<>();
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
        this.cadastroBo = new CadastroBo(new CadastroDaoImpl());
        this.consultaProdutoBo = new ConsultaProdutoBo(new ConsultaProdutoDaoImpl());
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
                case "/cadastro":
                    opcaoCadastro(chatId);
                    break;
                case "/duvida":
                    opcaoProdutos(chatId);
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

        if (data.equals("texto") || data.equals("audio")) {
            fluxoProdutos(chatId, data);
        } else if (data.equals("feedback_sim")) {
            opcaoFeedback(chatId);
        } else if (data.equals("feedback_nao")) {
            bot.execute(new SendMessage(chatId, "Obrigado por usar nossos serviços!"));
        }
    }

    private void opcaoStart(String chatId) {
        String welcomeMessage = "Bem-vindo ao SalesBot! Utilize o menu inferior à esquerda para acessar as opções.";
        bot.execute(new SendMessage(chatId, welcomeMessage));
        userStates.put(chatId, null);
    }

    private void opcaoCadastro(String chatId) {
        bot.execute(new SendMessage(chatId, "Digite seu nome:"));
        userStates.put(chatId, "awaiting_first_name");
    }

    private void fluxoCadastro(String chatId, String userText) {
        String state = userStates.get(chatId);
        Cadastro cadastro = tempUsers.getOrDefault(chatId, new Cadastro());

        try {
            switch (state) {
                case "awaiting_first_name":
                    if (!Validacoes.validarUsuario(userText)) {
                        bot.execute(new SendMessage(chatId, "Erro: Nome inválido. O nome deve ter entre 2 e 30 caracteres."));
                        return;
                    }
                    cadastro.setNome(userText);
                    tempUsers.put(chatId, cadastro);
                    userStates.put(chatId, "awaiting_last_name");
                    bot.execute(new SendMessage(chatId, "Digite seu sobrenome:"));
                    break;
                case "awaiting_last_name":
                    if (!Validacoes.validarUsuario(userText)) {
                        bot.execute(new SendMessage(chatId, "Erro: Sobrenome inválido. O sobrenome deve ter entre 2 e 30 caracteres."));
                        return;
                    }
                    cadastro.setSobrenome(userText);
                    tempUsers.put(chatId, cadastro);
                    userStates.put(chatId, "awaiting_email");
                    bot.execute(new SendMessage(chatId, "Digite seu e-mail:"));
                    break;
                case "awaiting_email":
                    if (!Validacoes.validarEmail(userText)) {
                        bot.execute(new SendMessage(chatId, "Erro: Email inválido. Por favor, insira um email válido."));
                        return;
                    }
                    cadastro.setEmail(userText);
                    tempUsers.put(chatId, cadastro);
                    userStates.put(chatId, "awaiting_password");
                    bot.execute(new SendMessage(chatId, "Crie uma senha:"));
                    break;
                case "awaiting_password":
                    if (!Validacoes.validarSenha(userText)) {
                        bot.execute(new SendMessage(chatId, "Erro: A senha deve conter no mínimo 6 caracteres, incluindo pelo menos um número, uma letra maiúscula, uma letra minúscula e um caractere especial."));
                        return;
                    }
                    cadastro.setSenha(userText);
                    tempUsers.put(chatId, cadastro);
                    userStates.put(chatId, "awaiting_telephone");
                    bot.execute(new SendMessage(chatId, "Digite seu telefone:"));
                    break;
                case "awaiting_telephone":
                    if (!Validacoes.validarTelefone(userText)) {
                        bot.execute(new SendMessage(chatId, "Erro: Telefone inválido. Use apenas números."));
                        return;
                    }
                    cadastro.setCelular(userText.replaceAll("[^0-9]", ""));
                    cadastroBo.inserir(cadastro);
                    bot.execute(new SendMessage(chatId, "Cadastro concluído com sucesso!"));
                    tempUsers.remove(chatId);
                    userStates.remove(chatId);
                    break;
            }
        } catch (SQLException e) {
            System.err.println("Erro ao registrar usuário: " + e.getMessage());
            bot.execute(new SendMessage(chatId, "Erro: Tivemos um problema ao fazer seu cadastro!"));
            tempUsers.remove(chatId);
            userStates.remove(chatId);
        }
    }

    private void opcaoProdutos(String chatId) {
        InlineKeyboardMarkup keyboard = new InlineKeyboardMarkup(
                new InlineKeyboardButton("Texto").callbackData("texto"),
                new InlineKeyboardButton("Áudio").callbackData("audio")
        );
        bot.execute(new SendMessage(chatId, "Você gostaria de receber a resposta em texto ou áudio?").replyMarkup(keyboard));
        userStates.put(chatId, "awaiting_produtos_response_type");
    }

    private void fluxoProdutos(String chatId, String userText) {
        boolean isAudio = userText.equals("audio");
        userStates.put(chatId, isAudio ? "awaiting_produtos_audio_query" : "awaiting_produtos_text_query");
        bot.execute(new SendMessage(chatId, "Escreva a sua pergunta sobre produtos da Salesforce:"));
    }

    private void handleProdutoQuery(String chatId, String userText, boolean isAudio) {
        ConsultaProduto consulta = new ConsultaProduto();
        consulta.setPergunta(userText);
        String responseText = openAiService.gerarInformacao(userText);
        consulta.setResposta(responseText);

        try {
            consultaProdutoBo.inserir(consulta);
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
                    case "awaiting_first_name":
                    case "awaiting_last_name":
                    case "awaiting_email":
                    case "awaiting_password":
                    case "awaiting_telephone":
                        fluxoCadastro(chatId, userText);
                        break;
                    case "awaiting_produtos_response_type":
                        fluxoProdutos(chatId, userText);
                        break;
                    case "awaiting_produtos_text_query":
                        handleProdutoQuery(chatId, userText, false);
                        break;
                    case "awaiting_produtos_audio_query":
                        handleProdutoQuery(chatId, userText, true);
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
