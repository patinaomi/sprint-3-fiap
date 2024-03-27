package model.dao;

import model.vo.PerguntaChatbot;
import java.util.List;

public interface PerguntaChatbotDao {
    public List<PerguntaChatbot> listarPerguntaChatbot();
    public PerguntaChatbot buscarPerguntaChatbot(int id);
    public void atualizarPerguntaChatbot(PerguntaChatbot perguntaChatbot);
    public void deletarPerguntaChatbot(PerguntaChatbot perguntaChatbot);
}
