package br.com.fiap.model.dao;

import br.com.fiap.model.vo.Cadastro;

public interface CadastroDao {
    void inserir(Cadastro cadastro);
    void atualizar(Cadastro cadastro);
}
