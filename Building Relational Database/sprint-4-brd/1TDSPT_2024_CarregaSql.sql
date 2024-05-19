-- INTEGRANTES
-- Claudio Bispo RM: 553472
-- Patricia Naomi RM:552981
-- Sara Ingrid RM: 554021

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
    tel_con NUMBER(20),
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
    cel_cad VARCHAR2(40) NOT NULL,
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
    tel_ques NUMBER(20),
    email_ques VARCHAR2(60),
    nome_emp_ques VARCHAR2(60),
    seg_ques VARCHAR2(80),
    conhece_sales_ques CHAR(5),
    nec_emp_ques VARCHAR2(300),
    data_ques TIMESTAMP NOT NULL,
    produto_id_prod INTEGER NOT NULL,
    ques_produto_implantado CHAR(5),
    ques_empresa_funcionamento CHAR(5),
    ques_estrategias_marketing NUMBER(1),
    ques_ia_automacoes NUMBER(1),
    ques_desenvolver_estrategia NUMBER(1),
    ques_melhorar_comunicacao NUMBER(1),
    ques_ambiente_integrado NUMBER(1),
    ques_aumento_produtividade NUMBER(1),
    ques_melhorar_capacitacao NUMBER(1),
    ques_reducao_custo NUMBER(1),
    ques_aumentar_conversao NUMBER(1),
    ques_potencializar_vendas NUMBER(1),
    ques_acelerar_vendas NUMBER(1),
    ques_riqueza_dados NUMBER(1),
    ques_melhorar_experiencia NUMBER(1),
    ques_mostrar_diferencial NUMBER(1),
    ques_criar_jornada NUMBER(1),
    ques_marketing_oportunidade NUMBER(1)
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

-- FKs na tabela Questionario
ALTER TABLE Questionario
ADD CONSTRAINT questionario_produto_fk FOREIGN KEY(produto_id_prod) REFERENCES Produto(id_prod);


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


-- Inserção de dados na tabela Contato
INSERT INTO Contato (nome_con, email_con, tel_con, seg_con, cargo_con, msg_con, data_con, produto_id_prod, tamanho_empresa_id_tam_emp)
VALUES ('João Silva', 'joao.silva@example.com', 11987654321, 'Tecnologia', 'Gerente de TI', 'Gostaria do contato na parte da manhã', TO_TIMESTAMP('10/04/2024 12:33:00', 'DD/MM/YYYY HH24:MI:SS'), 1, 1);

INSERT INTO Contato (nome_con, email_con, tel_con, seg_con, cargo_con, msg_con, data_con, produto_id_prod, tamanho_empresa_id_tam_emp)
VALUES ('Maria Oliveira', 'maria.oliveira@example.com', 1122344556, 'Saúde', 'Diretora Médica', 'Preciso fechar o pedido o quanto antes', TO_TIMESTAMP('08/02/2024 10:30:00', 'DD/MM/YYYY HH24:MI:SS'), 2, 2);

INSERT INTO Contato (nome_con, email_con, tel_con, seg_con, cargo_con, msg_con, data_con, produto_id_prod, tamanho_empresa_id_tam_emp)
VALUES ('Carlos Costa', 'carlos.costa@example.com', 11922334455, 'Educação', 'Professor', 'Vocês atendem de final de semana?', TO_TIMESTAMP('17/01/2024 11:00:00', 'DD/MM/YYYY HH24:MI:SS'), 3, 3);

INSERT INTO Contato (nome_con, email_con, tel_con, seg_con, cargo_con, msg_con, data_con, produto_id_prod, tamanho_empresa_id_tam_emp)
VALUES ('Clara Maria', 'claramaria@email.com', 1187645893, 'Tecnologia', 'Desenvolvedora', 'Preciso de atendimento pra ontem', TO_TIMESTAMP('14/04/2024 13:33:00', 'DD/MM/YYYY HH24:MI:SS'), 1, 1);


