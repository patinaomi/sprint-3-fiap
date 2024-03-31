package model.dao;

import model.vo.Questionario;

import java.util.List;

public interface QuestionarioDao {
    public List<Questionario> listar();
    public Questionario buscar(int id);

    public void inserir(Questionario questionario);
    public void atualizar(Questionario questionario);
    public void deletar(int id);
}
