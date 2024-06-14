package br.com.fiap.model.dao.impl;

import br.com.fiap.model.connection.ConexaoFactory;
import br.com.fiap.model.dao.ConsultaDao;
import br.com.fiap.model.vo.Consulta;

import java.sql.*;

public class ConsultaDaoImpl implements ConsultaDao {

    @Override
    public void inserir(Consulta consulta) throws SQLException {
        String sql = "INSERT INTO Consulta (perg_consulta, resp_consulta, data_consulta) VALUES (?, ?, sysdate)";
        try (Connection conn = ConexaoFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, consulta.getPergunta());
            stmt.setString(2, consulta.getResposta());

            int result = stmt.executeUpdate();
            if (result > 0) {
                System.out.println("Consulta inserida no banco de dados");
            } else {
                System.err.println("Erro: nenhuma consulta cadastrada no banco de dados.");
            }
        } catch (SQLException e) {
            System.err.println("Erro ao conectar ao banco de dados para inserir consulta de produto.");
            e.printStackTrace();
            throw new RuntimeException("Erro ao inserir consulta no banco de dados.", e);
        }
    }
}
