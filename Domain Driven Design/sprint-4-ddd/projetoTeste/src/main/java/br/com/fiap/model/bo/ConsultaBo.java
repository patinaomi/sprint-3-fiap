package br.com.fiap.model.bo;

import br.com.fiap.model.dao.ConsultaDao;
import br.com.fiap.model.vo.Consulta;

import java.sql.SQLException;

public class ConsultaBo {
    private ConsultaDao consultaDao;

    public ConsultaBo(ConsultaDao consultaDao) {
        this.consultaDao = consultaDao;
    }

    public void inserir(Consulta consulta) throws SQLException {
        consultaDao.inserir(consulta);
    }
}
