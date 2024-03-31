package model.dao;
import model.vo.Visitante;

import java.util.List;

public interface VisitanteDao {
        public List<Visitante> listar();
        public Visitante buscar(int id);
        public void inserir(Visitante visitante);

        public void atualizar(Visitante visitante);

        public Visitante buscarPorEmail(String email);

        public void deletar(int id);
}
