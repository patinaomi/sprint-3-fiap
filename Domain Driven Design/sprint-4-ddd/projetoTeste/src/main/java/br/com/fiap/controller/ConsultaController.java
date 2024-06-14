package br.com.fiap.controller;

import br.com.fiap.model.bo.ConsultaBo;
import br.com.fiap.model.vo.Consulta;

import java.sql.SQLException;

public class ConsultaController {
    private ConsultaBo consultaBo;

    public ConsultaController(ConsultaBo consultaBo) {
        this.consultaBo = consultaBo;
    }

    public void inserir(Consulta consulta) throws SQLException {
        consultaBo.inserir(consulta);
    }
}
