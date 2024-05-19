package br.com.fiap.controller;

import br.com.fiap.model.bo.CadastroBo;
import br.com.fiap.model.dao.impl.CadastroDaoImpl;
import br.com.fiap.model.vo.Cadastro;

import java.sql.SQLException;

public class CadastroController {
    private CadastroBo cadastroBo;

    public CadastroController() {
        this.cadastroBo = new CadastroBo(new CadastroDaoImpl());
    }

    public void inserirCadastro(Cadastro cadastro) throws SQLException {
        cadastroBo.inserirCadastro(cadastro);
    }

    public void atualizarCadastro(Cadastro cadastro) throws SQLException {
        cadastroBo.atualizarCadastro(cadastro);
    }
}
