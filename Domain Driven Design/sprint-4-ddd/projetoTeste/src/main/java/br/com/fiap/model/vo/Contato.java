package br.com.fiap.model.vo;

import javax.xml.bind.annotation.XmlRootElement;
import java.sql.Timestamp;

/**
 * Classe que representa um contato.
 * Contém informações pessoais, de contato e detalhes profissionais do contato, além de dados relacionados ao produto e tamanho da empresa.
 */
@XmlRootElement
public class Contato {

	//Atributos
	private int id;
	private String nome;
	private String email;
	private String telefone;
	private String segmento;
	private String cargo;
	private String mensagem;
	private Timestamp data;
	private int produtoId;
	private int tamanhoEmpresaId;

	// Getters e setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getSegmento() {
		return segmento;
	}

	public void setSegmento(String segmento) {
		this.segmento = segmento;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}

	public Timestamp getData() {
		return data;
	}

	public void setData(Timestamp data) {
		this.data = data;
	}

	public int getProdutoId() {
		return produtoId;
	}

	public void setProdutoId(int produtoId) {
		this.produtoId = produtoId;
	}
	public int getTamanhoEmpresaId() {
		return tamanhoEmpresaId;
	}

	public void setTamanhoEmpresaId(int tamanhoEmpresaId) {
		this.tamanhoEmpresaId = tamanhoEmpresaId;
	}

	// ToString para formatar os dados
	@Override
	public String toString() {
		return  "\nNome: " + getNome() +
				"\nE-mail: " + getEmail() +
				"\nTelefone: " + getTelefone() +
				"\nSegmento: " + getSegmento() +
				"\nCargo: " + getCargo() +
				"\nMensagem: " + getMensagem() +
				"\nId Produto: " + getProdutoId() +
				"\nId Tam. Empresa: " + getTamanhoEmpresaId();
	}
}
