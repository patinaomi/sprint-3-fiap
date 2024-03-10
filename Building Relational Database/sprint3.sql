-- TOKITO TECHS
-- RM553472 Claudio Bispo
-- RM552918 Patricia Naomi
-- RM554021 Sara Ingrid


-- o que está como !!! tem que validar com o professor
-- DUVIDAS
-- 1. se os atributos tiverem q ser iguais ao da tabela, tem q alterar no DER
-- 2. validar regras de negocio em relacao ao not null
-- 3. validar nomes FK, fiz usando um padrao diferente, qual eh o certo??
-- 4. estando tudo certo, tirar comentarios
-- 5. EU ACHEI muito pouco para os campos VARCHAR(20) etc




-- Verificar se a tabela já existe, caso exista será apagada junto com suas dependências
DROP TABLE Visitante CASCADE CONSTRAINTS;

-- Criação da tabela Visitante
                        -- !!!verificar prof, auto increment
CREATE TABLE Visitante(id_visit NUMBER(10) GENERATED ALWAYS as IDENTITY START WITH 1 INCREMENT BY 1
                       CONSTRAINT visitante_id_nn NOT NULL
                       CONSTRAINT visitante_id_pk PRIMARY KEY, 
                       nome_visit VARCHAR2(30) CONSTRAINT visitante_nome_nn NOT NULL,
                       email_visit VARCHAR2(40) CONSTRAINT visitante_email_nn NOT NULL,
                       data_visit DATE CONSTRAINT visitante_data_nn NOT NULL,
                       hora_visit VARCHAR2(8) CONSTRAINT visitante_hora_nn NOT NULL,
                       -- !!! Armazenando como 'HH:MM:SS pois não tem TIME no Oracle
                       tempo_visit NUMBER(10) CONSTRAINT visitante_tempo_nn NOT NULL)



-- Deleta a tabela Plataforma Login caso já exista
DROP TABLE Plataforma_Login CASCADE CONSTRAINTS;

-- Criação da Tabela Plataforma_Login
CREATE TABLE Plataforma_Login(id_login NUMBER(10) GENERATED ALWAYS as IDENTITY START WITH 1 INCREMENT BY 1
                              CONSTRAINT login_id_nn NOT NULL
                              CONSTRAINT login_id_pk PRIMARY KEY,
                              visit_id_visit_fk NUMBER(10) CONSTRAINT login_idvisit_nn NOT NULL,
                              nome_login VARCHAR2(40) CONSTRAINT login_nome_nn NOT NULL,
                              status_login VARCHAR2(10) CONSTRAINT login_status_nn NOT NULL,
                              data_implementacao_login DATE CONSTRAINT login_data_nn NOT NULL,
                              email_login VARCHAR2(40) CONSTRAINT login_email_nn NOT NULL,
                              CONSTRAINT platlogin_visitante_fk FOREIGN KEY (visit_id_visit_fk) REFERENCES Visitante(id_visit));


-- Deleta a tabela Questionario caso já exista
DROP TABLE Questionario CASCADE CONSTRAINTS;

-- Criação da Tabela Questionario
CREATE TABLE Questionario(num_quest NUMBER(10) GENERATED ALWAYS as IDENTITY START WITH 1 INCREMENT BY 1
                          CONSTRAINT quest_num_nn NOT NULL
                          CONSTRAINT quest_num_pk PRIMARY KEY,
                          visit_id_visit_fk NUMBER(10) CONSTRAINT quest_idvisit_nn NOT NULL,
                          data_hora_visita_quest DATE CONSTRAINT quest_data_hora_visita_nn NOT NULL,
                          produto_visitado_quest VARCHAR2(40),
                          conhece_sales_quest VARCHAR2(10),
                          onde_conheceu_sales_quest VARCHAR2(30), 
                          conhece_prod_sales_quest VARCHAR2(10),
                          empresa_quest VARCHAR2(30),
                          segmento_quest VARCHAR2(30),
                          necessidad_emp_quest VARCHAR2(100),
                          solucao_emp_quest VARCHAR2(40),
                          orcamento_emp_quest NUMBER(10),
                          email_quest VARCHAR2(40) CONSTRAINT quest_email_nn NOT NULL,
                          CONSTRAINT quest_visitante_fk FOREIGN KEY(visit_id_visit_fk) REFERENCES Visitante(id_visit));
             
                          
                          
-- Deleta a tabela Leads caso necessário
DROP TABLE Leads CASCADE CONSTRAINTS;
-- !!! coloquei leadS no plural pois Lead no sql é uma palavra reservada

CREATE TABLE Leads(id_leads NUMBER(10) GENERATED ALWAYS as IDENTITY START WITH 1 INCREMENT BY 1
                   CONSTRAINT leads_id_nn NOT NULL
                   CONSTRAINT leads_id_pk PRIMARY KEY,
                   quest_num_quest_fk NUMBER(10) CONSTRAINT leads_num_quest_nn NOT NULL,
                   platlog_id_login_fk NUMBER(10) CONSTRAINT leads_id_login_nn NOT NULL,
                   nome_leads VARCHAR(40) CONSTRAINT leads_nome_nn NOT NULL,
                   email_leads VARCHAR(40) CONSTRAINT leads_email_nn NOT NULL,
                   empresa_leads VARCHAR(30),
                   data_hora_login_leads DATE CONSTRAINT leads_data_hora_login_nn NOT NULL,
                   CONSTRAINT leads_quest_fk FOREIGN KEY(quest_num_quest_fk) REFERENCES Questionario(num_quest),
                   CONSTRAINT leads_platlog_fk FOREIGN KEY(platlog_id_login_fk) REFERENCES Plataforma_Login(id_login));
                   

        
    

                          
                          






