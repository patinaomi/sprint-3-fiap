package br.com.fiap.model.dao;

import br.com.fiap.model.vo.Contato;

/**
 * Interface DAO para operações de persistência relacionadas ao objeto Contato.
 * Define o método para inserir contatos no banco de dados.
 */
public interface ContatoDao {
    void inserir(Contato contato);
}
