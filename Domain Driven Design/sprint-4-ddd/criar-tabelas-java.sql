-- Deletar tabelas caso já existam
DROP TABLE Quest_Feedback CASCADE CONSTRAINTS;
DROP TABLE Contato CASCADE CONSTRAINTS;
DROP TABLE Genero CASCADE CONSTRAINTS;
DROP TABLE Cadastro CASCADE CONSTRAINTS;
DROP TABLE Produto CASCADE CONSTRAINTS;
DROP TABLE Questionario CASCADE CONSTRAINTS;
DROP TABLE Tamanho_Empresa CASCADE CONSTRAINTS;
DROP TABLE Sobre_Empresa CASCADE CONSTRAINTS;

-- Criação das tabelas

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

-- Sobre_Empresa
CREATE TABLE Sobre_Empresa (
    id_emp INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    desc_sobre_emp VARCHAR2(40) NOT NULL
);

ALTER TABLE Sobre_Empresa ADD CONSTRAINT sobre_empresa_pk PRIMARY KEY(id_emp);

-- Contato (Formulário de Contato)
CREATE TABLE Contato (
    id_con INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    nome_con VARCHAR2(60) NOT NULL,
    email_con VARCHAR2(70) NOT NULL,
    tel_con VARCHAR2(30),
    seg_con VARCHAR2(70),
    cargo_con VARCHAR2(80),
    msg_con VARCHAR2(600),
    data_con TIMESTAMP,
    produto_id_prod INTEGER,
    tamanho_empresa_id_tam_emp INTEGER
);
ALTER TABLE Contato ADD CONSTRAINT contato_pk PRIMARY KEY(id_con);

-- Cadastro (Login)
CREATE TABLE Cadastro (
    id_cad INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    nome_cad VARCHAR2(60) NOT NULL,
    sobrenome_cad VARCHAR2(60) NOT NULL,
    email_cad VARCHAR2(60) NOT NULL,
    cel_cad VARCHAR2(30) NOT NULL,
    senha_cad VARCHAR2(60) NOT NULL,
    data_cad TIMESTAMP NOT NULL,
    genero_id_gen INTEGER NOT NULL,
    sobre_emp_id_emp INTEGER NOT NULL
);
ALTER TABLE Cadastro ADD CONSTRAINT cadastro_pk PRIMARY KEY(id_cad);

-- Questionario (Formulário de descoberta)
CREATE TABLE Questionario (
    id_ques INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    nome_ques VARCHAR2(80),
    email_ques VARCHAR2(60),
    tel_ques VARCHAR2(30),
    nome_emp_ques VARCHAR2(60),
    seg_ques VARCHAR2(80),
    conhece_sales_ques CHAR(5),
    nec_emp_ques VARCHAR2(300),
    prod_implantado_ques CHAR(5),
    prod_funcionamento_ques NUMBER(1),
    estrategias_mkt_ques NUMBER(1),
    ia_automacoes_ques NUMBER(1),
    des_estrategia_ques NUMBER(1),
    melhorar_comunicacao_ques NUMBER(1),
    ambiente_integrado_ques NUMBER(1),
    aumento_produtividade_ques NUMBER(1),
    melhorar_capacitacao_ques NUMBER(1),
    reducao_custo_ques NUMBER(1),
    aumentar_conversao_ques NUMBER(1),
    potencializar_vendas_ques NUMBER(1),
    acelerar_vendas_ques NUMBER(1),
    riqueza_dados_ques NUMBER(1),
    melhorar_exp_ques NUMBER(1),
    mostrar_diferencial_ques NUMBER(1),
    criar_jornada_ques NUMBER(1),
    mkt_oportunidade_ques NUMBER(1),
    data_ques TIMESTAMP NOT NULL
);
ALTER TABLE Questionario ADD CONSTRAINT questionario_pk PRIMARY KEY(id_ques);

-- Quest_Feedback
CREATE TABLE Quest_Feedback (
    id_feedback INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    nome_feedback VARCHAR2(80),
    email_feedback VARCHAR2(60) NOT NULL,
    avaliacao_feedback INTEGER NOT NULL,
    data_feedback TIMESTAMP NOT NULL,
    msg_feedback VARCHAR2(600)
);
ALTER TABLE Quest_Feedback ADD CONSTRAINT feedback_pk PRIMARY KEY(id_feedback);

-- Inserindo Foreign Keys
-- FKs na tabela Contato
ALTER TABLE Contato
ADD CONSTRAINT contato_produto_fk FOREIGN KEY(produto_id_prod) REFERENCES Produto(id_prod);
ALTER TABLE Contato
ADD CONSTRAINT contato_tamanho_empresa_fk FOREIGN KEY(tamanho_empresa_id_tam_emp) REFERENCES Tamanho_Empresa(id_tam_emp);

-- FKs na tabela Cadastro
ALTER TABLE Cadastro
ADD CONSTRAINT cad_genero_fk FOREIGN KEY(genero_id_gen) REFERENCES Genero(id_gen);
ALTER TABLE Cadastro
ADD CONSTRAINT cad_sobre_emp_fk FOREIGN KEY(sobre_emp_id_emp) REFERENCES Sobre_Empresa(id_emp);


-- Inserção de linhas de dados (INSERT)
-- Inserção de dados na tabela genero
INSERT INTO Genero (desc_gen)
VALUES ('Feminino');

INSERT INTO Genero (desc_gen)
VALUES ('Masculino');

INSERT INTO Genero (desc_gen)
VALUES ('Prefiro não dizer');

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
VALUES ('Pequena');

INSERT INTO Tamanho_Empresa (desc_tam_emp) 
VALUES ('Média');

INSERT INTO Tamanho_Empresa (desc_tam_emp) 
VALUES ('Grande');

INSERT INTO Tamanho_Empresa (desc_tam_emp) 
VALUES ('Multinacional');

-- Inserção de dados na tabela Sobre_Empresa
INSERT INTO Sobre_Empresa (desc_sobre_emp)
VALUES ('Funcionário');

INSERT INTO Sobre_Empresa (desc_sobre_emp)
VALUES ('Proprietário');

INSERT INTO Sobre_Empresa (desc_sobre_emp)
VALUES ('Filiado');

INSERT INTO Sobre_Empresa (desc_sobre_emp)
VALUES ('Estudante');

COMMIT;
