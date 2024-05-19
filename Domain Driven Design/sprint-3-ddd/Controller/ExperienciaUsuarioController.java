package Controller;

import model.dao.ExperienciaUsuarioDao;
import model.vo.ExperienciaUsuario;

import java.sql.SQLException;
import java.util.List;

public class ExperienciaUsuarioController {

    private ExperienciaUsuarioDao experienciaUsuarioDao;

    public ExperienciaUsuarioController(ExperienciaUsuarioDao experienciaUsuarioDao) {
        this.experienciaUsuarioDao = experienciaUsuarioDao;
    }

    public List<ExperienciaUsuario> listar() throws SQLException {
        return experienciaUsuarioDao.listar();
    }

    public void inserir(ExperienciaUsuario experienciaUsuario) throws SQLException {
        experienciaUsuarioDao.inserir(experienciaUsuario);
    }

    public ExperienciaUsuario buscar(int id) throws SQLException {
        return experienciaUsuarioDao.buscar(id);
    }

    public void atualizar(ExperienciaUsuario experienciaUsuario) throws SQLException {
        experienciaUsuarioDao.atualizar(experienciaUsuario);
    }

    public void deletar(int id) throws SQLException {
        experienciaUsuarioDao.deletar(id);
    }
}