-- Inserção de dados na tabela Cadastro
INSERT INTO Cadastro (nome_cad, sobrenome_cad, email_cad, cel_cad, senha_cad, data_cad, genero_id_gen, sobre_emp_id_emp, tamanho_empresa_id_tam_emp) 
VALUES ('Ana', 'Silva', 'ana.silva@email.com', '11987654321', 'senha123', current_timestamp, 1, 1, 1);

INSERT INTO Cadastro (nome_cad, sobrenome_cad, email_cad, cel_cad, senha_cad, data_cad, genero_id_gen, sobre_emp_id_emp, tamanho_empresa_id_tam_emp) 
VALUES ('Bruno', 'Costa', 'bruno.costa@email.com', '21987654321', 'senha321', current_timestamp, 2, 2, 2);

INSERT INTO Cadastro (nome_cad, sobrenome_cad, email_cad, cel_cad, senha_cad, data_cad, genero_id_gen, sobre_emp_id_emp, tamanho_empresa_id_tam_emp) 
VALUES ('Carlos', 'Martins', 'carlos.martins@email.com', '31987654321', 'senha456', current_timestamp, 3, 3, 3);

INSERT INTO Cadastro (nome_cad, sobrenome_cad, email_cad, cel_cad, senha_cad, data_cad, genero_id_gen, sobre_emp_id_emp, tamanho_empresa_id_tam_emp) 
VALUES ('Diana', 'Ferreira', 'diana.ferreira@email.com', '41987654321', 'senha789', current_timestamp, 1, 2, 2);

-- Inserção de dados na tabela Questionario
INSERT INTO Questionario (nome_ques, email_ques, tel_ques, seg_ques, data_ques, nome_emp_ques, conhece_sales_ques, nec_emp_ques, produto_id_prod, ques_produto_implantado)
VALUES ('João Silva', 'joao.silva@example.com', 11987654321, 'Tecnologia', TO_TIMESTAMP('29/04/2024 09:00:00', 'DD/MM/YYYY HH24:MI:SS'), 'TechCorp', 'S', 'Aumentar eficiência operacional', 1, 'Sim');

INSERT INTO Questionario (nome_ques, email_ques, tel_ques, seg_ques, data_ques, nome_emp_ques, conhece_sales_ques, nec_emp_ques, produto_id_prod, ques_produto_implantado)
VALUES ('Maria Oliveira', 'maria.oliveira@example.com', 11223344556, 'Saúde', TO_TIMESTAMP('29/04/2024 10:30:00', 'DD/MM/YYYY HH24:MI:SS'), 'MediCare', 'N', 'Melhorar qualidade do atendimento', 2, 'Não');

INSERT INTO Questionario (nome_ques, email_ques, tel_ques, seg_ques, data_ques, nome_emp_ques, conhece_sales_ques, nec_emp_ques, produto_id_prod, ques_produto_implantado)
VALUES ('Carlos Costa', 'carlos.costa@gmail.com', 11922334455, 'Educação', TO_TIMESTAMP('29/04/2024 11:00:00', 'DD/MM/YYYY HH24:MI:SS'), 'EduPlus', 'S', 'Integrar novas tecnologias educacionais', 3, 'Não');

-- inserção de dados na tabela Feedback
INSERT INTO Quest_Feedback (nome_feedback, email_feedback, avaliacao_feedback, data_feedback, msg_feedback)
VALUES ('João Pimenta', 'joao.pimenta@example.com', 5, TO_TIMESTAMP('29/04/2024 09:00:00', 'DD/MM/YYYY HH24:MI:SS'), 'Ótimo serviço, experiência muito satisfatória.');

INSERT INTO Quest_Feedback (nome_feedback, email_feedback, avaliacao_feedback, data_feedback, msg_feedback)
VALUES ('Maria Oliveira', 'maria.oliveira@example.com', 3, TO_TIMESTAMP('29/04/2024 10:30:00', 'DD/MM/YYYY HH24:MI:SS'), 'Atendimento mediano, poderia melhorar.');

