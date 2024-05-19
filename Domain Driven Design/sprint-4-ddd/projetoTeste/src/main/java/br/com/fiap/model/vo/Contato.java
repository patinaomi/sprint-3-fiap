package br.com.fiap.model.vo;

import javax.xml.bind.annotation.XmlRootElement;
import java.sql.Timestamp;

@XmlRootElement
public class Contato {

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

	@Override
	public String toString() {
		return "Contato{" +
				"id=" + id +
				", nome='" + nome + '\'' +
				", email='" + email + '\'' +
				", telefone='" + telefone + '\'' +
				", segmento='" + segmento + '\'' +
				", cargo='" + cargo + '\'' +
				", msg " + mensagem +
				", data=" + data +
				", produtoId=" + produtoId +
				", tamanhoEmpresaId=" + tamanhoEmpresaId +
				'}';
	}
}
