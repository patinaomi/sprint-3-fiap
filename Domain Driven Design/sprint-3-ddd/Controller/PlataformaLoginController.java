package Controller;

import model.dao.PlataformaLoginDao;
import model.vo.PlataformaLogin;

import java.sql.SQLException;
import java.util.List;

public class PlataformaLoginController {
    private PlataformaLoginDao plataformaLoginDao;

    public PlataformaLoginController(PlataformaLoginDao plataformaLoginDao) {
        this.plataformaLoginDao = plataformaLoginDao;
    }

    public List<PlataformaLogin> listar() throws SQLException {
        return plataformaLoginDao.listar();
    }

    public void inserir(PlataformaLogin plataformaLogin) throws SQLException {
        plataformaLoginDao.inserir(plataformaLogin);
    }

    public PlataformaLogin buscar(int id) throws SQLException {
        return plataformaLoginDao.buscar(id);
    }

    public void atualizar(PlataformaLogin plataformaLogin) throws SQLException {
        plataformaLoginDao.atualizar(plataformaLogin);
    }

    public void deletar(int id) throws SQLException {
       plataformaLoginDao.deletar(id);
    }
}
