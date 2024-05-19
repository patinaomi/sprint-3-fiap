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

@Path("/feedback")
public class QuestFeedbackResource {

    private QuestFeedbackController questFeedbackController = new QuestFeedbackController();

    // Inserir (POST)
    @POST
    @Path("/inserir")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response cadastroFeedback(QuestFeedback feedback, @Context UriInfo uriInfo) throws ClassNotFoundException, SQLException {
        questFeedbackController.inserir(feedback);
        UriBuilder builder = uriInfo.getAbsolutePathBuilder();
        builder.path(Integer.toString(feedback.getId()));
        return Response.created(builder.build()).build();
    }
}
