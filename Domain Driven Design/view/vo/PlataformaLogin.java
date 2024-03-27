package view.vo;

import java.util.Date;

public class PlataformaLogin {

    //atributos
    private int id;
    private int visitaFk;
    private String nome;
    private String status;
    private Date dataImplementacao;
    private String email;

    //construtores
    public PlataformaLogin(int visitaFk, String nome, String status, Date dataImplementacao, String email) {
        this.visitaFk = visitaFk;
        this.nome = nome;
        this.status = status;
        this.dataImplementacao = dataImplementacao;
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

    public Date getDataImplementacao() {
        return dataImplementacao;
    }

    public void setDataImplementacao(Date dataImplementacao) {
        this.dataImplementacao = dataImplementacao;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
