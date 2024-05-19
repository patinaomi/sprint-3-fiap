package model.dao;

import model.vo.PlataformaLogin;

import java.util.List;

public interface PlataformaLoginDao {
    public List<PlataformaLogin> listar();
    public PlataformaLogin buscar(int id);
    public void inserir(PlataformaLogin plataformaLogin);
    public void atualizar(PlataformaLogin plataformaLogin);
    public void deletar(int id);
}
