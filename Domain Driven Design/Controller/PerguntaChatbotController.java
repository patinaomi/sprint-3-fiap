package Controller;

import model.dao.PerguntaChatbotDao;
import model.vo.PerguntaChatbot;

import java.util.List;

public class PerguntaChatbotController {
    private PerguntaChatbotDao perguntaChatbotDao;

    public PerguntaChatbotController(PerguntaChatbotDao perguntaChatbotDao) {
        this.perguntaChatbotDao = perguntaChatbotDao;
    }

    public List<PerguntaChatbot> listarPerguntaChatbot() {
        return perguntaChatbotDao.listarPerguntaChatbot();
    }
}
