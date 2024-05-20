package br.com.fiap.controller;

import br.com.fiap.model.bo.QuestionarioBo;
import br.com.fiap.model.dao.impl.QuestionarioDaoImpl;
import br.com.fiap.model.vo.Questionario;

import java.sql.SQLException;

/**
 * Controlador responsável por gerenciar as operações relacionadas ao questionário.
 * Ele delega as operações para a camada de negócio (QuestionarioBo).
 */
public class QuestionarioController {
    private QuestionarioBo questionarioBo;

    /**
     * Construtor da classe QuestionarioController.
     * Inicializa a camada de negócio (QuestionarioBo) com a implementação DAO (QuestionarioDaoImpl).
     */
    public QuestionarioController() {
        this.questionarioBo = new QuestionarioBo(new QuestionarioDaoImpl());
    }


    /**
     * Insere um novo questionário.
     *
     * @param questionario O objeto Questionario a ser inserido.
     * @throws SQLException Se ocorrer um erro ao inserir o questionário.
     */
    public void inserir(Questionario questionario) throws SQLException {
        questionarioBo.inserir(questionario);
    }
}
