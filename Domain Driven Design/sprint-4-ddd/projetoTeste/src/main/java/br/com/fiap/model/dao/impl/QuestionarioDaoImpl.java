package br.com.fiap.model.dao.impl;

import br.com.fiap.model.connection.ConexaoFactory;
import br.com.fiap.model.dao.QuestionarioDao;
import br.com.fiap.model.vo.Questionario;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Implementação da interface QuestionarioDao para operações de persistência relacionadas ao objeto Questionario.
 * Esta classe utiliza JDBC para interagir com o banco de dados.
 */
public class QuestionarioDaoImpl implements QuestionarioDao {

    /**
     * Insere um novo questionário no banco de dados.
     *
     * @param questionario O objeto Questionario a ser inserido.
     */
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

            // Configura os parâmetros da instrução SQL
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

            // Executa a inserção
            int dadosAlterados = stmt.executeUpdate();
            if (dadosAlterados > 0) {
                System.out.println("Questionário inserido com sucesso!");
            } else {
                System.err.println("Erro: Nenhum questionário foi inserido.");
            }
        } catch (SQLException e) {
            System.err.println("Erro ao inserir questionário.");
            e.printStackTrace();
        }
    }
}