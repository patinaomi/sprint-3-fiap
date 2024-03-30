package view;

import model.bo.GestaoData;
import model.dao.VisitanteDao;
import model.impl.ExperienciaUsuarioDaoImpl;
import model.impl.VisitanteDaoImpl;
import model.vo.ExperienciaUsuario;
import model.vo.Visitante;

import java.sql.SQLException;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class Main {
    public static void main(String[] args) throws SQLException {
        Timestamp dataAtualTimestamp = GestaoData.obterDataHoraAtual();

        VisitanteDao visitanteDao= new VisitanteDaoImpl();
        Visitante visitante = new Visitante();

        visitante.setEmail("segteste@teste.com");
        visitante.setNome("hora atual");
        visitante.setTempo(40);

        visitante.setDataHora(new Date(dataAtualTimestamp.getTime()));

        visitanteDao.salvarVisitante(visitante);


    }
}
