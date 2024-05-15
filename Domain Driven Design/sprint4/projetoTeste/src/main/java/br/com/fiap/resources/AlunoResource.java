package br.com.fiap.resources;

import java.sql.SQLException;
import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;

import com.fasterxml.jackson.databind.deser.impl.ExternalTypeHandler.Builder;

import br.com.fiap.beans.Aluno;
import br.com.fiap.bo.AlunoBO;

@Path("/aluno") //nome da página
public class AlunoResource{
	
	private AlunoBO alunoBO = new AlunoBO();

	
	//inserir (POST)
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response cadastroRs(Aluno aluno, @Context UriInfo uriInfo) throws ClassNotFoundException, SQLException {
		alunoBO.inserirBO(aluno);
		UriBuilder builder = uriInfo.getAbsolutePathBuilder(); //recebe a informação do front (página)
		builder.path(Integer.toString(aluno.getRm())); //identifica o id do campo (String)
		return Response.created(builder.build()).build(); //composição -> caminho (carrregar o que foi carregado) - http -> 200
	}
	
	//atualizar (PUT)
	@PUT
	@Path("/{rm}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response atualizaRs(Aluno aluno, @PathParam("rm") int rm) throws ClassNotFoundException, SQLException {
		alunoBO.atualizarBO(aluno);
		return Response.ok().build();
	}
	
	
	//deletar (DELETE)
	@DELETE
	@Path("/{rm}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response deletarRs(@PathParam("rm") int rm) throws ClassNotFoundException, SQLException {
		alunoBO.deletarBO(rm);
		return Response.ok().build();
	}
	
	
	//consultar (GET)
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Aluno> selecionarRs() throws ClassNotFoundException, SQLException{
		return (ArrayList<Aluno>) alunoBO.selecionarBO();
	}
}