package model.vo;

import java.sql.Timestamp;

public class ExperienciaUsuario {
    //atributos
    private int id;
    private int visitFk;
    private int pergChatbotFk;
    private int respChatbotFk;
    private Timestamp dataHoraVisita;
    private String prodPesquisado;
    private String pagVisitada;
    private int tempoVisita;

    //construtores
    public ExperienciaUsuario(int visitFk, int pergChatbotFk, int respChatbotFk, Timestamp dataHoraVisita, String prodPesquisado, String pagVisitada, int tempoVisita) {
        this.visitFk = visitFk;
        this.pergChatbotFk = pergChatbotFk;
        this.respChatbotFk = respChatbotFk;
        this.dataHoraVisita = dataHoraVisita;
        this.prodPesquisado = prodPesquisado;
        this.pagVisitada = pagVisitada;
        this.tempoVisita = tempoVisita;
    }

    //getters & setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getVisitFk() {
        return visitFk;
    }

    public void setVisitFk(int visitFk) {
        this.visitFk = visitFk;
    }

    public int getPergChatbotFk() {
        return pergChatbotFk;
    }

    public void setPergChatbotFk(int pergChatbotFk) {
        this.pergChatbotFk = pergChatbotFk;
    }

    public int getRespChatbotFk() {
        return respChatbotFk;
    }

    public void setRespChatbotFk(int respChatbotFk) {
        this.respChatbotFk = respChatbotFk;
    }

    public Timestamp getDataHoraVisita() {
        return dataHoraVisita;
    }

    public void setDataHoraVisita(Timestamp dataHoraVisita) {
        this.dataHoraVisita = dataHoraVisita;
    }

    public String getProdPesquisado() {
        return prodPesquisado;
    }

    public void setProdPesquisado(String prodPesquisado) {
        this.prodPesquisado = prodPesquisado;
    }

    public String getPagVisitada() {
        return pagVisitada;
    }

    public void setPagVisitada(String pagVisitada) {
        this.pagVisitada = pagVisitada;
    }

    public int getTempoVisita() {
        return tempoVisita;
    }

    public void setTempoVisita(int tempoVisita) {
        this.tempoVisita = tempoVisita;
    }
}