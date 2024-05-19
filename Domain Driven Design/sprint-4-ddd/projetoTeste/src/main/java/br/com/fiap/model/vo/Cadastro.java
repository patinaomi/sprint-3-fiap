package br.com.fiap.model.vo;

import java.sql.Timestamp;

public class Cadastro {
    private int id;
    private String nome;
    private String sobrenome;
    private String email;
    private String celular;
    private String funcao;
    private String senha;
    private Timestamp data;
    private int generoId;
    private int sobreEmpresaId;


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

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getFuncao() {
        return funcao;
    }

    public void setFuncao(String funcao) {
        this.funcao = funcao;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Timestamp getData() {
        return data;
    }

    public void setData(Timestamp data) {
        this.data = data;
    }

    public int getGeneroId() {
        return generoId;
    }

    public void setGeneroId(int generoId) {
        this.generoId = generoId;
    }

    public int getSobreEmpresaId() {
        return sobreEmpresaId;
    }

    public void setSobreEmpresaId(int sobreEmpresaId) {
        this.sobreEmpresaId = sobreEmpresaId;
    }

    @Override
    public String toString() {
        return "Login{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", sobrenome='" + sobrenome + '\'' +
                ", email='" + email + '\'' +
                ", celular='" + celular + '\'' +
                ", funcao='" + funcao + '\'' +
                ", senha='" + senha + '\'' +
                ", data=" + data +
                ", generoId=" + generoId +
                ", tamanhoEmpresaId=" + sobreEmpresaId +
                '}';
    }
}