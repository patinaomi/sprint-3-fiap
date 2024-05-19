package br.com.fiap.model.dao.impl;

import br.com.fiap.model.connection.ConexaoFactory;
import br.com.fiap.model.dao.QuestionarioDao;
import br.com.fiap.model.vo.Questionario;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class QuestionarioDaoImpl implements QuestionarioDao {

    @Override
    public void inserir(Questionario questionario) {
        String sql = "INSERT INTO Questionario (" +
                "nome_ques, tel_ques, email_ques, nome_emp_ques, seg_ques, conhece_sales_ques, nec_emp_ques," +
                "prod_implantado_ques, prod_funcionamento_ques, estrategias_mkt_ques, " +
                "ia_automacoes_ques, des_estrategia_ques, melhorar_comunicacao_ques, ambiente_integrado_ques, aumento_produtividade_ques, " +
                "melhorar_capacitacao_ques, reducao_custo_ques, aumentar_conversao_ques, potencializar_vendas_ques, acelerar_vendas_ques, " +
                "riqueza_dados_ques, melhorar_exp_ques, mostrar_diferencial_ques, criar_jornada_ques, mkt_oportunidade_ques, data_ques" +
                ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, sysdate)";

        try (Connection conn = ConexaoFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, questionario.getNome());
            stmt.setLong(2, questionario.getTelefone());
            stmt.setString(3, questionario.getEmail());
            stmt.setString(4, questionario.getNomeEmpresa());
            stmt.setString(5, questionario.getSegmento());
            stmt.setString(6, questionario.getConheceSalesforce());
            stmt.setString(7, questionario.getNecessidadeEmpresa());
            stmt.setString(8, questionario.getProdutoImplantado());
            stmt.setInt(9, questionario.getEmpresaFuncionamento());
            stmt.setInt(10, questionario.getEstrategiasMarketing());
            stmt.setInt(11, questionario.getIaAutomacoes());
            stmt.setInt(12, questionario.getDesenvolverEstrategia());
            stmt.setInt(13, questionario.getMelhorarComunicacao());
            stmt.setInt(14, questionario.getAmbienteIntegrado());
            stmt.setInt(15, questionario.getAumentoProdutividade());
            stmt.setInt(16, questionario.getMelhorarCapacitacao());
            stmt.setInt(17, questionario.getReducaoCusto());
            stmt.setInt(18, questionario.getAumentarConversao());
            stmt.setInt(19, questionario.getPotencializarVendas());
            stmt.setInt(20, questionario.getAcelerarVendas());
            stmt.setInt(21, questionario.getRiquezaDados());
            stmt.setInt(22, questionario.getMelhorarExperiencia());
            stmt.setInt(23, questionario.getMostrarDiferencial());
            stmt.setInt(24, questionario.getCriarJornada());
            stmt.setInt(25, questionario.getMktOportunidade());

            // Logging the values for debugging purposes
            System.out.println("PreparedStatement Values:");
            System.out.println("nome_ques: " + questionario.getNome());
            System.out.println("tel_ques: " + questionario.getTelefone());
            System.out.println("email_ques: " + questionario.getEmail());
            System.out.println("nome_emp_ques: " + questionario.getNomeEmpresa());
            System.out.println("seg_ques: " + questionario.getSegmento());
            System.out.println("conhece_sales_ques: " + questionario.getConheceSalesforce());
            System.out.println("nec_emp_ques: " + questionario.getNecessidadeEmpresa());
            System.out.println("prod_implantado_ques: " + questionario.getProdutoImplantado());
            System.out.println("prod_funcionamento_ques: " + questionario.getEmpresaFuncionamento());
            System.out.println("estrategias_mkt_ques: " + questionario.getEstrategiasMarketing());
            System.out.println("ia_automacoes_ques: " + questionario.getIaAutomacoes());
            System.out.println("des_estrategia_ques: " + questionario.getDesenvolverEstrategia());
            System.out.println("melhorar_comunicacao_ques: " + questionario.getMelhorarComunicacao());
            System.out.println("ambiente_integrado_ques: " + questionario.getAmbienteIntegrado());
            System.out.println("aumento_produtividade_ques: " + questionario.getAumentoProdutividade());
            System.out.println("melhorar_capacitacao_ques: " + questionario.getMelhorarCapacitacao());
            System.out.println("reducao_custo_ques: " + questionario.getReducaoCusto());
            System.out.println("aumentar_conversao_ques: " + questionario.getAumentarConversao());
            System.out.println("potencializar_vendas_ques: " + questionario.getPotencializarVendas());
            System.out.println("acelerar_vendas_ques: " + questionario.getAcelerarVendas());
            System.out.println("riqueza_dados_ques: " + questionario.getRiquezaDados());
            System.out.println("melhorar_exp_ques: " + questionario.getMelhorarExperiencia());
            System.out.println("mostrar_diferencial_ques: " + questionario.getMostrarDiferencial());
            System.out.println("criar_jornada_ques: " + questionario.getCriarJornada());
            System.out.println("mkt_oportunidade_ques: " + questionario.getMktOportunidade());

            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
