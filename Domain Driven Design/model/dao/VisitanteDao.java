package model.dao;
import model.vo.Visitante;

import java.util.List;

public interface VisitanteDao {
        public List<Visitante> listarVisitante();
        public Visitante buscarVisitante(int id);
        public void atualizarVisitante(Visitante visitante);
        public void deletarVisitante(Visitante visitante);
}
