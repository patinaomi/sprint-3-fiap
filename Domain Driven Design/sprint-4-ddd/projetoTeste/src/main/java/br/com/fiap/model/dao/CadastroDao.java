package br.com.fiap.model.dao;

import br.com.fiap.model.vo.Cadastro;

/**
 * Interface DAO para operações de persistência relacionadas ao objeto Cadastro.
 * Define os métodos para inserir e atualizar cadastros no banco de dados.
 */
public interface CadastroDao {
    void inserir(Cadastro cadastro);
    void atualizar(Cadastro cadastro);
}
