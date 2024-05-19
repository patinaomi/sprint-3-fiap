package br.com.fiap.model.dao.impl;


import br.com.fiap.model.connection.ConexaoFactory;
import br.com.fiap.model.dao.QuestionarioDao;
import br.com.fiap.model.vo.Questionario;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class QuestionarioDaoImpl implements QuestionarioDao {

    @Override
    public void insert(Questionario questionario) {
        String sql = "INSERT INTO Questionario (" +
                "nome_ques, tel_ques, email_ques, nome_emp_ques, seg_ques, conhece_sales_ques, nec_emp_ques, data_ques, " +
                "produto_id_prod, ques_produto_implantado, ques_empresa_funcionamento, ques_estrategias_marketing, " +
                "ques_ia_automacoes, ques_desenvolver_estrategia, ques_melhorar_comunicacao, ques_ambiente_integrado, ques_aumento_produtividade, " +
                "ques_melhorar_capacitacao, ques_reducao_custo, ques_aumentar_conversao, ques_potencializar_vendas, ques_acelerar_vendas, " +
                "ques_riqueza_dados, ques_melhorar_experiencia, ques_mostrar_diferencial, ques_criar_jornada, ques_marketing_oportunidade" +
                ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = ConexaoFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, questionario.getNomeQues());
            stmt.setLong(2, questionario.getTelQues());
            stmt.setString(3, questionario.getEmailQues());
            stmt.setString(4, questionario.getNomeEmpQues());
            stmt.setString(5, questionario.getSegQues());
            stmt.setString(6, String.valueOf(questionario.getConheceSalesQues()));
            stmt.setString(7, questionario.getNecEmpQues());
            stmt.setTimestamp(8, questionario.getDataQues());
            stmt.setInt(9, questionario.getProdutoIdProd());
            stmt.setInt(10, questionario.getQuesProdutoImplantado());
            stmt.setInt(11, questionario.getQuesEmpresaFuncionamento());
            stmt.setInt(12, questionario.getQuesEstrategiasMarketing());
            stmt.setInt(13, questionario.getQuesIaAutomacoes());
            stmt.setInt(14, questionario.getQuesDesenvolverEstrategia());
            stmt.setInt(15, questionario.getQuesMelhorarComunicacao());
            stmt.setInt(16, questionario.getQuesAmbienteIntegrado());
            stmt.setInt(17, questionario.getQuesAumentoProdutividade());
            stmt.setInt(18, questionario.getQuesMelhorarCapacitacao());
            stmt.setInt(19, questionario.getQuesReducaoCusto());
            stmt.setInt(20, questionario.getQuesAumentarConversao());
            stmt.setInt(21, questionario.getQuesPotencializarVendas());
            stmt.setInt(22, questionario.getQuesAcelerarVendas());
            stmt.setInt(23, questionario.getQuesRiquezaDados());
            stmt.setInt(24, questionario.getQuesMelhorarExperiencia());
            stmt.setInt(25, questionario.getQuesMostrarDiferencial());
            stmt.setInt(26, questionario.getQuesCriarJornada());
            stmt.setInt(27, questionario.getQuesMarketingOportunidade());

            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
