package br.com.fiap.controller;

import br.com.fiap.model.bo.ContatoBo;
import br.com.fiap.model.vo.Contato;

import java.sql.SQLException;

public class ContatoController {

    private ContatoBo contatoBo;

    public ContatoController() {
        this.contatoBo = new ContatoBo();
    }

    public void inserirContato(Contato contato) throws SQLException {
        // Delegar a chamada para o BO
        contatoBo.inserirContato(contato);
    }
}

