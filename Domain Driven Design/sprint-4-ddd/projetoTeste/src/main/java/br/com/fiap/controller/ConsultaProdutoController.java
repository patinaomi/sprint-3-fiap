package br.com.fiap.controller;

import br.com.fiap.model.bo.ConsultaProdutoBo;
import br.com.fiap.model.vo.ConsultaProduto;

import java.sql.SQLException;
import java.util.List;

public class ConsultaProdutoController {
    private ConsultaProdutoBo consultaProdutoBo;

    public ConsultaProdutoController(ConsultaProdutoBo consultaProdutoBo) {
        this.consultaProdutoBo = consultaProdutoBo;
    }

    public void inserir(ConsultaProduto consultaProduto) throws SQLException {
        consultaProdutoBo.inserir(consultaProduto);
    }
}
