package Controller;

import model.dao.VisitanteDao;
import model.vo.Visitante;

import java.sql.SQLException;
import java.util.List;

public class VisitanteController {
    private VisitanteDao visitanteDao;

    public VisitanteController(VisitanteDao visitanteDao) {
        this.visitanteDao = visitanteDao;
    }

    public List<Visitante> listar() throws SQLException {
        return visitanteDao.listar();
    }

    public void inserir(Visitante visitante) throws SQLException {
        visitanteDao.inserir(visitante);
    }

    public Visitante buscar(int id) throws SQLException {
        return visitanteDao.buscar(id);
    }

    public void atualizar(Visitante visitante) throws SQLException {
        visitanteDao.atualizar(visitante);
    }

    public void deletar(int id) throws SQLException {
        visitanteDao.deletar(id);
    }

    public Visitante buscarPorEmail(String email) throws SQLException {
        return visitanteDao.buscarPorEmail(email);
    }
}
