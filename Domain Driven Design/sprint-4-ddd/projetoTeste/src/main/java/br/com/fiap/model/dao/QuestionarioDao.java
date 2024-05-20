package br.com.fiap.model.dao;
import br.com.fiap.model.vo.Questionario;

/**
 * Interface DAO para operações de persistência relacionadas ao objeto Questionario.
 * Define o método para inserir questionários no banco de dados.
 */
public interface QuestionarioDao {
    void inserir(Questionario questionario);
}
