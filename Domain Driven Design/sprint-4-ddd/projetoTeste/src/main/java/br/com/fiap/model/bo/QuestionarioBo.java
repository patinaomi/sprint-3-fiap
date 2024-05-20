package br.com.fiap.model.bo;

import br.com.fiap.model.dao.QuestionarioDao;
import br.com.fiap.model.vo.Questionario;

import java.sql.SQLException;

/**
 * Classe de negócios para operações relacionadas ao Questionario.
 * Contém regras de negócio e validações antes de interagir com o DAO.
 */
public class QuestionarioBo {

    private QuestionarioDao questionarioDao;

    /**
     * Construtor da classe QuestionarioBo.
     * Inicializa a camada de negócios com a implementação DAO fornecida.
     *
     * @param questionarioDao A implementação de QuestionarioDao a ser usada.
     */
    public QuestionarioBo(QuestionarioDao questionarioDao) {
        this.questionarioDao = questionarioDao;
    }

    /**
     * Insere um novo questionário após aplicar validações e regras de negócios.
     *
     * @param questionario O objeto Questionario a ser inserido.
     * @throws SQLException Se ocorrer um erro ao inserir o questionário.
     */
    public void inserir(Questionario questionario) throws SQLException {
        validarQuestionario(questionario);
        questionarioDao.inserir(questionario);
    }

    /**
     * Valida o objeto Questionario aplicando regras de negócio.
     *
     * @param questionario O objeto Questionario a ser validado.
     * @throws IllegalArgumentException Se a validação falhar.
     */
    private void validarQuestionario(Questionario questionario) {
        if (!Validacoes.validarEmail(questionario.getEmail())) {
            throw new IllegalArgumentException("Email inválido.");
        }
    }
}
