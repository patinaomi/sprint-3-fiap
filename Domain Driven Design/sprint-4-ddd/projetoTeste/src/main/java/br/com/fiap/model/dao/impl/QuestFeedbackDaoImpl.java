package br.com.fiap.model.dao.impl;

import br.com.fiap.model.connection.ConexaoFactory;
import br.com.fiap.model.dao.QuestFeedbackDao;
import br.com.fiap.model.vo.QuestFeedback;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class QuestFeedbackDaoImpl implements QuestFeedbackDao {
    @Override
    public void insert(QuestFeedback questFeedback) {
        String sql = "INSERT INTO QUEST_FEEDBACK(email_feedback, avaliacao_feedback, data_feedback, msg_feedback) VALUES (?, ?, ?, ?)";

        try (Connection conn = ConexaoFactory.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, questFeedback.getEmail());
            ps.setInt(2, questFeedback.getAvaliacao());
            ps.setTimestamp(3, new java.sql.Timestamp(questFeedback.getData().getTime()));
            ps.setString(4, questFeedback.getMensagem());

            int dadosAlterados = ps.executeUpdate();
            if (dadosAlterados > 0) {
                System.out.println("Questionário Feedback Enviado");
            } else {
                System.err.println("Erro: Nenhum Questionário de Feedback foi adicionada.");
            }
        } catch (SQLException e) {
            System.err.println("Erro ao salvar questionário");
            e.printStackTrace();
        }
    }
}
