package Controller;

import model.dao.QuestionarioDao;
import model.vo.Questionario;

import java.sql.SQLException;
import java.util.List;

public class QuestionarioController {
    private QuestionarioDao questionarioDao;

    public QuestionarioController(QuestionarioDao questionarioDao) throws SQLException {
        this.questionarioDao = questionarioDao;
    }

    public List<Questionario> listar() throws SQLException{
        return questionarioDao.listar();
    }

    public void inserir(Questionario questionario) throws SQLException {
        questionarioDao.inserir(questionario);
    }

    public Questionario buscar(int id) throws SQLException {
        return questionarioDao.buscar(id);
    }

    public void atualizar(Questionario questionario) throws SQLException {
        questionarioDao.atualizar(questionario);
    }

    public void deletar(int id) throws SQLException {
        questionarioDao.deletar(id);
    }
}
