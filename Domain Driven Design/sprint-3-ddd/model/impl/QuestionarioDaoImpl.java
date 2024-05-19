package model.impl;

import model.ConexaoBancoDeDados;
import model.dao.QuestionarioDao;
import model.vo.Questionario;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

public class QuestionarioDaoImpl implements QuestionarioDao {
    private Connection conn;
    PreparedStatement ps = null;
    @Override
    public List<Questionario> listar() {
        return null;
    }

    @Override
    public Questionario buscar(int id) {
        return null;
    }

    @Override
    public void inserir(Questionario questionario) {
        String sql = "INSERT INTO questionario (visit_id_visit_fk, data_hora_visita_quest, produto_visitado_quest, conhece_sales_quest, onde_conheceu_sales_quest, conhece_prod_sales_quest, empresa_quest, segmento_quest, necessidade_emp_quest, solucao_emp_quest, orcamento_emp_quest, email_quest) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = ConexaoBancoDeDados.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setInt(1, questionario.getVisitaFk());
            ps.setTimestamp(2, new java.sql.Timestamp(questionario.getDataHoraVisita().getTime()));
            ps.setString(3, questionario.getProdVisitado());
            ps.setString(4, questionario.getConheceSales());
            ps.setString(5, questionario.getOndeConheceuSales());
            ps.setString(6, questionario.getConheceProdSales());
            ps.setString(7, questionario.getEmpresa());
            ps.setString(8, questionario.getSegmento());
            ps.setString(9, questionario.getNecessidadeEmpresa());
            ps.setString(10, questionario.getSolucaoEmpresa());
            ps.setFloat(11, questionario.getOrcamentoEmpresa());
            ps.setString(12, questionario.getEmail());


            int dadosAlterados = ps.executeUpdate();
            if (dadosAlterados > 0) {
                System.out.println("Obrigado por responder ao questionário!");
            } else {
                System.err.println("Erro: Nenhum Questionário foi adicionada.");
            }
        } catch (SQLException e) {
            System.err.println("Erro ao salvar questionário");
            e.printStackTrace();
        }
    }

    @Override
    public void atualizar(Questionario questionario) {

    }

    @Override
    public void deletar(int id) {

    }
}
