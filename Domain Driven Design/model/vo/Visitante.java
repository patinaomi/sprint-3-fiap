package model.vo;

import model.bo.GestaoData;

import java.sql.Timestamp;

public class Visitante {

    Timestamp dataAtual = GestaoData.obterDataHoraAtual();

    // atributos
    private int id;
    private String nome;
    private String email;
    private Timestamp dataHora;
    private int tempo;

    // construtores

    public Visitante(String nome, String email) {
        this.nome = nome;
        this.email = email;
        this.dataHora = dataAtual;
        this.tempo = 0;
    }

    public Visitante() {
        this.dataHora = dataAtual;

    }

    public Visitante(int id, String nome, String email, Timestamp dataHora, int tempo) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.dataHora = dataAtual;
        this.tempo = tempo;
    }

    // getter & setters
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

    public Timestamp getDataHora() {
        return dataHora;
    }

    public void setDataHora(Timestamp dataHora) {
        this.dataHora = dataHora;
    }

    public int getTempo() {
        return tempo;
    }

    public void setTempo(int tempo) {
        this.tempo = tempo;
    }

    @Override
    public String toString() {
        return "\nVisitante ID: #" + getId() +
                "\nNome: " + getNome() +
                "\nE-mail: " + getEmail() +
                "\nData: " + GestaoData.formatarTimestampParaString(getDataHora()) +
                "\nTempo Permanecido: " + getTempo() + "min";
    }

}
