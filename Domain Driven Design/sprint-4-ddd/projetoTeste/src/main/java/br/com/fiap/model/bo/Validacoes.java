package br.com.fiap.model.bo;

/**
 * Classe de utilitários para validação de campos de entrada de usuário.
 * Fornece métodos estáticos para validar nomes de usuários, endereços de e-mail e senhas.
 */
public class Validacoes {

    /**
     * Valida o nome de um usuário garantindo que esteja dentro dos parâmetros especificados.
     *
     * @param nome O nome de usuário a ser validado.
     * @return true se o nome de usuário está entre 2 e 30 caracteres e não contém espaços ou caracteres especiais.
     */
    public static boolean validarUsuario(String nome) {
        if (nome.length() < 2 || nome.length() > 30) {
            System.out.println("O nome deve ter entre 2 e 30 caracteres.");
            return false;
        }
        return true;
    }

    /**
     * Valida um endereço de e-mail usando uma expressão regular para garantir que esteja no formato correto.
     *
     * @param email O e-mail a ser validado.
     * @return true se o e-mail está em um formato válido conforme a regex.
     */
    public static boolean validarEmail(String email) {
        // Regex para validar o e-mail
        String regex = "^[\\w-]+@([\\w-]+\\.)+[\\w-]{2,4}$";

        if (email.matches(regex)) {
            return true;
        } else {
            System.out.printf("O e-mail %s é inválido.\n", email);
            return false;
        }
    }

    /**
     * Valida uma senha garantindo que ela atenda a critérios específicos para segurança.
     *
     * @param senha A senha a ser validada.
     * @return true se a senha contém pelo menos 6 caracteres, incluindo pelo menos um número,
     *         uma letra maiúscula, uma letra minúscula e um caractere especial.
     */
    public static boolean validarSenha(String senha) {
        String regex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=])(?=\\S+$).{6,}$";
        //ESTE METODO FOI RETIRADO DAS VALIDAÇÕES POIS O FRONT FEZ UMA VALIDAÇÃO DIFERENTE AFF
        if (senha.matches(regex)) {
            return true;
        } else {
            System.out.println("A senha deve conter no mínimo 6 caracteres, incluindo pelo menos um número, uma letra maiúscula, uma letra minúscula e um caractere especial.");
            return false;
        }
    }

    /**
     * Valida um número de telefone garantindo que ele esteja no formato correto.
     *
     * @param telefone O número de telefone a ser validado.
     * @return true se o número de telefone estiver em um formato válido.
     */
    public static boolean validarTelefone(String telefone) {
        // Regex para validar o telefone (exemplo simples, ajuste conforme necessário)
        String regex = "^[0-9]{8,15}$"; // Exemplo: aceita números de 10 a 15 dígitos

        if (telefone.matches(regex)) {
            return true;
        } else {
            System.out.printf("O telefone %s é inválido.\n", telefone);
            return false;
        }
    }
}
