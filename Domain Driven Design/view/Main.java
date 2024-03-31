package view;

import model.bo.GestaoData;
import model.dao.VisitanteDao;
import model.impl.VisitanteDaoImpl;
import model.vo.Visitante;

import java.sql.SQLException;

import java.sql.Timestamp;

public class Main {
    public static void main(String[] args) throws SQLException {

        // Teste - Visitante
        VisitanteDao visitanteDao = new VisitanteDaoImpl();

        //Instanciando um visitante, a data e hora do login será a atual (já é passada no construtor
        //Visitante visitante = new Visitante("TesteConstrutor", "teste@teste.com", 10);
        //visitanteDao.inserir(visitante);


        // Listando todos os visitantes cadastrados do site.
        System.out.println(visitanteDao.listar());

        //Teste - Questionario

        //System.out.println( visitanteDao.buscarVisitante(2));


    }
}
