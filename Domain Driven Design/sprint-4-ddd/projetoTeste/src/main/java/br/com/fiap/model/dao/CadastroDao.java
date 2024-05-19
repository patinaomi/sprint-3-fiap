package br.com.fiap.model.dao;

import br.com.fiap.model.vo.Cadastro;

public interface CadastroDao {
    public void inserir(Cadastro cadastro);
    public void atualizar(Cadastro cadastro);
}
