package Controller;

import model.dao.LeadsDao;
import model.vo.Leads;

import java.util.List;

public class LeadsController {
    private LeadsDao leadsDao;

    public LeadsController(LeadsDao leadsDao) {
        this.leadsDao = leadsDao;
    }

    public List<Leads> listarLeads() {
        return leadsDao.listarLeads();
    }
}
