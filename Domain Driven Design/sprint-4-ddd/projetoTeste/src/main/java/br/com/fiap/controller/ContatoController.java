package br.com.fiap.controller;

import br.com.fiap.model.bo.ContatoBo;
import br.com.fiap.model.vo.Contato;

import java.sql.SQLException;

/**
 * Controlador responsável por gerenciar as operações relacionadas aos contatos.
 * Ele delega as operações para a camada de negócio (ContatoBo).
 */
public class ContatoController {

    private ContatoBo contatoBo;

    /**
     * Construtor da classe ContatoController.
     * Inicializa a camada de negócio (ContatoBo).
     */
    public ContatoController() {
        this.contatoBo = new ContatoBo();
    }

    /**
     * Insere um novo contato.
     *
     * @param contato O objeto Contato a ser inserido.
     * @throws SQLException Se ocorrer um erro ao inserir o contato.
     */
    public void inserir(Contato contato) throws SQLException {
        contatoBo.inserir(contato);
    }
}