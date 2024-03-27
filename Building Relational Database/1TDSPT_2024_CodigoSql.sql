-- TOKITO TECHS
-- RM553472 Claudio Bispo
-- RM552981 Patricia Naomi
-- RM554021 Sara Ingrid


-- Verificar se a tabela já existe, caso exista será apagada junto com suas dependências
DROP TABLE Visitante CASCADE CONSTRAINTS;
DROP TABLE Plataforma_Login CASCADE CONSTRAINTS;
DROP TABLE Questionario CASCADE CONSTRAINTS;
DROP TABLE Leads CASCADE CONSTRAINTS;
DROP TABLE Pergunta_Chatbot CASCADE CONSTRAINTS;
DROP TABLE Experiencia_Usuario CASCADE CONSTRAINTS;

-- para verificar o padrão da data
SELECT SYSDATE FROM DUAL;

-- alterando o formato da data e hora
ALTER SESSION SET NLS_DATE_FORMAT = 'DD/MM/YYYY HH24:MI:SS';


-- Criação da tabela Visitante
CREATE TABLE Visitante(id_visit NUMBER(10) GENERATED ALWAYS as IDENTITY START WITH 1 INCREMENT BY 1
                       CONSTRAINT visitante_id_pk PRIMARY KEY, 
                       nome_visit VARCHAR2(30) CONSTRAINT visitante_nome_nn NOT NULL,
                       email_visit VARCHAR2(40) CONSTRAINT visitante_email_nn NOT NULL,
                       data_hora_visit DATE CONSTRAINT visitante_datahora_nn NOT NULL,
                       tempo_visit NUMBER(10) CONSTRAINT visitante_tempo_nn NOT NULL);

-- Criação da Tabela Plataforma_Login
CREATE TABLE Plataforma_Login(id_login NUMBER(10) GENERATED ALWAYS as IDENTITY START WITH 1 INCREMENT BY 1
                              CONSTRAINT login_id_pk PRIMARY KEY,
                              visit_id_visit_fk NUMBER(10) CONSTRAINT login_idvisit_nn NOT NULL,
                              nome_login VARCHAR2(40) CONSTRAINT login_nome_nn NOT NULL,
                              status_login VARCHAR2(10) CONSTRAINT login_status_nn NOT NULL,
                              data_implementacao_login DATE CONSTRAINT login_data_nn NOT NULL,
                              email_login VARCHAR2(40) CONSTRAINT login_email_nn NOT NULL,
                              CONSTRAINT platlogin_visitante_fk FOREIGN KEY (visit_id_visit_fk) REFERENCES Visitante(id_visit));


-- Criação da Tabela Questionario
CREATE TABLE Questionario(num_quest NUMBER(10) GENERATED ALWAYS as IDENTITY START WITH 1 INCREMENT BY 1
                          CONSTRAINT quest_num_pk PRIMARY KEY,
                          visit_id_visit_fk NUMBER(10) CONSTRAINT quest_idvisit_nn NOT NULL,
                          data_hora_visita_quest DATE CONSTRAINT quest_data_hora_visita_nn NOT NULL,
                          produto_visitado_quest VARCHAR2(40),
                          conhece_sales_quest VARCHAR2(10),
                          onde_conheceu_sales_quest VARCHAR2(30), 
                          conhece_prod_sales_quest VARCHAR2(10),
                          empresa_quest VARCHAR2(30),
                          segmento_quest VARCHAR2(30),
                          necessidade_emp_quest VARCHAR2(100),
                          solucao_emp_quest VARCHAR2(40),
                          orcamento_emp_quest NUMBER(10),
                          email_quest VARCHAR2(40) CONSTRAINT quest_email_nn NOT NULL,
                          CONSTRAINT quest_visitante_fk FOREIGN KEY(visit_id_visit_fk) REFERENCES Visitante(id_visit));
                      

-- coloquei leadS no plural pois Lead no sql é uma função
-- Criação da tabela Leads
CREATE TABLE Leads(id_leads NUMBER(10) GENERATED ALWAYS as IDENTITY START WITH 1 INCREMENT BY 1
                   CONSTRAINT leads_id_pk PRIMARY KEY,
                   quest_num_quest_fk NUMBER(10) CONSTRAINT leads_num_quest_nn NOT NULL,
                   platlog_id_login_fk NUMBER(10) CONSTRAINT leads_id_login_nn NOT NULL,
                   nome_leads VARCHAR2(40) CONSTRAINT leads_nome_nn NOT NULL,
                   email_leads VARCHAR2(40) CONSTRAINT leads_email_nn NOT NULL,
                   empresa_leads VARCHAR2(30),
                   data_hora_login_leads DATE CONSTRAINT leads_data_hora_login_nn NOT NULL,
                   CONSTRAINT leads_quest_fk FOREIGN KEY(quest_num_quest_fk) REFERENCES Questionario(num_quest),
                   CONSTRAINT leads_platlog_fk FOREIGN KEY(platlog_id_login_fk) REFERENCES Plataforma_Login(id_login));

