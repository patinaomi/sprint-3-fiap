package view;

import Controller.QuestionarioController;
import Controller.VisitanteController;
import model.impl.QuestionarioDaoImpl;
import model.impl.VisitanteDaoImpl;

import java.sql.SQLException;


public class Main {
    public static void main(String[] args) throws SQLException {

        VisitanteController visitanteController = new VisitanteController(new VisitanteDaoImpl());
        QuestionarioController questionarioController = new QuestionarioController(new QuestionarioDaoImpl());

        Menu menu = new Menu(visitanteController, questionarioController);

        menu.menuVisitante();


    }
}
