package Controller;

import model.dao.PlataformaLoginDao;
import model.vo.PlataformaLogin;

import java.util.List;

public class PlataformaLoginController {
    private PlataformaLoginDao plataformaLoginDao;

    public PlataformaLoginController(PlataformaLoginDao plataformaLoginDao) {
        this.plataformaLoginDao = plataformaLoginDao;
    }

    public List<PlataformaLogin> listar() {
        return plataformaLoginDao.listar();
    }
}
