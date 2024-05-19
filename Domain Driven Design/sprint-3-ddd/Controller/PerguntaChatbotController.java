package Controller;

import model.dao.PerguntaChatbotDao;
import model.vo.PerguntaChatbot;

import java.sql.SQLException;
import java.util.List;

public class PerguntaChatbotController {
    private PerguntaChatbotDao perguntaChatbotDao;

    public PerguntaChatbotController(PerguntaChatbotDao perguntaChatbotDao) {
        this.perguntaChatbotDao = perguntaChatbotDao;
    }

    public List<PerguntaChatbot> listar() throws SQLException {
        return perguntaChatbotDao.listar();
    }

    public void inserir(PerguntaChatbot perguntaChatbot) throws SQLException {
        perguntaChatbotDao.inserir(perguntaChatbot);
    }

    public PerguntaChatbot buscar(int id) throws SQLException {
       return perguntaChatbotDao.buscar(id);
    }

    public void atualizar(PerguntaChatbot perguntaChatbot) throws SQLException {
        perguntaChatbotDao.atualizar(perguntaChatbot);
    }

    public void deletar(int id) throws SQLException {
        perguntaChatbotDao.deletar(id);
    }
}
