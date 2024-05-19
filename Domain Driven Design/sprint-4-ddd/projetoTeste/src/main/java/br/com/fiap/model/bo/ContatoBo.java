package br.com.fiap.model.bo;

import java.sql.SQLException;

import br.com.fiap.model.vo.Contato;
import br.com.fiap.model.dao.ContatoDao;
import br.com.fiap.model.dao.impl.ContatoDaoImpl;

public class ContatoBo {

	private ContatoDao contatoDao;

	public ContatoBo() {
		this.contatoDao = new ContatoDaoImpl();
	}

	public void inserirContato(Contato contato) throws SQLException {
		// Aqui você pode adicionar validações e outras regras de negócio antes de inserir o contato
		validarContato(contato);
		contatoDao.inserir(contato);
	}

	private void validarContato(Contato contato) throws IllegalArgumentException {
		// Adicione validações conforme necessário
		if (contato.getNome() == null || contato.getNome().isEmpty()) {
			throw new IllegalArgumentException("Nome não pode ser vazio.");
		}
		if (contato.getEmail() == null || contato.getEmail().isEmpty()) {
			throw new IllegalArgumentException("Email não pode ser vazio.");
		}
		// Adicione mais validações conforme necessário
	}
}