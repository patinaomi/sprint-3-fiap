package model.vo;

import java.util.Date;

public class ExperienciaUsuario {
    //atributos
    private int id;
    private int visitFk;
    private int pergChatbotFk;
    private int respChatbotFk;
    private Date dataHoraVisita;
    private String prodPesquisado;
    private String pagVisitada;
    private int tempoVisitada;

    //construtores
    public ExperienciaUsuario(int visitFk, int pergChatbotFk, int respChatbotFk, Date dataHoraVisita, String prodPesquisado, String pagVisitada, int tempoVisitada) {
        this.visitFk = visitFk;
        this.pergChatbotFk = pergChatbotFk;
        this.respChatbotFk = respChatbotFk;
        this.dataHoraVisita = dataHoraVisita;
        this.prodPesquisado = prodPesquisado;
        this.pagVisitada = pagVisitada;
        this.tempoVisitada = tempoVisitada;
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

    public Date getDataHoraVisita() {
        return dataHoraVisita;
    }

    public void setDataHoraVisita(Date dataHoraVisita) {
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

    public int getTempoVisitada() {
        return tempoVisitada;
    }

    public void setTempoVisitada(int tempoVisitada) {
        this.tempoVisitada = tempoVisitada;
    }
}