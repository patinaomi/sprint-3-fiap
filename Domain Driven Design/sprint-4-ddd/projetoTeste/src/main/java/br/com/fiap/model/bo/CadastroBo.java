package br.com.fiap.model.bo;

import br.com.fiap.model.dao.CadastroDao;
import br.com.fiap.model.vo.Cadastro;

import java.sql.SQLException;

public class CadastroBo {
    private CadastroDao cadastroDao;

    public CadastroBo(CadastroDao cadastroDao) {
        this.cadastroDao = cadastroDao;
    }

    public void inserirCadastro(Cadastro cadastro) throws SQLException {
        // Adicione aqui validações ou regras de negócios, se necessário
        cadastroDao.inserir(cadastro);
    }

    public void atualizarCadastro(Cadastro cadastro) throws SQLException {
        // Adicione aqui validações ou regras de negócios, se necessário
        cadastroDao.atualizar(cadastro);
    }
}
