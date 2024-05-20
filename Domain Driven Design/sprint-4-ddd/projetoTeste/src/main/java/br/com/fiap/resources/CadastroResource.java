package br.com.fiap.resources;

import br.com.fiap.controller.CadastroController;
import br.com.fiap.model.vo.Cadastro;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;
import java.sql.SQLException;

/**
 * Recurso RESTful para operações relacionadas ao Cadastro.
 * Fornece endpoints para inserir e atualizar cadastros via HTTP.
 */
@Path("/cadastro")
public class CadastroResource {

    private CadastroController cadastroController;

    /**
     * Construtor da classe CadastroResource.
     * Inicializa o controlador de cadastro.
     */
    public CadastroResource() {
        this.cadastroController = new CadastroController();
    }

    /**
     * Endpoint para inserir um novo cadastro.
     *
     * @param cadastro O objeto Cadastro a ser inserido.
     * @param uriInfo Informações de URI para construir o URI do recurso criado.
     * @return A resposta HTTP indicando o resultado da operação.
     */
    @POST
    @Path("/inserir")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response inserirCadastro(Cadastro cadastro, @Context UriInfo uriInfo) {
        try {
            cadastroController.inserir(cadastro);
            System.out.println("Dados recebidos: " + cadastro);
            UriBuilder builder = uriInfo.getAbsolutePathBuilder();
            builder.path(Integer.toString(cadastro.getId()));
            return Response.created(builder.build()).build();
        } catch (SQLException e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Erro ao inserir cadastro").build();
        }
    }

    /**
     * Endpoint para atualizar um cadastro existente.
     *
     * @param cadastro O objeto Cadastro a ser atualizado.
     * @return A resposta HTTP indicando o resultado da operação.
     */
    @PUT
    @Path("/atualizar")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response atualizarCadastro(Cadastro cadastro) {
        try {
            cadastroController.atualizar(cadastro);
            System.out.println("Dados recebidos: " + cadastro);
            return Response.ok("Cadastro atualizado com sucesso").build();
        } catch (SQLException e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Erro ao atualizar cadastro").build();
        }
    }
}
