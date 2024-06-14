package br.com.fiap.service;

import br.com.fiap.config.Config;
import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatMessage;
import com.theokanning.openai.completion.chat.ChatMessageRole;

import java.util.Arrays;

/**
 * Serviço para interagir com a API OpenAI, especificamente para gerar conteúdo de texto com base em modelos de linguagem.
 * Esta classe fornece métodos para solicitar e receber textos gerados pela API OpenAI sobre produtos da Salesforce.
 */
public class OpenAiService {
    private com.theokanning.openai.service.OpenAiService service;

    /**
     * Constrói uma instância de OpenAiService configurando o cliente da API OpenAI.
     * A chave API é obtida de um arquivo de configuração.
     */
    public OpenAiService() {
        String token = Config.getProperty("openai.api.key");
        this.service = new com.theokanning.openai.service.OpenAiService(token);
    }

    /**
     * Gera informações sobre produtos da Salesforce com base em uma consulta fornecida.
     * O texto gerado é formatado para ser educativo e informativo, conforme as instruções dadas ao modelo da OpenAI.
     *
     * @param consulta A consulta do usuário relacionada aos produtos da Salesforce.
     * @return Um texto informativo gerado ou null se ocorrer um erro na requisição.
     */
    public String gerarInformacao(String consulta) {
        String systemText = """
        Você é um assistente virtual especializado em produtos da Salesforce. Responda às perguntas dos usuários sobre
        as soluções que a Salesforce oferece, como Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud e outras.
        Se a pergunta não for relacionada à Salesforce, informe educadamente que você só pode responder a perguntas
        sobre a Salesforce. Suas respostas devem ser concisas e informativas, com no máximo um parágrafo.
        """;

        try {
            ChatCompletionRequest completionRequest = ChatCompletionRequest.builder()
                    .model("gpt-4-turbo")
                    .messages(Arrays.asList(
                            new ChatMessage(ChatMessageRole.SYSTEM.value(), systemText),
                            new ChatMessage(ChatMessageRole.USER.value(), consulta)
                    ))
                    .build();

            StringBuilder resultado = new StringBuilder();

            service.createChatCompletion(completionRequest)
                    .getChoices()
                    .forEach(c -> resultado.append(c.getMessage().getContent()).append("\n"));

            return resultado.toString();
        } catch (Exception e) {
            System.err.println("Erro ao enviar requisição para OpenAI: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }
}
