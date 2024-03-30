package model.dao;

import model.vo.PlataformaLogin;

import java.util.List;

public interface PlataformaLoginDao {
    public List<PlataformaLogin> listarPlataformaLogin();
    public PlataformaLogin buscarPlataformaLogin(int id);
    public void salvarPlataformaLogin(PlataformaLogin plataformaLogin);
    public void atualizarPlataformaLogin(PlataformaLogin plataformaLogin);
    public void deletarPlataformaLogin(PlataformaLogin plataformaLogin);
}
