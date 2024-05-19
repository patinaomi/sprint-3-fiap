package br.com.fiap.resources;

import br.com.fiap.controller.QuestionarioController;
import br.com.fiap.model.vo.Questionario;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.sql.SQLException;

@Path("/questionario")
public class QuestionarioResource {

    private QuestionarioController questionarioController;

    public QuestionarioResource() {
        this.questionarioController = new QuestionarioController();
    }

    @POST
    @Path("/inserir")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response inserirQuestionario(Questionario questionario) {
        try {
            questionarioController.inserirQuestionario(questionario);
            return Response.ok("Questionário inserido com sucesso").build();
        } catch (SQLException e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Erro ao inserir questionário").build();
        }
    }
}
