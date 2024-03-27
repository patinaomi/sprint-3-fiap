package view.vo;

import java.util.Date;

public class Visitante {

    // atributos
    private int id;
    private String nome;
    private String email;
    private Date dataHora;
    private int tempo;

    // construtores

    public Visitante(String nome, String email, Date dataHora, int tempo) {
        this.nome = nome;
        this.email = email;
        this.dataHora = dataHora;
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

    public Date getDataHora() {
        return dataHora;
    }

    public void setDataHora(Date dataHora) {
        this.dataHora = dataHora;
    }

    public int getTempo() {
        return tempo;
    }

    public void setTempo(int tempo) {
        this.tempo = tempo;
    }
}
