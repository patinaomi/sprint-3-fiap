package br.com.fiap.model.dao;

import br.com.fiap.model.vo.Duvida;
import java.sql.SQLException;

public interface DuvidaDao {
    void inserir(Duvida duvida) throws SQLException;
}
