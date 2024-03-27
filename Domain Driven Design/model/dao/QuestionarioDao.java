package model.dao;

import model.vo.Questionario;

import java.util.List;

public interface QuestionarioDao {
    public List<Questionario> listarQuestionario();
    public Questionario buscarQuestionario(int id);
    public void atualizarQuestionario(Questionario questionario);
    public void deletarQuestionario(Questionario questionario);
}
