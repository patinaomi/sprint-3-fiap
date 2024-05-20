package br.com.fiap.model.vo;

import java.sql.Timestamp;

/**
 * Classe que representa um questionário.
 * Contém informações sobre o questionário preenchido pelo usuário, incluindo dados pessoais,
 * informações de contato, informações sobre a empresa e respostas a perguntas específicas do questionário do site.
 */
public class Questionario {

    // Atributos
    private int id;
    private String nome;
    private long telefone;
    private String email;
    private String nomeEmpresa;
    private String segmento;
    private String conheceSalesforce;
    private String necessidadeEmpresa;
    private String produtoImplantado;
    private int empresaFuncionamento;
    private int estrategiasMarketing;
    private int iaAutomacoes;
    private int desenvolverEstrategia;
    private int melhorarComunicacao;
    private int ambienteIntegrado;
    private int aumentoProdutividade;
    private int melhorarCapacitacao;
    private int reducaoCusto;
    private int aumentarConversao;
    private int potencializarVendas;
    private int acelerarVendas;
    private int riquezaDados;
    private int melhorarExperiencia;
    private int mostrarDiferencial;
    private int criarJornada;
    private int mktOportunidade;
    private Timestamp data;

    // Getters and Setters
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

    public long getTelefone() {
        return telefone;
    }

    public void setTelefone(long telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNomeEmpresa() {
        return nomeEmpresa;
    }

    public void setNomeEmpresa(String nomeEmpresa) {
        this.nomeEmpresa = nomeEmpresa;
    }

    public String getSegmento() {
        return segmento;
    }

    public void setSegmento(String segmento) {
        this.segmento = segmento;
    }

    public String getConheceSalesforce() {
        return conheceSalesforce;
    }

    public void setConheceSalesforce(String conheceSalesforce) {
        this.conheceSalesforce = conheceSalesforce;
    }

    public String getNecessidadeEmpresa() {
        return necessidadeEmpresa;
    }

    public void setNecessidadeEmpresa(String necessidadeEmpresa) {
        this.necessidadeEmpresa = necessidadeEmpresa;
    }

    public String getProdutoImplantado() {
        return produtoImplantado;
    }

    public void setProdutoImplantado(String produtoImplantado) {
        this.produtoImplantado = produtoImplantado;
    }

    public int getEmpresaFuncionamento() {
        return empresaFuncionamento;
    }

    public void setEmpresaFuncionamento(int empresaFuncionamento) {
        this.empresaFuncionamento = empresaFuncionamento;
    }

    public int getEstrategiasMarketing() {
        return estrategiasMarketing;
    }

    public void setEstrategiasMarketing(int estrategiasMarketing) {
        this.estrategiasMarketing = estrategiasMarketing;
    }

    public int getIaAutomacoes() {
        return iaAutomacoes;
    }

    public void setIaAutomacoes(int iaAutomacoes) {
        this.iaAutomacoes = iaAutomacoes;
    }

    public int getDesenvolverEstrategia() {
        return desenvolverEstrategia;
    }

    public void setDesenvolverEstrategia(int desenvolverEstrategia) {
        this.desenvolverEstrategia = desenvolverEstrategia;
    }

    public int getMelhorarComunicacao() {
        return melhorarComunicacao;
    }

    public void setMelhorarComunicacao(int melhorarComunicacao) {
        this.melhorarComunicacao = melhorarComunicacao;
    }

    public int getAmbienteIntegrado() {
        return ambienteIntegrado;
    }

    public void setAmbienteIntegrado(int ambienteIntegrado) {
        this.ambienteIntegrado = ambienteIntegrado;
    }

    public int getAumentoProdutividade() {
        return aumentoProdutividade;
    }

    public void setAumentoProdutividade(int aumentoProdutividade) {
        this.aumentoProdutividade = aumentoProdutividade;
    }

    public int getMelhorarCapacitacao() {
        return melhorarCapacitacao;
    }

    public void setMelhorarCapacitacao(int melhorarCapacitacao) {
        this.melhorarCapacitacao = melhorarCapacitacao;
    }

    public int getReducaoCusto() {
        return reducaoCusto;
    }

    public void setReducaoCusto(int reducaoCusto) {
        this.reducaoCusto = reducaoCusto;
    }

    public int getAumentarConversao() {
        return aumentarConversao;
    }

    public void setAumentarConversao(int aumentarConversao) {
        this.aumentarConversao = aumentarConversao;
    }

    public int getPotencializarVendas() {
        return potencializarVendas;
    }

    public void setPotencializarVendas(int potencializarVendas) {
        this.potencializarVendas = potencializarVendas;
    }

    public int getAcelerarVendas() {
        return acelerarVendas;
    }

    public void setAcelerarVendas(int acelerarVendas) {
        this.acelerarVendas = acelerarVendas;
    }

    public int getRiquezaDados() {
        return riquezaDados;
    }

    public void setRiquezaDados(int riquezaDados) {
        this.riquezaDados = riquezaDados;
    }

    public int getMelhorarExperiencia() {
        return melhorarExperiencia;
    }

    public void setMelhorarExperiencia(int melhorarExperiencia) {
        this.melhorarExperiencia = melhorarExperiencia;
    }

    public int getMostrarDiferencial() {
        return mostrarDiferencial;
    }

    public void setMostrarDiferencial(int mostrarDiferencial) {
        this.mostrarDiferencial = mostrarDiferencial;
    }

    public int getCriarJornada() {
        return criarJornada;
    }

    public void setCriarJornada(int criarJornada) {
        this.criarJornada = criarJornada;
    }

    public int getMktOportunidade() {
        return mktOportunidade;
    }

    public void setMktOportunidade(int mktOportunidade) {
        this.mktOportunidade = mktOportunidade;
    }

    public Timestamp getData() {
        return data;
    }

    public void setData(Timestamp data) {
        this.data = data;
    }

    // ToString para formatar os dados
    @Override
    public String toString() {
        return  "\nNome: " + getNome() +
                "\nTelefone: " + getTelefone() +
                "\nE-mail: " + getEmail() +
                "\nNome da Empresa: " + getNomeEmpresa() +
                "\nSegmento: " + getSegmento() +
                "\nConhece Salesforce: " + getConheceSalesforce() +
                "\nNecessidade Empresa: " + getNecessidadeEmpresa() +
                "\nProduto Implantado: " + getProdutoImplantado() +
                "\nEmpresa Funcionamento: " + getEmpresaFuncionamento() +
                "\nIA Automações: " + getIaAutomacoes() +
                "\nDesenvolver Estratégia: " + getDesenvolverEstrategia() +
                "\nMelhorar Comunicação: " + getMelhorarComunicacao() +
                "\nAmbiente Integrado: " + getAmbienteIntegrado() +
                "\nAumento Produtividade: " + getAumentoProdutividade() +
                "\nRedução Custos: " + getReducaoCusto() +
                "\nAumentar Conversão: " + getAumentarConversao() +
                "\nPotencializar Vendas: " + getPotencializarVendas() +
                "\nAcelerar Vendas: " + getAcelerarVendas() +
                "\nRiqueza Dados: " + getRiquezaDados() +
                "\nMelhorar Experiência: " + getMelhorarExperiencia() +
                "\nMostrar Diferencial: " + getMostrarDiferencial() +
                "\nCriar Jornada: " + getCriarJornada() +
                "\nMKT Oportunidade: " + getMktOportunidade();
    }

}
