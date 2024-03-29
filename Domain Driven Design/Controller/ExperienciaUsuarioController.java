package Controller;

import model.dao.ExperienciaUsuarioDao;
import model.vo.ExperienciaUsuario;

import java.util.List;

public class ExperienciaUsuarioController {

    private ExperienciaUsuarioDao experienciaUsuarioDao;

    public ExperienciaUsuarioController(ExperienciaUsuarioDao experienciaUsuarioDao) {
        this.experienciaUsuarioDao = experienciaUsuarioDao;
    }

    public List<ExperienciaUsuario> listarExperienciaUsuario() {
        return experienciaUsuarioDao.listarExperienciaUsuario();
    }
}
