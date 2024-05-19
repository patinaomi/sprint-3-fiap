package br.com.fiap.model.bo;

import br.com.fiap.model.dao.QuestFeedbackDao;
import br.com.fiap.model.vo.QuestFeedback;

import java.sql.SQLException;

public class QuestFeedbackBo {
    private QuestFeedbackDao questFeedbackDao;

    public QuestFeedbackBo(QuestFeedbackDao questFeedbackDao) {
        this.questFeedbackDao = questFeedbackDao;
    }

    public void inserirBO(QuestFeedback questFeedback) throws SQLException {
        questFeedbackDao.insert(questFeedback);
    }
}

