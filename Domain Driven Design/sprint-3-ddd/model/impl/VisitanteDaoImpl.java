package model.impl;

import model.ConexaoBancoDeDados;
import model.dao.VisitanteDao;
import model.vo.Visitante;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class VisitanteDaoImpl implements VisitanteDao {

    @Override
    public List<Visitante> listar() {
        List<Visitante> visitantes = new ArrayList<>();
        String sql = "SELECT * FROM Visitante";

        try (Connection conn = ConexaoBancoDeDados.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                int id = rs.getInt(1);
                String nome = rs.getString(2);
                String email = rs.getString(3);
                Timestamp dataHora = rs.getTimestamp(4);
                int tempo = rs.getInt(5);

                Visitante visitante = new Visitante();
                visitante.setId(id);
                visitante.setNome(nome);
                visitante.setEmail(email);
                visitante.setDataHora(dataHora);
                visitante.setTempo(tempo);

                visitantes.add(new Visitante(id, nome,email, dataHora, tempo));
            }

        } catch (SQLException e) {
            System.err.println("Erro ao listar visitantes");
            e.printStackTrace();
        }
        return visitantes;
    }

    @Override
    public Visitante buscar(int id) {
        String sql = "SELECT * FROM Visitante WHERE id_visit = ?";
        try (Connection conn = ConexaoBancoDeDados.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    String nome = rs.getString(2);
                    String email = rs.getString(3);
                    Timestamp dataHora = rs.getTimestamp(4);
                    int tempo = rs.getInt(5);

                    return new Visitante(id, nome, email, dataHora, tempo);
                } else {
                    System.out.println("Nenhum visitante encontrado com o ID: #" + id);
                }
            }
        } catch (SQLException e) {
            System.err.println("Erro ao buscar visitante");
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public void inserir(Visitante visitante) {
        String sql = "INSERT INTO VISITANTE (nome_visit, email_visit, data_hora_visit, tempo_visit) VALUES (?, ?, ?, ?)";

        try (Connection conn = ConexaoBancoDeDados.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, visitante.getNome());
            ps.setString(2, visitante.getEmail());
            ps.setTimestamp(3, visitante.getDataHora());
            ps.setInt(4, visitante.getTempo());

            int dadosAlterados = ps.executeUpdate();
            if (dadosAlterados > 0) {
                System.out.println("Visitante adicionado com sucesso!");
            } else {
                System.err.println("Erro: Nenhum visitante foi adicionado.");
            }
        } catch (SQLException e) {
            System.err.println("Erro ao salvar visitante");
            e.printStackTrace();
        }
    }


    @Override
    public void atualizar(Visitante visitante) {
        String sql = "UPDATE Visitante SET nome_visit = ?, email_visit = ?, data_hora_visit = ?, tempo_visit = ? WHERE id_visit = ?";

        try (Connection conn = ConexaoBancoDeDados.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, visitante.getNome());
            ps.setString(2, visitante.getEmail());
            ps.setTimestamp(3, visitante.getDataHora());
            ps.setInt(4, visitante.getTempo());
            ps.setInt(5, visitante.getId());

            int dadosAlterados = ps.executeUpdate();
            if (dadosAlterados > 0) {
                System.out.println("Visitante atualizado com sucesso.");
            } else {
                System.out.println("Não foi encontrado um visitante com o ID especificado.");
            }
        } catch (SQLException e) {
            System.err.println("Erro ao atualizar visitante");
            e.printStackTrace();
        }
    }

    @Override
    public void deletar(int id) {
        String sql = "DELETE FROM Visitante WHERE id_visit = ?";

        try (Connection conn = ConexaoBancoDeDados.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setInt(1, id);

            int rowsAffected = ps.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Visitante deletado com sucesso.");
            } else {
                System.out.println("Não foi encontrado um visitante com o ID especificado para deletar.");
            }
        } catch (SQLException e) {
            System.err.println("Erro ao deletar visitante");
            e.printStackTrace();
        }
    }

    @Override
    public Visitante buscarPorEmail(String email) {
        String sql = "SELECT * FROM Visitante WHERE email_visit = ?";
        Visitante visitante = null;

        try (Connection conn = ConexaoBancoDeDados.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                int id = rs.getInt("id_visit");
                String nome = rs.getString("nome_visit");
                String emailVisitante = rs.getString("email_visit");
                Timestamp dataHora = rs.getTimestamp("data_hora_visit");
                int tempo = rs.getInt("tempo_visit");

                visitante = new Visitante();
                visitante.setId(id);
                visitante.setNome(nome);
                visitante.setEmail(emailVisitante);
                visitante.setDataHora(dataHora);
                visitante.setTempo(tempo);
            }

        } catch (SQLException e) {
            System.err.println("Erro ao buscar visitante por e-mail: " + e.getMessage());
            e.printStackTrace();
        }
        return visitante;
    }




}
