package model.dao;

import model.vo.PerguntaChatbot;
import java.util.List;

public interface PerguntaChatbotDao {
    public List<PerguntaChatbot> listar();
    public PerguntaChatbot buscar(int id);
    public void inserir(PerguntaChatbot perguntaChatbot);
    public void atualizar(PerguntaChatbot perguntaChatbot);
    public void deletar(int id);
}
