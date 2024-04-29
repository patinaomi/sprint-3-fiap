-- INTEGRANTES
-- Claudio Bispo RM: 553472
-- Patricia Naomi RM:552981
-- Sara Ingrid RM: 554021

-- Deleta tabelas caso já existam
DROP TABLE Quest_Feedback CASCADE CONSTRAINTS;
DROP TABLE Contato CASCADE CONSTRAINTS;
DROP TABLE Estado CASCADE CONSTRAINTS;
DROP TABLE Genero CASCADE CONSTRAINTS;
DROP TABLE Login CASCADE CONSTRAINTS;
DROP TABLE Produto CASCADE CONSTRAINTS;
DROP TABLE Questionario CASCADE CONSTRAINTS;
DROP TABLE Tamanho_Empresa CASCADE CONSTRAINTS;
DROP TABLE Visitante CASCADE CONSTRAINTS;

-- Criação das tabelas

-- Estado
CREATE TABLE Estado (
    id_est INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    sigla_est CHAR(2) NOT NULL
);
ALTER TABLE Estado ADD CONSTRAINT estado_pk PRIMARY KEY(id_est);

-- Genero
CREATE TABLE Genero (
    id_gen INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    desc_gen VARCHAR2(60) NOT NULL
);
ALTER TABLE Genero ADD CONSTRAINT genero_pk PRIMARY KEY(id_gen);

-- Produto
CREATE TABLE Produto (
    id_prod INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    nome_prod VARCHAR2(80) NOT NULL,
    desc_prod VARCHAR2(600) NOT NULL,
    cat_prod VARCHAR2(80) NOT NULL
);
ALTER TABLE Produto ADD CONSTRAINT produto_pk PRIMARY KEY(id_prod);

-- Tamanho_Empresa
CREATE TABLE Tamanho_Empresa (
    id_tam_emp INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    desc_tam_emp VARCHAR2(40) NOT NULL
);
ALTER TABLE Tamanho_Empresa ADD CONSTRAINT tamanho_empresa_pk PRIMARY KEY(id_tam_emp);

-- Visitante
CREATE TABLE Visitante (
    id_visit INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    tempo_ent_visit TIMESTAMP(0) NOT NULL,
    tempo_sai_visit TIMESTAMP(0) NOT NULL
);
ALTER TABLE Visitante ADD CONSTRAINT visitante_pk PRIMARY KEY(id_visit);

-- Contato
CREATE TABLE Contato (
    id_con INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    nome_con VARCHAR2(60) NOT NULL,
    email_con VARCHAR2(70) NOT NULL,
    tel_con NUMBER(20),
    seg_con VARCHAR2(70),
    cargo_con VARCHAR2(80),
    produto_id_prod INTEGER NOT NULL,
    visitante_id_visit INTEGER NOT NULL,
    estado_id_est INTEGER NOT NULL,
    tamanho_empresa_id_tam_emp INTEGER NOT NULL
);
ALTER TABLE Contato ADD CONSTRAINT contato_pk PRIMARY KEY(id_con);

-- Login
CREATE TABLE Login (
    id_login INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    nome_login VARCHAR2(60) NOT NULL,
    sobrenome_login VARCHAR2(60) NOT NULL,
    email_login VARCHAR2(60) NOT NULL,
    cel_login VARCHAR2(60) NOT NULL,
    funcao_login VARCHAR2(60) NOT NULL,
    senha_login VARCHAR2(60) NOT NULL,
    estado_id_est INTEGER NOT NULL,
    genero_id_gen INTEGER NOT NULL,
    visitante_id_visit INTEGER NOT NULL,
    tamanho_empresa_id_tam_emp INTEGER NOT NULL
);
ALTER TABLE Login ADD CONSTRAINT login_pk PRIMARY KEY(id_login);

-- Questionario
CREATE TABLE Questionario (
    id_ques INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    nome_ques VARCHAR2(80),
    email_ques VARCHAR2(60) NOT NULL,
    tel_ques NUMBER(20),
    seg_ques VARCHAR2(80),
    nome_emp_ques VARCHAR2(60) NOT NULL,
    conhece_sales_ques CHAR(1),
    nec_emp_ques VARCHAR2(300),
    produto_id_prod INTEGER NOT NULL,
    visitante_id_visit INTEGER NOT NULL
);
ALTER TABLE Questionario ADD CONSTRAINT questionario_pk PRIMARY KEY(id_ques);

-- Quest_Feedback
CREATE TABLE Quest_Feedback (
    id_feedback INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    email_feedback VARCHAR2(60) NOT NULL,
    avaliacao_feedback INTEGER NOT NULL,
    msg_feedback VARCHAR2(600),
    visitante_id_visit INTEGER NOT NULL
);
ALTER TABLE Quest_Feedback ADD CONSTRAINT feedback_pk PRIMARY KEY(id_feedback);

-- Inserindo Foreign Keys

ALTER TABLE Contato
ADD CONSTRAINT contato_estado_fk FOREIGN KEY(estado_id_est) REFERENCES Estado(id_est);
ALTER TABLE Contato
ADD CONSTRAINT contato_produto_fk FOREIGN KEY(produto_id_prod) REFERENCES Produto(id_prod);
ALTER TABLE Contato
ADD CONSTRAINT contato_tamanho_empresa_fk FOREIGN KEY(tamanho_empresa_id_tam_emp) REFERENCES Tamanho_Empresa(id_tam_emp);
ALTER TABLE Contato
ADD CONSTRAINT contato_visitante_fk FOREIGN KEY(visitante_id_visit) REFERENCES Visitante(id_visit);

