package model.vo;

import model.bo.GestaoData;

import java.sql.Timestamp;

public class Questionario {
    Timestamp dataAtual = GestaoData.obterDataHoraAtual();

    //atributos
    private int num;
    private int visitaFk;
    private Timestamp dataHoraVisita;
    private String prodVisitado;
    private String conheceSales;
    private String ondeConheceuSales;
    private String conheceProdSales;
    private String empresa;
    private String segmento;
    private String necessidadeEmpresa;
    private String solucaoEmpresa;
    private int orcamentoEmpresa;
    private String email;

    //construtores
    public Questionario(int visitaFk, String prodVisitado, String conheceSales, String ondeConheceuSales,
                        String conheceProdSales, String empresa, String segmento, String necessidadeEmpresa,
                        String solucaoEmpresa, int orcamentoEmpresa, String email)
    {
        this.visitaFk = visitaFk;
        this.dataHoraVisita = dataAtual;
        this.prodVisitado = prodVisitado;
        this.conheceSales = conheceSales;
        this.ondeConheceuSales = ondeConheceuSales;
        this.conheceProdSales = conheceProdSales;
        this.empresa = empresa;
        this.segmento = segmento;
        this.necessidadeEmpresa = necessidadeEmpresa;
        this.solucaoEmpresa = solucaoEmpresa;
        this.orcamentoEmpresa = orcamentoEmpresa;
        this.email = email;
    }

    public Questionario() {
        this.dataHoraVisita = dataAtual;
    }

    //getters & setters

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public int getVisitaFk() {
        return visitaFk;
    }

    public void setVisitaFk(int visitaFk) {
        this.visitaFk = visitaFk;
    }

    public Timestamp getDataHoraVisita() {
        return dataHoraVisita;
    }

    public void setDataHoraVisita(Timestamp dataHoraVisita) {
        this.dataHoraVisita = dataHoraVisita;
    }

    public String getProdVisitado() {
        return prodVisitado;
    }

    public void setProdVisitado(String prodVisitado) {
        this.prodVisitado = prodVisitado;
    }

    public String getConheceSales() {
        return conheceSales;
    }

    public void setConheceSales(String conheceSales) {
        this.conheceSales = conheceSales;
    }

    public String getOndeConheceuSales() {
        return ondeConheceuSales;
    }

    public void setOndeConheceuSales(String ondeConheceuSales) {
        this.ondeConheceuSales = ondeConheceuSales;
    }

    public String getConheceProdSales() {
        return conheceProdSales;
    }

    public void setConheceProdSales(String conheceProdSales) {
        this.conheceProdSales = conheceProdSales;
    }

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    public String getSegmento() {
        return segmento;
    }

    public void setSegmento(String segmento) {
        this.segmento = segmento;
    }

    public String getNecessidadeEmpresa() {
        return necessidadeEmpresa;
    }

    public void setNecessidadeEmpresa(String necessidadeEmpresa) {
        this.necessidadeEmpresa = necessidadeEmpresa;
    }

    public String getSolucaoEmpresa() {
        return solucaoEmpresa;
    }

    public void setSolucaoEmpresa(String solucaoEmpresa) {
        this.solucaoEmpresa = solucaoEmpresa;
    }

    public int getOrcamentoEmpresa() {
        return orcamentoEmpresa;
    }

    public void setOrcamentoEmpresa(int orcamentoEmpresa) {
        this.orcamentoEmpresa = orcamentoEmpresa;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "\nQuestionário ID: #" + getNum() +
                "\nVisitante FK: " + getVisitaFk() +
                "\nData: " + GestaoData.formatarTimestampParaString(getDataHoraVisita()) +
                "\nProduto Visitado: " + getProdVisitado() +
                "\nConhece a Salesforce: " + getConheceSales() +
                "\nOnde conheceu: " + getOndeConheceuSales() +
                "\nConhece Produto Salesforce: " + getConheceProdSales() +
                "\nEmpresa: " + getEmpresa() +
                "\nSegmento: " + getSegmento() +
                "\nNecessidade Empresa: " + getNecessidadeEmpresa() +
                "\nSolução Empresa: " + getSolucaoEmpresa() +
                "\nOrçamento Empresa: " + getOrcamentoEmpresa() +
                "\nE-mail: " + getEmail();
    }

}
