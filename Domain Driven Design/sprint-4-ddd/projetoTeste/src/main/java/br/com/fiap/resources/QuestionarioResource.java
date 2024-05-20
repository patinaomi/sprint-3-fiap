package br.com.fiap.resources;

import br.com.fiap.controller.QuestionarioController;
import br.com.fiap.model.vo.Questionario;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.sql.SQLException;

/**
 * Recurso RESTful para operações relacionadas ao Questionario.
 * Fornece endpoints para inserir questionários via HTTP.
 */
@Path("/questionario")
public class QuestionarioResource {

    private QuestionarioController questionarioController;

    /**
     * Construtor da classe QuestionarioResource.
     * Inicializa o controlador de questionário.
     */
    public QuestionarioResource() {
        this.questionarioController = new QuestionarioController();
    }

    /**
     * Endpoint para inserir um novo questionário.
     *
     * @param questionario O objeto Questionario a ser inserido.
     * @return A resposta HTTP indicando o resultado da operação.
     */
    @POST
    @Path("/inserir")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response inserirQuestionario(Questionario questionario) {
        try {
            questionarioController.inserir(questionario);
            System.out.println("Dados recebidos: " + questionario);
            return Response.ok("Questionário inserido com sucesso").build();
        } catch (SQLException e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Erro ao inserir questionário").build();
        }
    }
}
