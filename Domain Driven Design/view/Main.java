package view;

import model.dao.*;
import model.impl.*;

import java.sql.SQLException;


public class Main {
    public static void main(String[] args) throws SQLException {

        VisitanteDao visitanteDao = new VisitanteDaoImpl();
        QuestionarioDao questionarioDao = new QuestionarioDaoImpl();
        PlataformaLoginDao plataformaLoginDao = new PlataformaLoginDaoImpl();
        PerguntaChatbotDao perguntaChatbotDao = new PerguntaChatbotImpl();
        LeadsDao leadsDao = new LeadsDaoImpl();
        ExperienciaUsuarioDao experienciaUsuarioDao = new ExperienciaUsuarioDaoImpl();

        Menu menu = new Menu();

        menu.menuVisitante();



        //A data e hora do login será a atual (já é passada no construtor)

        //Teste Insert - Visitante
        //Visitante visitante = new Visitante("Pati", Validacoes.validarEmail("pati@oie.com"), 3);
        //visitanteDao.inserir(visitante);

        //Teste Insert - Questionario
        //Questionario questionario = new Questionario(1, "Tableau", "Sim", "Internet", "Sim", "Tokito", "Tecnologia", "CRM", "Melhorar Atendimento", 10000, Validacoes.validarEmail("teste@oie.com"));
        //questionarioDao.inserir(questionario);

        //Teste Insert - Leads
        //Leads leads = new Leads(1, 1, "Claudio Bispo", Validacoes.validarEmail("claudio@gmail.com"), "Tokito");
        //leadsDao.inserir(leads);

        //Teste Insert - Experiência Usuário
        //ExperienciaUsuario experienciaUsuario = new ExperienciaUsuario(1, 1, 1, "Tableau", "Produtos", 5);
        //experienciaUsuarioDao.inserir(experienciaUsuario);

        //Teste Insert - Pergunta Chatbot
        //PerguntaChatbot perguntaChatbot = new PerguntaChatbot(3, 3, 1, "Dúvidas", "Entidade", "Intenção", "Tableau", "Muito Satisfeito");
        //perguntaChatbotDao.inserir(perguntaChatbot);

        //Teste Insert - PlataformaLogin
        //PlataformaLogin plataformaLogin = new PlataformaLogin(1, "Sara Ingrid", "Ativo", Validacoes.validarEmail("sara@gmail.com"));
        //plataformaLoginDao.inserir(plataformaLogin);



    }
}
