package model.dao;

import model.vo.Leads;
import java.util.List;

public interface LeadsDao {
    public List<Leads> listar();
    public Leads buscar(int id);
    public void inserir(Leads leads);
    public void atualizar(Leads leads);
    public void deletar(int id);
}
