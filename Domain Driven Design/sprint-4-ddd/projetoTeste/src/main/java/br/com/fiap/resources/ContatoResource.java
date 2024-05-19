package br.com.fiap.resources;

import java.sql.SQLException;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.com.fiap.controller.ContatoController;
import br.com.fiap.model.vo.Contato;


@Path("/contato")
public class ContatoResource {

	private ContatoController contatoController = new ContatoController();

	@POST
	@Path("/inserir")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response receberDadosFormulario(Contato contato) {
		try {
			contatoController.inserirContato(contato);
			System.out.println("Dados recebidos: " + contato);
			return Response.ok("Dados recebidos com sucesso").build();

		} catch (IllegalArgumentException e) {
			return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
		} catch (SQLException e) {
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Erro ao inserir dados").build();
		}
	}
}
