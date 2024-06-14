package br.com.fiap.model.dao;

import br.com.fiap.model.vo.ConsultaProduto;
import java.sql.SQLException;
import java.util.List;

public interface ConsultaProdutoDao {
    void inserir(ConsultaProduto consultaProduto) throws SQLException;
}
