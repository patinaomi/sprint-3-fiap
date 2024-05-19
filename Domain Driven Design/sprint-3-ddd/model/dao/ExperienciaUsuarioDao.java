package model.dao;

import model.vo.ExperienciaUsuario;
import java.util.List;

public interface ExperienciaUsuarioDao {
    public List<ExperienciaUsuario> listar();

    public void inserir(ExperienciaUsuario experienciaUsuario);
    public ExperienciaUsuario buscar(int id);
    public void atualizar(ExperienciaUsuario experienciaUsuario);
    public void deletar(int id);
}
