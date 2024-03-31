package model.vo;

import model.bo.GestaoData;

import java.sql.Timestamp;

public class PlataformaLogin {
    Timestamp dataAtual = GestaoData.obterDataHoraAtual();

    //atributos
    private int id;
    private int visitaFk;
    private String nome;
    private String status;
    private Timestamp dataImplementacao;
    private String email;

    //construtores
    public PlataformaLogin(int visitaFk, String nome, String status, String email) {
        this.visitaFk = visitaFk;
        this.nome = nome;
        this.status = status;
        this.dataImplementacao = dataAtual;
        this.email = email;
    }

    //getters & setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getVisitaFk() {
        return visitaFk;
    }

    public void setVisitaFK(int visitaFk) {
        this.visitaFk = visitaFk;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Timestamp getDataImplementacao() {
        return dataImplementacao;
    }

    public void setDataImplementacao(Timestamp dataImplementacao) {
        this.dataImplementacao = dataImplementacao;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String toString() {
        return "\nPlataforma Login ID: #" + getId() +
                "\nVisitante FK: " + getVisitaFk() +
                "\nNome: " + getNome() +
                "\nE-mail: " + getEmail() +
                "\nStatus: " + getStatus() +
                "\nData Implementação: " + GestaoData.formatarTimestampParaString(getDataImplementacao());
    }
}
