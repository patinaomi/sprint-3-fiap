package model.dao;

import model.vo.ExperienciaUsuario;
import java.util.List;

public interface ExperienciaUsuarioDao {
    public List<ExperienciaUsuario> listarExperienciaUsuario();

    public void salvarExperienciaUsuario(ExperienciaUsuario experienciaUsuario);
    public ExperienciaUsuario buscarExperienciaUsuario(int id);
    public void atualizarExperienciaUsuario(ExperienciaUsuario experienciaUsuario);
    public void deletarExperienciaUsuario(ExperienciaUsuario experienciaUsuario);
}
