package Controller;

import model.dao.QuestionarioDao;
import model.vo.Questionario;

import java.util.List;

public class QuestionarioController {
    private QuestionarioDao questionarioDao;

    public QuestionarioController(QuestionarioDao questionarioDao) {
        this.questionarioDao = questionarioDao;
    }

    public List<Questionario> listarQuestionario() {
        return questionarioDao.listarQuestionario();
    }
}
