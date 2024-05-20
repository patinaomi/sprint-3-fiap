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

import br.com.fiap.controller.ContatoController;
import br.com.fiap.model.vo.Contato;

/**
 * Recurso RESTful para operações relacionadas ao Contato.
 * Fornece endpoints para inserir contatos via HTTP.
 */
@Path("/contato")
public class ContatoResource {

	private ContatoController contatoController = new ContatoController();

	/**
	 * Endpoint para inserir um novo contato.
	 *
	 * @param contato O objeto Contato a ser inserido.
	 * @param uriInfo Informações de URI para construir o URI do recurso criado.
	 * @return A resposta HTTP indicando o resultado da operação.
	 */
	@POST
	@Path("/inserir")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response receberDadosFormulario(Contato contato, @Context UriInfo uriInfo) {
		try {
			contatoController.inserir(contato);
			System.out.println("Dados Recebidos: " + contato);
			UriBuilder builder = uriInfo.getAbsolutePathBuilder();
			builder.path(Integer.toString(contato.getId()));
			return Response.created(builder.build()).build();
		} catch (IllegalArgumentException e) {
			return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
		} catch (SQLException e) {
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Erro ao inserir dados").build();
		}
	}
}
