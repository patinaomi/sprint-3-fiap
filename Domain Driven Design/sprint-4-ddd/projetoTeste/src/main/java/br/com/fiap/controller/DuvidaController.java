package br.com.fiap.controller;

import br.com.fiap.model.bo.DuvidaBo;
import br.com.fiap.model.vo.Duvida;

import java.sql.SQLException;

public class DuvidaController {
    private DuvidaBo duvidaBo;

    public DuvidaController(DuvidaBo duvidaBo) {
        this.duvidaBo = duvidaBo;
    }

    public void inserir(Duvida duvida) throws SQLException {
        duvidaBo.inserir(duvida);
    }
}
