package Controller;

import model.dao.LeadsDao;
import model.vo.Leads;

import java.sql.SQLException;
import java.util.List;

public class LeadsController {
    private LeadsDao leadsDao;

    public LeadsController(LeadsDao leadsDao) {
        this.leadsDao = leadsDao;
    }

    public List<Leads> listar() {
        return leadsDao.listar();
    }

    public void inserir(Leads leads) throws SQLException {
        leadsDao.inserir(leads);
    }

    public Leads buscar(int id) throws SQLException {
        return leadsDao.buscar(id);
    }

    public void atualizar(Leads leads) throws SQLException {
        leadsDao.atualizar(leads);
    }

    public void deletar(int id) throws SQLException {
        leadsDao.deletar(id);
    }
}
