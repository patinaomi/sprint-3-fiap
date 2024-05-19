package br.com.fiap.controller;

import br.com.fiap.model.bo.QuestFeedbackBo;
import br.com.fiap.model.dao.impl.QuestFeedbackDaoImpl;
import br.com.fiap.model.vo.QuestFeedback;

import java.sql.SQLException;

public class QuestFeedbackController {
    private QuestFeedbackBo questFeedbackBo;

    public QuestFeedbackController() {
        this.questFeedbackBo = new QuestFeedbackBo(new QuestFeedbackDaoImpl());
    }

    public void inserir(QuestFeedback questFeedback) throws SQLException {
        questFeedbackBo.inserirBO(questFeedback);
    }
}

