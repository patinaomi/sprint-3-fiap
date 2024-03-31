package Controller;

import model.dao.VisitanteDao;
import model.vo.Visitante;

import java.util.List;

public class VisitanteController {
    private VisitanteDao visitanteDao;

    public VisitanteController(VisitanteDao visitanteDao) {
        this.visitanteDao = visitanteDao;
    }

    public List<Visitante> listar() {
        return visitanteDao.listar();
    }
}
