package model.impl;

import model.ConexaoBancoDeDados;
import model.dao.ExperienciaUsuarioDao;
import model.vo.ExperienciaUsuario;
import oracle.jdbc.pool.OracleDataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

public class ExperienciaUsuarioDaoImpl implements ExperienciaUsuarioDao {

    private Connection connection;


    public ExperienciaUsuarioDaoImpl() throws SQLException {
        OracleDataSource ods = new OracleDataSource();

        ods.setURL(ConexaoBancoDeDados.url);
        ods.setUser(ConexaoBancoDeDados.user);
        ods.setPassword(ConexaoBancoDeDados.pwd);
        connection = ods.getConnection();
    }

    // Método para inserir uma nova experiência de usuário
    public boolean inserirExperienciaUsuario(ExperienciaUsuario experienciaUsuario) {
        String sql = "INSERT INTO Experiencia_Usuario (visit_id_visit_fk, chatbot_id_perg_fk, chatbot_id_resp_fk, data_hora_vis_exp, prod_pesquisado_exp, pag_visitada_exp, tempo_visita_exp) VALUES (?, ?, ?, ?, ?, ?, ?)";

        try {
            PreparedStatement ps = connection.prepareStatement(sql);
            ps.setInt(1, experienciaUsuario.getVisitFk());
            ps.setInt(2, experienciaUsuario.getPergChatbotFk());
            ps.setInt(3, experienciaUsuario.getRespChatbotFk());
            ps.setTimestamp(4, experienciaUsuario.getDataHoraVisita());
            ps.setString(5, experienciaUsuario.getProdPesquisado());
            ps.setString(6, experienciaUsuario.getPagVisitada());
            ps.setInt(7, experienciaUsuario.getTempoVisita());

            ps.execute();
        } catch (SQLException e) {
            if(connection == null) {
                System.err.println("Conexão Nula");
            }
            e.printStackTrace();
            return false;
        }
        return true;
    }

    @Override
    public List<ExperienciaUsuario> listarExperienciaUsuario() {
        // Implementação do método listar
        return null;
    }

    @Override
    public ExperienciaUsuario buscarExperienciaUsuario(int id) {
        // Implementação do método buscar
        return null;
    }

    @Override
    public void atualizarExperienciaUsuario(ExperienciaUsuario experienciaUsuario) {
        // Implementação do método atualizar
    }

    @Override
    public void deletarExperienciaUsuario(ExperienciaUsuario experienciaUsuario) {
        // Implementação do método deletar
    }
}
