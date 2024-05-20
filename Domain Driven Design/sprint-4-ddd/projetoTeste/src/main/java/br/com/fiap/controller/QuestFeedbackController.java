package br.com.fiap.controller;

import br.com.fiap.model.bo.QuestFeedbackBo;
import br.com.fiap.model.dao.impl.QuestFeedbackDaoImpl;
import br.com.fiap.model.vo.QuestFeedback;

import java.sql.SQLException;

/**
 * Controlador responsável por gerenciar as operações relacionadas ao feedback de questionários.
 * Ele delega as operações para a camada de negócio (QuestFeedbackBo).
 */
public class QuestFeedbackController {

    private QuestFeedbackBo questFeedbackBo;

    /**
     * Construtor da classe QuestFeedbackController.
     * Inicializa a camada de negócio (QuestFeedbackBo) com a implementação DAO (QuestFeedbackDaoImpl).
     */
    public QuestFeedbackController() {
        this.questFeedbackBo = new QuestFeedbackBo(new QuestFeedbackDaoImpl());
    }

    /**
     * Insere um novo feedback de questionário.
     *
     * @param questFeedback O objeto QuestFeedback a ser inserido.
     * @throws SQLException Se ocorrer um erro ao inserir o feedback.
     */
    public void inserir(QuestFeedback questFeedback) throws SQLException {
        questFeedbackBo.inserir(questFeedback);
    }
}
