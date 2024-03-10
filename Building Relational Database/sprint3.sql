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



-- Deleta a tabela caso já exista
DROP TABLE Plataforma_Login CASCADE CONSTRAINTS;

-- Criação da Tabela Plataforma_Login
CREATE TABLE Plataforma_Login(id_login NUMBER(10) GENERATED ALWAYS as IDENTITY START WITH 1 INCREMENT BY 1
                              CONSTRAINT login_id_nn NOT NULL
                              CONSTRAINT login_id_pk PRIMARY KEY,
                              id_visit_fk NUMBER(10) CONSTRAINT login_idvisit_nn NOT NULL,
                              nome_login VARCHAR(40) CONSTRAINT login_nome_nn NOT NULL,
                              status_login VARCHAR(10) CONSTRAINT login_status_nn NOT NULL,
                              data_implementacao DATE CONSTRAINT login_data_nn NOT NULL,
                              email_login VARCHAR(40) CONSTRAINT login_email_nn NOT NULL,
                              CONSTRAINT platlogin_visitante_fk FOREIGN KEY (id_visit_fk) REFERENCES Visitante(id_visit));


