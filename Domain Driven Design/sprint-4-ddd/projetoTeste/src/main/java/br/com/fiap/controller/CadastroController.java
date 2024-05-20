package br.com.fiap.controller;

import br.com.fiap.model.bo.CadastroBo;
import br.com.fiap.model.dao.impl.CadastroDaoImpl;
import br.com.fiap.model.vo.Cadastro;

import java.sql.SQLException;

/**
 * Controlador responsável por gerenciar as operações relacionadas aos cadastros.
 * Ele delega as operações para a camada de negócio (CadastroBo).
 */
public class CadastroController {

    private CadastroBo cadastroBo;

    /**
     * Construtor da classe CadastroController.
     * Inicializa a camada de negócio (CadastroBo) com a implementação DAO (CadastroDaoImpl).
     */
    public CadastroController() {
        this.cadastroBo = new CadastroBo(new CadastroDaoImpl());
    }

    /**
     * Insere um novo cadastro.
     *
     * @param cadastro O objeto Cadastro a ser inserido.
     * @throws SQLException Se ocorrer um erro ao inserir o cadastro.
     */
    public void inserir(Cadastro cadastro) throws SQLException {
        cadastroBo.inserir(cadastro);
    }

    /**
     * Atualiza um cadastro existente.
     *
     * @param cadastro O objeto Cadastro a ser atualizado.
     * @throws SQLException Se ocorrer um erro ao atualizar o cadastro.
     */
    public void atualizar(Cadastro cadastro) throws SQLException {
        cadastroBo.atualizar(cadastro);
    }
}
