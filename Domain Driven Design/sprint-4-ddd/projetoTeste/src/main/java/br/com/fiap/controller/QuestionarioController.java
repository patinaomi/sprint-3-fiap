package br.com.fiap.controller;

import br.com.fiap.model.bo.QuestionarioBo;
import br.com.fiap.model.dao.impl.QuestionarioDaoImpl;
import br.com.fiap.model.vo.Questionario;

import java.sql.SQLException;

public class QuestionarioController {
    private QuestionarioBo questionarioBo;

    public QuestionarioController() {
        this.questionarioBo = new QuestionarioBo(new QuestionarioDaoImpl());
    }

    public void inserirQuestionario(Questionario questionario) throws SQLException {
        questionarioBo.inserirQuestionario(questionario);
    }
}
