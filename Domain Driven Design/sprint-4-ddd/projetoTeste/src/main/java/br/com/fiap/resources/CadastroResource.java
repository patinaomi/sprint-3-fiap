package br.com.fiap.resources;

import br.com.fiap.controller.CadastroController;
import br.com.fiap.model.vo.Cadastro;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.sql.SQLException;

@Path("/cadastro")
public class CadastroResource {

    private CadastroController cadastroController;

    public CadastroResource() {
        this.cadastroController = new CadastroController();
    }

    @POST
    @Path("/inserir")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response inserirCadastro(Cadastro cadastro) {
        try {
            cadastroController.inserirCadastro(cadastro);
            return Response.ok("Cadastro inserido com sucesso").build();
        } catch (SQLException e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Erro ao inserir cadastro").build();
        }
    }

    @PUT
    @Path("/atualizar")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response atualizarCadastro(Cadastro cadastro) {
        try {
            cadastroController.atualizarCadastro(cadastro);
            return Response.ok("Cadastro atualizado com sucesso").build();
        } catch (SQLException e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Erro ao atualizar cadastro").build();
        }
    }
}