-- Criação da tabela Pergunta Chatbot                    
CREATE TABLE Pergunta_Chatbot(id_pergunta_chatbot NUMBER(10),
                              id_resposta_chatbot NUMBER(10),
                              visit_id_visit_fk NUMBER(10) CONSTRAINT chatbot_idvisit_fk NOT NULL,
                              conteudo_chatbot VARCHAR2(300) CONSTRAINT chatbot_conteudo_nn NOT NULL,
                              entidade_chatbot VARCHAR2(100),
                              intencao_chatbot VARCHAR2(50),
                              produto_chatbot VARCHAR2(100),
                              satisfacao_chatbot VARCHAR2(30),
                              data_hora_chatbot DATE CONSTRAINT chatbot_data_hora_nn NOT NULL,
                              PRIMARY KEY (id_pergunta_chatbot, id_resposta_chatbot),
                              CONSTRAINT perguntachatbot_visitante_fk FOREIGN KEY (visit_id_visit_fk) REFERENCES Visitante(id_visit));
                              

-- Criação da Tabela Experiência Usuário
CREATE TABLE Experiencia_Usuario(id_exp NUMBER(10)GENERATED ALWAYS as IDENTITY START WITH 1 INCREMENT BY 1
                                 CONSTRAINT exp_id_pk PRIMARY KEY,
                                 visit_id_visit_fk NUMBER(10) CONSTRAINT exp_id_visit_nn NOT NULL,
                                 chatbot_id_perg_fk NUMBER(10) CONSTRAINT exp_id_perg_chatbot_nn NOT NULL,
                                 chatbot_id_resp_fk NUMBER(10) CONSTRAINT exp_id_resp_chatbot_nn NOT NULL,
                                 data_hora_vis_exp DATE CONSTRAINT exp_data_hora_vis_nn NOT NULL,
                                 prod_pesquisado_exp VARCHAR2(50),
                                 pag_visitada_exp VARCHAR2(50),
                                 tempo_visita_exp NUMBER(8) CONSTRAINT exp_tempo_visita_nn NOT NULL,
                                 CONSTRAINT exp_visit_fk FOREIGN KEY(visit_id_visit_fk) REFERENCES Visitante(id_visit),
                                 CONSTRAINT exp_chatbot_fk FOREIGN KEY(chatbot_id_perg_fk, chatbot_id_resp_fk) REFERENCES Pergunta_Chatbot(id_pergunta_chatbot, id_resposta_chatbot));
                                               
-- TESTE INSERT
insert into Visitante (nome_visit, email_visit, data_hora_visit, tempo_visit) VALUES
('Pati', 'pati@pi.com', TO_DATE('25/03/2024 11:30:00', 'DD/MM/YYYY HH24:MI:SS'), 0034);

INSERT INTO Plataforma_Login(visit_id_visit_fk, nome_login, status_login, data_implementacao_login, email_login) VALUES
(1, 'patinaomi', 'Ativo', '25/03/25', 'pat@oi.com') 

INSERT INTO Questionario(visit_id_visit_fk, data_hora_visita_quest, email_quest) VALUES
(1, '22/03/24', 'pat@oi.com')

INSERT INTO Leads(quest_num_quest_fk, platlog_id_login_fk, nome_leads, email_leads, empresa_leads, data_hora_login_leads) VALUES
(1, 1, 'Claudio Bispo', 'clau@oi.com', 'Tokito', (TO_DATE('01/03/2024 14:30:00', 'DD-MM-YYYY HH24:MI:SS')));

INSERT INTO Pergunta_Chatbot VALUES (1, 1, 1, 'Lorem ipsum', 'Entidade', 'Intenção', 'Produto', 'Satisfeito', (TO_DATE('01/03/2024 14:30:00', 'DD-MM-YYYY HH24:MI:SS')));

INSERT INTO Experiencia_Usuario(visit_id_visit_fk, chatbot_id_perg_fk, chatbot_id_resp_fk, data_hora_vis_exp, prod_pesquisado_exp, pag_visitada_exp, tempo_visita_exp)
VALUES (1, 1, 1, (TO_DATE('20/03/2024 14:30:00', 'DD-MM-YYYY HH24:MI:SS')), 'Tableau', 'Contato', 23);
