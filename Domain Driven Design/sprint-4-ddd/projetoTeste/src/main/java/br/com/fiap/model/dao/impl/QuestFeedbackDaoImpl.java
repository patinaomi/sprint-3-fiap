package br.com.fiap.model.dao.impl;

import br.com.fiap.model.connection.ConexaoFactory;
import br.com.fiap.model.dao.QuestFeedbackDao;
import br.com.fiap.model.vo.QuestFeedback;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Implementação da interface QuestFeedbackDao para operações de persistência relacionadas ao objeto QuestFeedback.
 * Esta classe utiliza JDBC para interagir com o banco de dados.
 */
public class QuestFeedbackDaoImpl implements QuestFeedbackDao {

    /**
     * Insere um novo feedback de questionário no banco de dados.
     * @param questFeedback O objeto QuestFeedback a ser inserido.
     */
    @Override
    public void inserir(QuestFeedback questFeedback) {
        String sql = "INSERT INTO QUEST_FEEDBACK(nome_feedback, email_feedback, avaliacao_feedback, msg_feedback, data_feedback) VALUES (?, ?, ?, ?, sysdate)";

        try (Connection conn = ConexaoFactory.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            // Configura os parâmetros da instrução SQL
            ps.setString(1, questFeedback.getNome());
            ps.setString(2, questFeedback.getEmail());
            ps.setInt(3, questFeedback.getAvaliacao());
            ps.setString(4, questFeedback.getMensagem());

            // Executa a inserção
            int dadosAlterados = ps.executeUpdate();
            if (dadosAlterados > 0) {
                System.out.println("Questionário Feedback Enviado");
            } else {
                System.err.println("Erro: Nenhum Questionário de Feedback foi adicionado.");
            }
        } catch (SQLException e) {
            System.err.println("Erro ao salvar questionário");
            e.printStackTrace();
        }
    }
}
