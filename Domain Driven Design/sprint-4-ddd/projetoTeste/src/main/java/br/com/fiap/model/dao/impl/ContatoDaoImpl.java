package br.com.fiap.model.dao.impl;

import br.com.fiap.model.vo.Contato;
import br.com.fiap.model.connection.ConexaoFactory;
import br.com.fiap.model.dao.ContatoDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class ContatoDaoImpl implements ContatoDao {

    @Override
    public void inserir(Contato contato) {
        String sql = "INSERT INTO Contato (nome_con, email_con, tel_con, seg_con, cargo_con, msg_con, data_con, produto_id_prod, tamanho_empresa_id_tam_emp) VALUES (?, ?, ?, ?, ?, ?, sysdate, ?, ?)";

        try (Connection conn = ConexaoFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, contato.getNome());
            stmt.setString(2, contato.getEmail());
            stmt.setString(3, contato.getTelefone());
            stmt.setString(4, contato.getSegmento());
            stmt.setString(5, contato.getCargo());
            stmt.setString(6, contato.getMensagem());
            stmt.setInt(7, contato.getProdutoId());
            stmt.setInt(8, contato.getTamanhoEmpresaId());

            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
