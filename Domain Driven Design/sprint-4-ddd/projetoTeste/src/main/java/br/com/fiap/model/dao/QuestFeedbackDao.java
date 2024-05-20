package br.com.fiap.model.dao;

import br.com.fiap.model.vo.QuestFeedback;

/**
 * Interface DAO para operações de persistência relacionadas ao objeto QuestFeedback.
 * Define o método para inserir feedbacks de questionário no banco de dados.
 */
public interface QuestFeedbackDao {
    void inserir(QuestFeedback questFeedback);
}
