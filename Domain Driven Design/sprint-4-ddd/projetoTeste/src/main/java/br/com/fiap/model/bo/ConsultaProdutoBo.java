package br.com.fiap.model.bo;

import br.com.fiap.model.dao.ConsultaProdutoDao;
import br.com.fiap.model.vo.ConsultaProduto;

import java.sql.SQLException;

public class ConsultaProdutoBo {
    private ConsultaProdutoDao consultaProdutoDao;

    public ConsultaProdutoBo(ConsultaProdutoDao consultaProdutoDao) {
        this.consultaProdutoDao = consultaProdutoDao;
    }

    public void inserir(ConsultaProduto consultaProduto) throws SQLException {
        consultaProdutoDao.inserir(consultaProduto);
    }
}
