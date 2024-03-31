package view;

import model.bo.Validacoes;
import model.dao.QuestionarioDao;
import model.dao.VisitanteDao;
import model.impl.QuestionarioDaoImpl;
import model.impl.VisitanteDaoImpl;
import model.vo.Questionario;
import model.vo.Visitante;

import java.sql.SQLException;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Menu {
    private VisitanteDao visitanteDao = new VisitanteDaoImpl();
    QuestionarioDao questionarioDao = new QuestionarioDaoImpl();
    private Scanner scanner = new Scanner(System.in);

    public void menuVisitante() throws SQLException {
        boolean sair = false;
        while (!sair) {
            System.out.println("\n----- Menu do Visitante -----");
            System.out.println("1 - Cadastrar Usuário");
            System.out.println("2 - Listar Usuários Cadastrados");
            System.out.println("3 - Responder Questionário");
            System.out.println("0 - Sair");
            System.out.print("Escolha uma opção: ");

            int opcao = 0;
            try {
                opcao = scanner.nextInt();
            } catch (InputMismatchException e) {
                System.out.println("Digite somente números.");
                scanner.next();
                continue;
            }

            switch (opcao) {

                case 1:
                    cadastrarVisitante();
                    break;
                case 2:
                    listarVisitantes();
                    break;
                case 3:
                    responderQuestionario();
                    break;
                case 0:
                    System.out.println("Saindo do programa...");
                    sair = true;
                    break;
                default:
                    System.out.println("Opção inválida!");
            }
        }
    }

    private void cadastrarVisitante() {
        scanner.nextLine();
        String nome;
        String email;

        // Validação do nome
        do {
            System.out.print("Nome: ");
            nome = scanner.nextLine();
        } while (!Validacoes.validarNome(nome));

        // Validação do email
        do {
            System.out.print("Email: ");
            email = scanner.nextLine(); // Lê o email diretamente
        } while (!Validacoes.validarEmail(email));

        Visitante novoVisitante = new Visitante(nome, email);
        visitanteDao.inserir(novoVisitante);
    }




    private void listarVisitantes() {
        System.out.println("--- Visitantes do Site ---");
        for (Visitante visitante : visitanteDao.listar()) {
            System.out.println(visitante);
        }
    }

    private void responderQuestionario() {
        scanner.nextLine();
        System.out.print("Digite seu e-mail para começar: ");
        String email = scanner.nextLine();
        Visitante visitante = visitanteDao.buscarPorEmail(email);

        if (visitante == null) {
            System.out.println("Não foi encontrado um visitante com o e-mail fornecido.");
            return;
        }

        System.out.println("--- QUESTIONÁRIO ---");


        System.out.print("Qual produto você visitou? ");
        String prodVisitado = scanner.nextLine();

        System.out.print("Você conhece a Salesforce? (Sim/Não) ");
        String conheceSales = scanner.nextLine();

        System.out.print("Onde você conheceu a Salesforce: ");
        String ondeConheceuSales = scanner.nextLine();

        System.out.print("Você já conhece os produtos da Salesforce? (Sim/Não) ");
        String conheceProdSales = scanner.nextLine();

        System.out.print("Nome da sua empresa: ");
        String empresa = scanner.nextLine();

        System.out.print("Segmento da empresa: ");
        String segmento = scanner.nextLine();

        System.out.print("Qual a necessidade da sua empresa: ");
        String necessidadeEmpresa = scanner.nextLine();

        System.out.print("Qual solução empresarial você tem interesse: ");
        String solucaoEmpresa = scanner.nextLine();

        System.out.print("Orçamento estimado da empresa: ");
        int orcamentoEmpresa = scanner.nextInt();

        Questionario questionario = new Questionario(
                visitante.getId(),prodVisitado, conheceSales, ondeConheceuSales, conheceProdSales, empresa, segmento,
                necessidadeEmpresa, solucaoEmpresa, orcamentoEmpresa, visitante.getEmail());

        questionarioDao.inserir(questionario);
    }


}
