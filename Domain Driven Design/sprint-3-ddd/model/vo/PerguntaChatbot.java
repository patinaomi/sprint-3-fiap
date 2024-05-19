package model.vo;

import model.bo.GestaoData;

import java.sql.Timestamp;

public class PerguntaChatbot {
    Timestamp dataAtual = GestaoData.obterDataHoraAtual();

    //atributos
    private int idPergunta;
    private int idResposta;
    private int visitaFk;
    private String conteudo;
    private String entidade;
    private String intencao;
    private String produto;
    private String satisfacao;
    private Timestamp dataHora;

    //construtores

    public PerguntaChatbot(int idPergunta, int idResposta, int visitaFk, String conteudo, String entidade,
                           String intencao, String produto, String satisfacao)
    {
        this.idPergunta = idPergunta;
        this.idResposta = idResposta;
        this.visitaFk = visitaFk;
        this.conteudo = conteudo;
        this.entidade = entidade;
        this.intencao = intencao;
        this.produto = produto;
        this.satisfacao = satisfacao;
        this.dataHora = dataAtual;
    }

    //getters & setters

    public int getIdPergunta() {
        return idPergunta;
    }

    public void setIdPergunta(int idPergunta) {
        this.idPergunta = idPergunta;
    }

    public int getIdResposta() {
        return idResposta;
    }

    public void setIdResposta(int idResposta) {
        this.idResposta = idResposta;
    }

    public int getVisitaFk() {
        return visitaFk;
    }

    public void setVisitaFk(int visitaFk) {
        this.visitaFk = visitaFk;
    }

    public String getConteudo() {
        return conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    public String getEntidade() {
        return entidade;
    }

    public void setEntidade(String entidade) {
        this.entidade = entidade;
    }

    public String getIntencao() {
        return intencao;
    }

    public void setIntencao(String intencao) {
        this.intencao = intencao;
    }

    public String getProduto() {
        return produto;
    }

    public void setProduto(String produto) {
        this.produto = produto;
    }

    public String getSatisfacao() {
        return satisfacao;
    }

    public void setSatisfacao(String satisfacao) {
        this.satisfacao = satisfacao;
    }

    public Timestamp getDataHora() {
        return dataHora;
    }

    public void setDataHora(Timestamp dataHora) {
        this.dataHora = dataHora;
    }

    public String toString() {
        return "\n--- Interação Chatbot ---"  +
                "\nVisitante FK:" + getVisitaFk() + " | Id Pergunta: #" + getIdPergunta() + " | Id Resposta: #" + getIdResposta() +
                "\nIntenção: " + getIntencao() +
                "\nEntidade: " + getEntidade() +
                "\nProduto: " + getProduto() +
                "\nSatisfação: " + getSatisfacao() +
                "\nData: " + GestaoData.formatarTimestampParaString(getDataHora()) +
                "\nConteúdo: " + getConteudo();
    }
}
