package br.com.fiap.model.bo;

import br.com.fiap.model.dao.QuestionarioDao;
import br.com.fiap.model.vo.Questionario;

import java.sql.SQLException;

public class QuestionarioBo {
    private QuestionarioDao questionarioDao;

    public QuestionarioBo(QuestionarioDao questionarioDao) {
        this.questionarioDao = questionarioDao;
    }

    public void inserirQuestionario(Questionario questionario) throws SQLException {
        // Adicione aqui validações ou regras de negócios, se necessário
        questionarioDao.inserir(questionario);
    }
}
