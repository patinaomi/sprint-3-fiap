package model.vo;

import model.bo.GestaoData;

import java.sql.Timestamp;

public class Leads {
    Timestamp dataAtual = GestaoData.obterDataHoraAtual();

    //atributos
    private int id;
    private int questFk;
    private int platLogFk;
    private String nome;
    private String email;
    private String empresa;
    private Timestamp dataHoraLogin;

    //construtor
    public Leads(int questFk, int platLogFk, String nome, String email, String empresa) {
        this.questFk = questFk;
        this.platLogFk = platLogFk;
        this.nome = nome;
        this.email = email;
        this.empresa = empresa;
        this.dataHoraLogin = dataAtual;
    }



    //getters & setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getQuestFk() {
        return questFk;
    }

    public void setQuestFk(int questFk) {
        this.questFk = questFk;
    }

    public int getPlatLogFk() {
        return platLogFk;
    }

    public void setPlatLogFk(int platLogFk) {
        this.platLogFk = platLogFk;
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

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    public Timestamp getDataHoraLogin() {
        return dataHoraLogin;
    }

    public void setDataHoraLogin(Timestamp dataHoraLogin) {
        this.dataHoraLogin = dataHoraLogin;
    }

    public String toString() {
        return "\nLead: #" + getId() +
                "\nQuestionário FK: " + getQuestFk() +
                "\nLogin: " + getPlatLogFk() +
                "\nNome: " + getNome() +
                "\nE-mail: " + getEmail() +
                "\nEmpresa: " + getEmpresa() +
                "\nData: " + GestaoData.formatarTimestampParaString(getDataHoraLogin());
    }
}
