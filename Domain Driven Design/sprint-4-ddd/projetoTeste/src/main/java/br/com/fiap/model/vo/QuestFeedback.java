package br.com.fiap.model.vo;

import java.sql.Timestamp;

/**
 * Classe que representa o feedback de um questionário.
 * Contém informações sobre o feedback fornecido pelo usuário, incluindo nome, email, avaliação, data e mensagem.
 */
public class QuestFeedback {

    // Atributos
    private int id;
    private String nome;
    private String email;
    private int avaliacao;
    private Timestamp data;
    private String mensagem;

    // Getters & Setters

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

    public int getAvaliacao() {
        return avaliacao;
    }

    public void setAvaliacao(int avaliacao) {
        this.avaliacao = avaliacao;
    }

    public Timestamp getData() {
        return data;
    }

    public void setData(Timestamp data) {
        this.data = data;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    // ToString para formatar os dados
    @Override
    public String toString() {
        return  "\nNome: " + getNome() +
                "\nE-mail: " + getEmail() +
                "\nAvaliação: " + getAvaliacao() +
                "\nMensagem: " + getMensagem();
    }
}