INSERT INTO Quest_Feedback (nome_feedback, email_feedback, avaliacao_feedback, data_feedback, msg_feedback)
VALUES ('Carlos Costa', 'carlos.costa@example.com', 4, TO_TIMESTAMP('29/04/2024 11:00:00', 'DD/MM/YYYY HH24:MI:SS'), 'Serviço bom, mas há espaço para aprimoramento.');

INSERT INTO Quest_Feedback (nome_feedback, email_feedback, avaliacao_feedback, data_feedback, msg_feedback)
VALUES ('Ana Júlia', 'aninhatdb@gmail.com', 2, TO_TIMESTAMP('11/01/2024 11:00:00', 'DD/MM/YYYY HH24:MI:SS'), 'Nossa detestei esse site!');

COMMIT;

-- Verificando as inserções com SELECT
SELECT * FROM Quest_Feedback;
SELECT * FROM Genero;
SELECT * FROM Cadastro;
SELECT * FROM Contato;
SELECT * FROM Produto;
SELECT * FROM Questionario;
SELECT * FROM Tamanho_Empresa;
SELECT * FROM Sobre_Empresa;


-- Exemplos de Atualização de dados (UPDATE)

-- Alteração do e-mail do cadastro de id 2
UPDATE Cadastro
SET email_cad = 'bruninho@gmail.com'
WHERE id_cad = 2;


-- Alteração da coluna do tamanho da empresa do contato do id 1
UPDATE Contato
SET tamanho_empresa_id_tam_emp = 3
WHERE id_con = 1;


-- Alteração do segmento do Questionário de id 1
UPDATE Questionario
SET seg_ques = 'Engenharia'
WHERE id_ques = 1;


-- Exemplos de Remoção de dados (DELETE)
-- Deletar da tabela produto a categoria de Serviço
ALTER TABLE Produto
DROP CONSTRAINT produto_pk CASCADE;

DELETE FROM Produto
WHERE cat_prod = 'Serviço';

ALTER TABLE Produto ADD CONSTRAINT produto_pk PRIMARY KEY(id_prod);


-- Deletar da tabela Quest_Feedback as avaliações menor ou igual a 3
ALTER TABLE Quest_Feedback
DROP CONSTRAINT feedback_pk CASCADE;

DELETE FROM Quest_Feedback
WHERE avaliacao_feedback <= 3;

ALTER TABLE Quest_Feedback ADD CONSTRAINT feedback_pk PRIMARY KEY(id_feedback);


-- Deletar da tabela Questionario os e-mails que contém '@gmail.com'
ALTER TABLE Questionario
DROP CONSTRAINT questionario_pk CASCADE;

DELETE FROM Questionario
WHERE email_ques LIKE '%@gmail.com';

ALTER TABLE Questionario ADD CONSTRAINT questionario_pk PRIMARY KEY(id_ques);

COMMIT;

-- Linguagem de Consulta de Dados (DQL/SQL)

-- Relatório utilizando classificação de dados 
-- Feedbacks Ordenados por Avaliação, do maior para o menor
SELECT nome_feedback as "Nome",
email_feedback as "E-mail", 
avaliacao_feedback as "Avaliação", 
data_feedback as "Data", 
msg_feedback as "Mensagem"
FROM Quest_Feedback
ORDER BY "Avaliação" DESC;


-- Relatório utilizando alguma função do tipo numérica simples
-- Média de Avaliação de Feedbacks
SELECT AVG(avaliacao_feedback) AS "Média de Avaliação"
FROM Quest_Feedback;

-- Total de Contatos por Segmento
SELECT seg_con, COUNT(*) AS total_contatos
FROM Contato
GROUP BY seg_con
ORDER BY total_contatos DESC;


-- Relatório utilizando alguma função de grupo
-- Média de Tamanho de Empresa por Segmento nos Contatos
SELECT seg_con, AVG(te.id_tam_emp) AS media_tamanho_empresa
FROM Contato c
JOIN Tamanho_Empresa te ON c.tamanho_empresa_id_tam_emp = te.id_tam_emp
GROUP BY seg_con
ORDER BY media_tamanho_empresa DESC;



-- Relatório utilizando sub consulta


-- Relatório utilizando junção de tabelas
