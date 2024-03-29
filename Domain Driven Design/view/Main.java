package view;

import model.impl.ExperienciaUsuarioDaoImpl;
import model.vo.ExperienciaUsuario;

import java.sql.SQLException;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Main {
    public static void main(String[] args) throws SQLException {
        String dataEmTexto = "13/11/2023 23:30:03";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        LocalDateTime dateTime = LocalDateTime.parse(dataEmTexto, formatter);
        Timestamp timestamp = Timestamp.valueOf(dateTime);

        ExperienciaUsuarioDaoImpl exUser1 = new ExperienciaUsuarioDaoImpl();

        System.out.println(exUser1.inserirExperienciaUsuario(new ExperienciaUsuario(1, 1, 1, timestamp, "Tableau", "Produtos", 30))? "Cliente Adicionado" : "Cliente não Adicionado");
    }
}
