package model.impl;

import model.ConexaoBancoDeDados;
import model.dao.PerguntaChatbotDao;
import model.vo.PerguntaChatbot;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

public class PerguntaChatbotImpl implements PerguntaChatbotDao {
    @Override
    public List<PerguntaChatbot> listar() {
        return null;
    }

    @Override
    public PerguntaChatbot buscar(int id) {
        return null;
    }

    @Override
    public void inserir(PerguntaChatbot perguntaChatbot) {
        String sql = "INSERT INTO pergunta_chatbot (id_pergunta_chatbot, id_resposta_chatbot,visit_id_visit_fk, conteudo_chatbot, entidade_chatbot, intencao_chatbot, produto_chatbot, satisfacao_chatbot,data_hora_chatbot) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    try (Connection conn = ConexaoBancoDeDados.getConnection();
         PreparedStatement ps = conn.prepareStatement(sql)) {

        ps.setInt(1, perguntaChatbot.getIdPergunta());
        ps.setInt(2, perguntaChatbot.getIdResposta());
        ps.setInt(3, perguntaChatbot.getVisitaFk());
        ps.setString(4, perguntaChatbot.getConteudo());
        ps.setString(5, perguntaChatbot.getEntidade());
        ps.setString(6, perguntaChatbot.getIntencao());
        ps.setString(7, perguntaChatbot.getProduto());
        ps.setString(8, perguntaChatbot.getSatisfacao());
        ps.setTimestamp(9, perguntaChatbot.getDataHora());

        int dadosAlterados = ps.executeUpdate();
        if (dadosAlterados > 0) {
            System.out.println("Pergunta adicionada com sucesso!");
        } else {
            System.err.println("Erro: Nenhuma Pergunta foi adicionada.");
        }
    } catch (SQLException e) {
        System.err.println("Erro ao salvar Pergunta.");
        e.printStackTrace();
    }
    }

        @Override
    public void atualizar(PerguntaChatbot perguntaChatbot) {

    }

    @Override
    public void deletar(int id) {

    }
}
