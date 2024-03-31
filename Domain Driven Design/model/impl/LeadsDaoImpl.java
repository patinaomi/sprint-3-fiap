package model.impl;

import model.ConexaoBancoDeDados;
import model.dao.LeadsDao;
import model.vo.Leads;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

public class LeadsDaoImpl implements LeadsDao {

    @Override
    public List<Leads> listar() {
        return null;
    }

    @Override
    public Leads buscar(int id) {
        return null;
    }

    @Override
    public void inserir(Leads leads) {
        String sql = "INSERT INTO leads (quest_num_quest_fk, platlog_id_login_fk, nome_leads, email_leads, empresa_leads, data_hora_login_leads) VALUES (?, ?, ?, ?, ?, ?)";

        try (Connection conn = ConexaoBancoDeDados.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

             ps.setInt(1, leads.getQuestFk());
             ps.setInt(2, leads.getPlatLogFk());
             ps.setString(3, leads.getNome());
             ps.setString(4, leads.getEmail());
             ps.setString(5, leads.getEmpresa());
             ps.setTimestamp(6, leads.getDataHoraLogin());

            int dadosAlterados = ps.executeUpdate();
            if (dadosAlterados > 0) {
                System.out.println("Lead adicionado com sucesso!");
            } else {
                System.err.println("Erro: Nenhum Lead foi adicionado.");
            }
        } catch (SQLException e) {
            System.err.println("Erro ao salvar Lead");
            e.printStackTrace();
        }
    }

    @Override
    public void atualizar(Leads leads) {

    }

    @Override
    public void deletar(int id) {

    }
}
