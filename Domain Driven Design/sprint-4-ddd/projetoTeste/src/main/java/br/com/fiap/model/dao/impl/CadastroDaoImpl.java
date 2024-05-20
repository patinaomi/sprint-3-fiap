package br.com.fiap.model.dao.impl;

import br.com.fiap.model.connection.ConexaoFactory;
import br.com.fiap.model.dao.CadastroDao;
import br.com.fiap.model.vo.Cadastro;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Implementação da interface CadastroDao para operações de persistência relacionadas ao objeto Cadastro.
 * Esta classe utiliza JDBC para interagir com o banco de dados.
 */
public class CadastroDaoImpl implements CadastroDao {

    /**
     * Insere um novo cadastro no banco de dados.
     * @param cadastro O objeto Cadastro a ser inserido.
     */
    @Override
    public void inserir(Cadastro cadastro) {
        String sql = "INSERT INTO Cadastro (nome_cad, sobrenome_cad, email_cad, cel_cad, senha_cad, data_cad, genero_id_gen, sobre_emp_id_emp) VALUES (?, ?, ?, ?, ?, sysdate, ?, ?)";

        try (Connection conn = ConexaoFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            // Configura os parâmetros da instrução SQL
            stmt.setString(1, cadastro.getNome());
            stmt.setString(2, cadastro.getSobrenome());
            stmt.setString(3, cadastro.getEmail());
            stmt.setString(4, cadastro.getCelular());
            stmt.setString(5, cadastro.getSenha());
            stmt.setInt(6, cadastro.getGeneroId());
            stmt.setInt(7, cadastro.getSobreEmpresaId());

            // Executa a inserção
            int dadosAlterados = stmt.executeUpdate();
            if (dadosAlterados > 0) {
                System.out.println("Cadastro inserido com sucesso!");
            } else {
                System.err.println("Erro: Nenhum cadastro foi inserido.");
            }
        } catch (SQLException e) {
            System.err.println("Erro ao salvar cadastro.");
            e.printStackTrace();
        }
    }

    /**
     * Atualiza um cadastro existente no banco de dados.
     * @param cadastro O objeto Cadastro a ser atualizado.
     */
    @Override
    public void atualizar(Cadastro cadastro) {
        String sql = "UPDATE Cadastro SET nome_cad = ?, sobrenome_cad = ?, email_cad = ?, cel_cad = ?, senha_cad = ? WHERE id_cad = ?";

        try (Connection conn = ConexaoFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            // Configura os parâmetros da instrução SQL
            stmt.setString(1, cadastro.getNome());
            stmt.setString(2, cadastro.getSobrenome());
            stmt.setString(3, cadastro.getEmail());
            stmt.setString(4, cadastro.getCelular());
            stmt.setString(5, cadastro.getSenha());
            stmt.setInt(6, cadastro.getId());

            // Executa a atualização
            int dadosAlterados = stmt.executeUpdate();
            if (dadosAlterados > 0) {
                System.out.println("Cadastro atualizado com sucesso!");
            } else {
                System.err.println("Erro: Nenhum cadastro foi atualizado.");
            }
        } catch (SQLException e) {
            System.err.println("Erro ao atualizar cadastro.");
            e.printStackTrace();
        }
    }
}
