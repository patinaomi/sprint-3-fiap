package br.com.fiap.model.bo;

import br.com.fiap.model.dao.DuvidaDao;
import br.com.fiap.model.vo.Duvida;

import java.sql.SQLException;

public class DuvidaBo {
    private DuvidaDao consultaDao;

    public DuvidaBo(DuvidaDao consultaDao) {
        this.consultaDao = consultaDao;
    }

    public void inserir(Duvida duvida) throws SQLException {
        consultaDao.inserir(duvida);
    }
}
