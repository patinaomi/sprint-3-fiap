package br.com.fiap.model.dao.impl;

import br.com.fiap.model.connection.ConexaoFactory;
import br.com.fiap.model.dao.DuvidaDao;
import br.com.fiap.model.vo.Duvida;

import java.sql.*;

public class DuvidaDaoImpl implements DuvidaDao {

    @Override
    public void inserir(Duvida duvida) throws SQLException {
        String sql = "INSERT INTO Consulta (perg_consulta, resp_consulta, data_consulta) VALUES (?, ?, sysdate)";
        try (Connection conn = ConexaoFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, duvida.getPergunta());
            stmt.setString(2, duvida.getResposta());

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