ALTER TABLE Login
ADD CONSTRAINT login_estado_fk FOREIGN KEY(estado_id_est) REFERENCES Estado(id_est);
ALTER TABLE Login
ADD CONSTRAINT login_genero_fk FOREIGN KEY(genero_id_gen) REFERENCES Genero(id_gen);
ALTER TABLE Login
ADD CONSTRAINT login_tamanho_empresa_fk FOREIGN KEY(tamanho_empresa_id_tam_emp) REFERENCES Tamanho_Empresa(id_tam_emp);
ALTER TABLE Login
ADD CONSTRAINT login_visitante_fk FOREIGN KEY(visitante_id_visit) REFERENCES Visitante(id_visit);

ALTER TABLE Questionario
ADD CONSTRAINT questionario_produto_fk FOREIGN KEY(produto_id_prod) REFERENCES Produto(id_prod);

ALTER TABLE Quest_Feedback
ADD CONSTRAINT feedback_visitante_fk FOREIGN KEY(visitante_id_visit) REFERENCES Visitante(id_visit);


-- Inserção de linhas de dados (INSERT)
-- Inserção de dados na tabela genero
INSERT INTO Genero (desc_gen) VALUES ('Feminino');
INSERT INTO Genero (desc_gen) VALUES ('Masculino');
INSERT INTO Genero (desc_gen) VALUES ('Outros');
INSERT INTO Genero (desc_gen) VALUES ('Prefiro não dizer');

-- Inserção de dados na tabela estado
INSERT INTO Estado (sigla_est) VALUES ('AC');
INSERT INTO Estado (sigla_est) VALUES ('AL');
INSERT INTO Estado (sigla_est) VALUES ('AP');
INSERT INTO Estado (sigla_est) VALUES ('AM');
INSERT INTO Estado (sigla_est) VALUES ('BA');
INSERT INTO Estado (sigla_est) VALUES ('CE');
INSERT INTO Estado (sigla_est) VALUES ('DF');
INSERT INTO Estado (sigla_est) VALUES ('ES');
INSERT INTO Estado (sigla_est) VALUES ('GO');
INSERT INTO Estado (sigla_est) VALUES ('MA');
INSERT INTO Estado (sigla_est) VALUES ('MT');
INSERT INTO Estado (sigla_est) VALUES ('MS');
INSERT INTO Estado (sigla_est) VALUES ('MG');
INSERT INTO Estado (sigla_est) VALUES ('PA');
INSERT INTO Estado (sigla_est) VALUES ('PB');
INSERT INTO Estado (sigla_est) VALUES ('PR');
INSERT INTO Estado (sigla_est) VALUES ('PE');
INSERT INTO Estado (sigla_est) VALUES ('PI');
INSERT INTO Estado (sigla_est) VALUES ('RJ');
INSERT INTO Estado (sigla_est) VALUES ('RN');
INSERT INTO Estado (sigla_est) VALUES ('RS');
INSERT INTO Estado (sigla_est) VALUES ('RO');
INSERT INTO Estado (sigla_est) VALUES ('RR');
INSERT INTO Estado (sigla_est) VALUES ('SC');
INSERT INTO Estado (sigla_est) VALUES ('SP');
INSERT INTO Estado (sigla_est) VALUES ('SE');
INSERT INTO Estado (sigla_est) VALUES ('TO');

-- Inserção de dados na tabela Produto
INSERT INTO Produto (nome_prod, desc_prod, cat_prod) 
VALUES ('Atendimento', 'Solução de atendimento ao cliente', 'Serviço');

INSERT INTO Produto (nome_prod, desc_prod, cat_prod) 
VALUES ('Cloud', 'Soluções de computação em nuvem', 'Infraestrutura');

INSERT INTO Produto (nome_prod, desc_prod, cat_prod) 
VALUES ('Slack', 'Ferramenta de comunicação', 'Software');

INSERT INTO Produto (nome_prod, desc_prod, cat_prod) 
VALUES ('Einstein', 'Soluções de IA e Machine Learning', 'Tecnologia');

INSERT INTO Produto (nome_prod, desc_prod, cat_prod) 
VALUES ('Vendas', 'Soluções para gestão de vendas', 'Serviço');

INSERT INTO Produto (nome_prod, desc_prod, cat_prod) 
VALUES ('Marketing', 'Ferramenta de campanhas de marketing', 'Software');

-- Inserção de dados na tabela Tamanho_Empresa
INSERT INTO Tamanho_Empresa (desc_tam_emp) 
VALUES ('Funcionário');

INSERT INTO Tamanho_Empresa (desc_tam_emp) 
VALUES ('Proprietário');

INSERT INTO Tamanho_Empresa (desc_tam_emp) 
VALUES ('Filiado');

INSERT INTO Tamanho_Empresa (desc_tam_emp) 
VALUES ('Estudante');


-- Exemplos de Atualização de dados (UPDATE)
-- Exemplos de Remoção de dados (DELETE)
