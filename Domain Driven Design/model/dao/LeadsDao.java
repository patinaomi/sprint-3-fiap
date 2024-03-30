package model.dao;

import model.vo.Leads;
import java.util.List;

public interface LeadsDao {
    public List<Leads> listarLeads();
    public Leads buscarLeads(int id);
    public void salvarLeads(Leads leads);
    public void atualizarLeads(Leads leads);
    public void deletarLeads(Leads leads);
}
