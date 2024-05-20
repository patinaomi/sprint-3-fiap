package br.com.fiap.model.bo;

import java.sql.SQLException;

import br.com.fiap.model.vo.Contato;
import br.com.fiap.model.dao.ContatoDao;
import br.com.fiap.model.dao.impl.ContatoDaoImpl;

/**
 * Classe de negócios para operações relacionadas ao Contato.
 * Contém regras de negócio e validações antes de interagir com o DAO.
 */
public class ContatoBo {

	private ContatoDao contatoDao;

	/**
	 * Construtor da classe ContatoBo.
	 * Inicializa a camada de negócios com a implementação DAO padrão.
	 */
	public ContatoBo() {
		this.contatoDao = new ContatoDaoImpl();
	}

	/**
	 * Insere um novo contato após aplicar validações e regras de negócios.
	 *
	 * @param contato O objeto Contato a ser inserido.
	 * @throws SQLException Se ocorrer um erro ao inserir o contato.
	 */
	public void inserir(Contato contato) throws SQLException {
		validarContato(contato);
		contatoDao.inserir(contato);
	}

	/**
	 * Valida o objeto Contato aplicando regras de negócio.
	 *
	 * @param contato O objeto Contato a ser validado.
	 * @throws IllegalArgumentException Se alguma validação falhar.
	 */
	private void validarContato(Contato contato) throws IllegalArgumentException {
		if (!Validacoes.validarEmail(contato.getEmail())) {
			throw new IllegalArgumentException("Email inválido.");
		}
		if (!Validacoes.validarTelefone(contato.getTelefone())) {
			throw new IllegalArgumentException("Telefone inválido.");
		}
	}
}
