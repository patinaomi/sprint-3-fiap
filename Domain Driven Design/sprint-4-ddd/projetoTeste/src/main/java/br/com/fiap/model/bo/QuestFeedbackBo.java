package br.com.fiap.model.bo;

import br.com.fiap.model.dao.QuestFeedbackDao;
import br.com.fiap.model.vo.QuestFeedback;

import java.sql.SQLException;

/**
 * Classe de negócios para operações relacionadas ao QuestFeedback.
 * Contém regras de negócio e validações antes de interagir com o DAO.
 */
public class QuestFeedbackBo {

    private QuestFeedbackDao questFeedbackDao;

    /**
     * Construtor da classe QuestFeedbackBo.
     * Inicializa a camada de negócios com a implementação DAO fornecida.
     *
     * @param questFeedbackDao A implementação de QuestFeedbackDao a ser usada.
     */
    public QuestFeedbackBo(QuestFeedbackDao questFeedbackDao) {
        this.questFeedbackDao = questFeedbackDao;
    }

    /**
     * Insere um novo feedback de questionário após aplicar validações e regras de negócios.
     *
     * @param questFeedback O objeto QuestFeedback a ser inserido.
     * @throws SQLException Se ocorrer um erro ao inserir o feedback.
     */
    public void inserir(QuestFeedback questFeedback) throws SQLException {
        validarQuestFeedback(questFeedback);
        questFeedbackDao.inserir(questFeedback);
    }

    /**
     * Valida o objeto QuestFeedback aplicando regras de negócio.
     *
     * @param questFeedback O objeto QuestFeedback a ser validado.
     * @throws IllegalArgumentException Se alguma validação falhar.
     */
    private void validarQuestFeedback(QuestFeedback questFeedback) {
        if (!Validacoes.validarEmail(questFeedback.getEmail())) {
            throw new IllegalArgumentException("Email inválido.");
        }
        if (questFeedback.getAvaliacao() < 1 || questFeedback.getAvaliacao() > 5) {
            throw new IllegalArgumentException("Avaliação deve ser entre 1 e 5.");
        }
    }
}
