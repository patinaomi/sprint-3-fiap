package model.impl;

import model.ConexaoBancoDeDados;
import model.dao.VisitanteDao;
import model.vo.Visitante;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

public class VisitanteDaoImpl implements VisitanteDao {
    private Connection conn;
    PreparedStatement ps = null;

    @Override
    public List<Visitante> listarVisitante() {
        return null;
    }

    @Override
    public Visitante buscarVisitante(int id) {
        return null;
    }

    @Override
    public void salvarVisitante(Visitante visitante) {
        try {
            conn = ConexaoBancoDeDados.getConnection();
            String sql = "INSERT INTO VISITANTE (nome_visit, email_visit, data_hora_visit, tempo_visit) VALUES (?, ?, ?, ?)";
            ps = conn.prepareStatement(sql);
            ps.setString(1, visitante.getNome());
            ps.setString(2, visitante.getEmail());
            ps.setTimestamp(3, new java.sql.Timestamp(visitante.getDataHora().getTime()));
            ps.setInt(4, visitante.getTempo());
            ps.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            if (ps != null) {
                try {
                    ps.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if (conn != null) {
                try {
                    conn.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    @Override
    public void atualizarVisitante(Visitante visitante) {

    }

    @Override
    public void deletarVisitante(Visitante visitante) {

    }
}
