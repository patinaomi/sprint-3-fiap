package model.impl;

import model.ConexaoBancoDeDados;
import model.dao.ExperienciaUsuarioDao;
import model.vo.ExperienciaUsuario;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

public class ExperienciaUsuarioDaoImpl implements ExperienciaUsuarioDao {

    @Override
    public List<ExperienciaUsuario> listar() {
        return null;
    }

    @Override
    public void inserir(ExperienciaUsuario experienciaUsuario) {
        String sql = "INSERT INTO Experiencia_Usuario (visit_id_visit_fk, chatbot_id_perg_fk, chatbot_id_resp_fk, data_hora_vis_exp, prod_pesquisado_exp, pag_visitada_exp, tempo_visita_exp) VALUES (?, ?, ?, ?, ?, ?, ?)";

        try(Connection conn = ConexaoBancoDeDados.getConnection();
            PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setInt(1, experienciaUsuario.getVisitFk());
            ps.setInt(2, experienciaUsuario.getPergChatbotFk());
            ps.setInt(3, experienciaUsuario.getRespChatbotFk());
            ps.setTimestamp(4, experienciaUsuario.getDataHoraVisita());
            ps.setString(5, experienciaUsuario.getProdPesquisado());
            ps.setString(6, experienciaUsuario.getPagVisitada());
            ps.setInt(7, experienciaUsuario.getTempoVisita());


            int dadosAlterados = ps.executeUpdate();
            if (dadosAlterados > 0) {
                System.out.println("Experiência do Usuário adicionado com sucesso!");
            } else {
                System.err.println("Erro: Nenhuma Experiência do Usuário foi adicionada.");
            }


        } catch (SQLException e) {
            System.err.println("Erro ao salvar Experiência do Usuário");
            e.printStackTrace();
        }

    }

    @Override
    public ExperienciaUsuario buscar(int id) {
        return null;
    }

    @Override
    public void atualizar(ExperienciaUsuario experienciaUsuario) {

    }

    @Override
    public void deletar(int id) {

    }
}
