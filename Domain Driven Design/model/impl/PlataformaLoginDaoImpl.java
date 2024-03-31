package model.impl;

import model.ConexaoBancoDeDados;
import model.dao.PlataformaLoginDao;
import model.vo.PlataformaLogin;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

public class PlataformaLoginDaoImpl implements PlataformaLoginDao {
    @Override
    public List<PlataformaLogin> listar() {
        return null;
    }

    @Override
    public PlataformaLogin buscar(int id) {
        return null;
    }

    @Override
    public void inserir(PlataformaLogin plataformaLogin) {
        String sql = "INSERT INTO plataforma_login (visit_id_visit_fk, nome_login, status_login, data_implementacao_login, email_login) VALUES (?, ?, ?, ?, ?)";

        try(Connection conn = ConexaoBancoDeDados.getConnection();
            PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setInt(1, plataformaLogin.getVisitaFk());
            ps.setString(2, plataformaLogin.getNome());
            ps.setString(3, plataformaLogin.getStatus());
            ps.setTimestamp(4, plataformaLogin.getDataImplementacao());
            ps.setString(5, plataformaLogin.getEmail());

            int dadosAlterados = ps.executeUpdate();
            if (dadosAlterados > 0) {
                System.out.println("Login na Plataforma adicionado com sucesso!");
            } else {
                System.err.println("Erro: Nenhum Login na Plataforma foi adicionado.");
            }

        } catch (SQLException e) {
            System.err.println("Erro: ao salvar Login na Plataforma.");
            e.printStackTrace();
        }
    }

    @Override
    public void atualizar(PlataformaLogin plataformaLogin) {

    }

    @Override
    public void deletar(int id) {

    }
}
