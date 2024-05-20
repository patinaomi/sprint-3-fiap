package br.com.fiap.resources;

import java.sql.SQLException;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;

import br.com.fiap.controller.QuestFeedbackController;
import br.com.fiap.model.vo.QuestFeedback;

/**
 * Recurso RESTful para operações relacionadas ao feedback de questionários.
 * Fornece endpoints para inserir feedbacks via HTTP.
 */
@Path("/feedback")
public class QuestFeedbackResource {

    private QuestFeedbackController questFeedbackController = new QuestFeedbackController();

    /**
     * Endpoint para inserir um novo feedback de questionário.
     *
     * @param feedback O objeto QuestFeedback a ser inserido.
     * @param uriInfo Informações de URI para construir o URI do recurso criado.
     * @return A resposta HTTP indicando o resultado da operação.
     */
    @POST
    @Path("/inserir")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response cadastroFeedback(QuestFeedback feedback, @Context UriInfo uriInfo) {
        try {
            questFeedbackController.inserir(feedback);
            System.out.println("Dados recebidos: " + feedback);
            UriBuilder builder = uriInfo.getAbsolutePathBuilder();
            builder.path(Integer.toString(feedback.getId()));
            return Response.created(builder.build()).build();
        } catch (SQLException e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Erro ao inserir feedback").build();
        }
    }
}
