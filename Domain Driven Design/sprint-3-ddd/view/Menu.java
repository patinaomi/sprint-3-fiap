package view;

import Controller.QuestionarioController;
import Controller.VisitanteController;
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
    private VisitanteController visitanteController;
    private QuestionarioController questionarioController;
    private Scanner scanner = new Scanner(System.in);


    public Menu(VisitanteController visitanteController, QuestionarioController questionarioController) {
        this.visitanteController = visitanteController;
        this.questionarioController = questionarioController;
    }

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

    private void cadastrarVisitante() throws SQLException {
        scanner.nextLine();
        String nome;
        String email;

        // Validação do nome
        System.out.println("--- Novo Cadastro ---");
        do {
            System.out.print("Nome: ");
            nome = scanner.nextLine();
        } while (!Validacoes.validarNome(nome));

        // Validação do email
        do {
            System.out.print("Email: ");
            email = scanner.nextLine();
        } while (!Validacoes.validarEmail(email));

        Visitante novoVisitante = new Visitante(nome, email);
        visitanteController.inserir(novoVisitante);
    }




    private void listarVisitantes() throws SQLException {
        System.out.println("--- Visitantes do Site ---");
        for (Visitante visitante : visitanteController.listar()) {
            System.out.println(visitante);
        }
    }

    private void responderQuestionario() throws SQLException {
        scanner.nextLine();
        System.out.print("Digite seu e-mail para começar: ");
        String email = scanner.nextLine();
        Visitante visitante = visitanteController.buscarPorEmail(email);

        if (visitante == null) {
            System.out.println("Não foi encontrado um visitante com o e-mail fornecido.");
            while (true) {
                try {
                    System.out.println("Deseja fazer o cadastro?");
                    System.out.println("[1] Sim");
                    System.out.println("[2] Não");
                    int op = scanner.nextInt();
                    scanner.nextLine();

                    if (op == 1) {
                        cadastrarVisitante();
                        break;
                    } else if (op == 2) {
                        System.out.println("Só é possível responder o questionário com um cadastro!");
                        return;
                    } else {
                        System.out.println("Opção Inválida. Escolha [1] Sim ou [2] Não.");
                    }
                } catch (InputMismatchException e) {
                    System.out.println("Por favor, digite somente números.");
                    scanner.nextLine();
                }
            }
        } else {

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

        questionarioController.inserir(questionario);
        }
    }


}
