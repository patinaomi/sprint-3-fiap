package view;

import java.sql.SQLException;


public class Main {
    public static void main(String[] args)  {

       Menu menu = new Menu();

        try {
            menu.menuVisitante();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }
}
