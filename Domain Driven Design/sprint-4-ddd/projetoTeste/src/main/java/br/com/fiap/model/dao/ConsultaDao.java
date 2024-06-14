package br.com.fiap.model.dao;

import br.com.fiap.model.vo.Consulta;
import java.sql.SQLException;

public interface ConsultaDao {
    void inserir(Consulta consulta) throws SQLException;
}
