package br.com.fiap.model.bo;

import br.com.fiap.model.dao.CadastroDao;
import br.com.fiap.model.vo.Cadastro;

import java.sql.SQLException;

/**
 * Classe de negócios para operações relacionadas ao Cadastro.
 * Contém regras de negócio e validações antes de interagir com o DAO.
 */
public class CadastroBo {

    private CadastroDao cadastroDao;

    /**
     * Construtor da classe CadastroBo.
     * Inicializa a camada de negócios com a implementação DAO fornecida.
     *
     * @param cadastroDao A implementação de CadastroDao a ser usada.
     */
    public CadastroBo(CadastroDao cadastroDao) {
        this.cadastroDao = cadastroDao;
    }

    /**
     * Insere um novo cadastro após aplicar validações e regras de negócios.
     *
     * @param cadastro O objeto Cadastro a ser inserido.
     * @throws SQLException Se ocorrer um erro ao inserir o cadastro.
     */
    public void inserir(Cadastro cadastro) throws SQLException {
        validarCadastro(cadastro);
        cadastroDao.inserir(cadastro);
    }

    /**
     * Atualiza um cadastro existente após aplicar validações e regras de negócios.
     *
     * @param cadastro O objeto Cadastro a ser atualizado.
     * @throws SQLException Se ocorrer um erro ao atualizar o cadastro.
     */
    public void atualizar(Cadastro cadastro) throws SQLException {
        validarCadastro(cadastro);
        cadastroDao.atualizar(cadastro);
    }

    /**
     * Valida o objeto Cadastro aplicando regras de negócio.
     *
     * @param cadastro O objeto Cadastro a ser validado.
     * @throws IllegalArgumentException Se alguma validação falhar.
     */
    private void validarCadastro(Cadastro cadastro) throws IllegalArgumentException {
        if (!Validacoes.validarUsuario(cadastro.getNome())) {
            throw new IllegalArgumentException("Nome inválido.");
        }
        if (!Validacoes.validarEmail(cadastro.getEmail())) {
            throw new IllegalArgumentException("Email inválido.");
        }
        if (!Validacoes.validarTelefone(cadastro.getCelular())) {
            throw new IllegalArgumentException("Celular inválido.");
        }
    }
}