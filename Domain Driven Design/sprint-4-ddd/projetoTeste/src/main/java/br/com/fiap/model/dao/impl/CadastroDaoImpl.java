package br.com.fiap.model.dao.impl;


import br.com.fiap.model.connection.ConexaoFactory;
import br.com.fiap.model.dao.CadastroDao;
import br.com.fiap.model.vo.Cadastro;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class CadastroDaoImpl implements CadastroDao {

    @Override
    public void inserir(Cadastro cadastro) {
        String sql = "INSERT INTO Cadastro (nome_cad, sobrenome_cad, email_cad, cel_cad, senha_cad, data_cad, genero_id_gen, sobre_emp_id_emp) VALUES (?, ?, ?, ?, ?, sysdate, ?, ?)";

        try (Connection conn = ConexaoFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, cadastro.getNome());
            stmt.setString(2, cadastro.getSobrenome());
            stmt.setString(3, cadastro.getEmail());
            stmt.setString(4, cadastro.getCelular());
            stmt.setString(5, cadastro.getSenha());
            stmt.setInt(6, cadastro.getGeneroId());
            stmt.setInt(7, cadastro.getSobreEmpresaId());

            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void atualizar(Cadastro cadastro) {
        String sql = "UPDATE Cadastro SET nome_cad = ?, sobrenome_cad = ?, email_cad = ?, cel_cad = ?, senha_cad = ? WHERE id_cad = ?";

        try (Connection conn = ConexaoFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, cadastro.getNome());
            stmt.setString(2, cadastro.getSobrenome());
            stmt.setString(3, cadastro.getEmail());
            stmt.setString(4, cadastro.getCelular());
            stmt.setString(5, cadastro.getSenha());
            stmt.setInt(6, cadastro.getId());

            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
