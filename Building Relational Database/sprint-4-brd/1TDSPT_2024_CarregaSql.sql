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
    tempo_ent_visit TIMESTAMP NOT NULL,
    tempo_sai_visit TIMESTAMP NOT NULL
);
ALTER TABLE Visitante ADD CONSTRAINT visitante_pk PRIMARY KEY(id_visit);

-- Contato (Formulário de Contato)
CREATE TABLE Contato (
    id_con INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    nome_con VARCHAR2(60) NOT NULL,
    email_con VARCHAR2(70) NOT NULL,
    tel_con NUMBER(20),
    seg_con VARCHAR2(70),
    cargo_con VARCHAR2(80),
    msg_con VARCHAR2(600),
    data_con TIMESTAMP NOT NULL,
    produto_id_prod INTEGER NOT NULL,
    visitante_id_visit INTEGER NOT NULL,
    estado_id_est INTEGER NOT NULL,
    tamanho_empresa_id_tam_emp INTEGER NOT NULL
);
ALTER TABLE Contato ADD CONSTRAINT contato_pk PRIMARY KEY(id_con);

-- Login (Cadastre-se)
CREATE TABLE Login (
    id_login INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    nome_login VARCHAR2(60) NOT NULL,
    sobrenome_login VARCHAR2(60) NOT NULL,
    email_login VARCHAR2(60) NOT NULL,
    cel_login VARCHAR2(60) NOT NULL,
    funcao_login VARCHAR2(60) NOT NULL,
    senha_login VARCHAR2(60) NOT NULL,
    data_login TIMESTAMP NOT NULL,
    estado_id_est INTEGER NOT NULL,
    genero_id_gen INTEGER NOT NULL,
    visitante_id_visit INTEGER NOT NULL,
    tamanho_empresa_id_tam_emp INTEGER NOT NULL
);
ALTER TABLE Login ADD CONSTRAINT login_pk PRIMARY KEY(id_login);

-- Questionario (Formulário de descoberta)
CREATE TABLE Questionario (
    id_ques INTEGER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) NOT NULL,
    nome_ques VARCHAR2(80),
    email_ques VARCHAR2(60) NOT NULL,
    tel_ques NUMBER(20),
    seg_ques VARCHAR2(80),
    data_ques TIMESTAMP NOT NULL,
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
    data_feedback TIMESTAMP NOT NULL,
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


-- INSERTS PARA A SPRINT

-- Inserção de dados na tabela Visitante
INSERT INTO Visitante (tempo_ent_visit, tempo_sai_visit)
VALUES (TO_TIMESTAMP('29/02/2024 08:00:00', 'DD/MM/YYYY HH24:MI:SS'), TO_TIMESTAMP('29/02/2024 08:03:34', 'DD/MM/YYYY HH24:MI:SS'));

INSERT INTO Visitante (tempo_ent_visit, tempo_sai_visit)
VALUES (TO_TIMESTAMP('15/01/2024 09:00:00', 'DD/MM/YYYY HH24:MI:SS'), TO_TIMESTAMP('15/01/2024 09:01:13', 'DD/MM/YYYY HH24:MI:SS'));

INSERT INTO Visitante (tempo_ent_visit, tempo_sai_visit)
VALUES (TO_TIMESTAMP('16/10/2023 10:00:00', 'DD/MM/YYYY HH24:MI:SS'), TO_TIMESTAMP('16/10/2023 10:04:20', 'DD/MM/YYYY HH24:MI:SS'));

-- Inserção de dados na tabela Contato
INSERT INTO Contato (nome_con, email_con, tel_con, seg_con, cargo_con, data_con, produto_id_prod, visitante_id_visit, estado_id_est, tamanho_empresa_id_tam_emp)
VALUES ('João Silva', 'joao.silva@example.com', 11987654321, 'Tecnologia', 'Gerente de TI', TO_TIMESTAMP('11/04/2024 09:00:00', 'DD/MM/YYYY HH24:MI:SS'), 1, 1, 1, 1);

INSERT INTO Contato (nome_con, email_con, tel_con, seg_con, cargo_con, data_con, produto_id_prod, visitante_id_visit, estado_id_est, tamanho_empresa_id_tam_emp)
VALUES ('Maria Oliveira', 'maria.oliveira@example.com', 11223344556, 'Saúde', 'Diretora Médica', TO_TIMESTAMP('08/02/2024 10:30:00', 'DD/MM/YYYY HH24:MI:SS'), 2, 2, 2, 2);

INSERT INTO Contato (nome_con, email_con, tel_con, seg_con, cargo_con, data_con, produto_id_prod, visitante_id_visit, estado_id_est, tamanho_empresa_id_tam_emp)
VALUES ('Carlos Costa', 'carlos.costa@example.com', 11922334455, 'Educação', 'Professor', TO_TIMESTAMP('17/01/2024 11:00:00', 'DD/MM/YYYY HH24:MI:SS'), 3, 3, 3, 3);

-- Inserção de dados na tabela Login
INSERT INTO Login (nome_login, sobrenome_login, email_login, cel_login, funcao_login, senha_login, data_login, estado_id_est, genero_id_gen, visitante_id_visit, tamanho_empresa_id_tam_emp)
VALUES ('João', 'Silva', 'joao.silva@example.com', '11987654321', 'Gerente de TI', 'senha123', TO_TIMESTAMP('29/04/2024 09:00:00', 'DD/MM/YYYY HH24:MI:SS'), 1, 1, 1, 1);

INSERT INTO Login (nome_login, sobrenome_login, email_login, cel_login, funcao_login, senha_login, data_login, estado_id_est, genero_id_gen, visitante_id_visit, tamanho_empresa_id_tam_emp)
VALUES ('Maria', 'Oliveira', 'maria.oliveira@example.com', '11223344556', 'Diretora Médica', 'senha456', TO_TIMESTAMP('29/04/2024 10:30:00', 'DD/MM/YYYY HH24:MI:SS'), 2, 2, 2, 2);

INSERT INTO Login (nome_login, sobrenome_login, email_login, cel_login, funcao_login, senha_login, data_login, estado_id_est, genero_id_gen, visitante_id_visit, tamanho_empresa_id_tam_emp)
VALUES ('Carlos', 'Costa', 'carlos.costa@example.com', '11922334455', 'Professor', 'senha789', TO_TIMESTAMP('29/04/2024 11:00:00', 'DD/MM/YYYY HH24:MI:SS'), 3, 3, 3, 3);

-- Inserção de dados na tabela Questionario
INSERT INTO Questionario (nome_ques, email_ques, tel_ques, seg_ques, data_ques, nome_emp_ques, conhece_sales_ques, nec_emp_ques, produto_id_prod, visitante_id_visit)
VALUES ('João Silva', 'joao.silva@example.com', 11987654321, 'Tecnologia', TO_TIMESTAMP('29/04/2024 09:00:00', 'DD/MM/YYYY HH24:MI:SS'), 'TechCorp', 'S', 'Aumentar eficiência operacional', 1, 1);

INSERT INTO Questionario (nome_ques, email_ques, tel_ques, seg_ques, data_ques, nome_emp_ques, conhece_sales_ques, nec_emp_ques, produto_id_prod, visitante_id_visit)
VALUES ('Maria Oliveira', 'maria.oliveira@example.com', 11223344556, 'Saúde', TO_TIMESTAMP('29/04/2024 10:30:00', 'DD/MM/YYYY HH24:MI:SS'), 'MediCare', 'N', 'Melhorar qualidade do atendimento', 2, 2);

INSERT INTO Questionario (nome_ques, email_ques, tel_ques, seg_ques, data_ques, nome_emp_ques, conhece_sales_ques, nec_emp_ques, produto_id_prod, visitante_id_visit)
VALUES ('Carlos Costa', 'carlos.costa@example.com', 11922334455, 'Educação', TO_TIMESTAMP('29/04/2024 11:00:00', 'DD/MM/YYYY HH24:MI:SS'), 'EduPlus', 'S', 'Integrar novas tecnologias educacionais', 3, 3);

-- inserção de dados na tabela Feedback
INSERT INTO Quest_Feedback (email_feedback, avaliacao_feedback, data_feedback, msg_feedback, visitante_id_visit)
VALUES ('joao.silva@example.com', 5, TO_TIMESTAMP('29/04/2024 09:00:00', 'DD/MM/YYYY HH24:MI:SS'), 'Ótimo serviço, experiência muito satisfatória.', 1);

INSERT INTO Quest_Feedback (email_feedback, avaliacao_feedback, data_feedback, msg_feedback, visitante_id_visit)
VALUES ('maria.oliveira@example.com', 3, TO_TIMESTAMP('29/04/2024 10:30:00', 'DD/MM/YYYY HH24:MI:SS'), 'Atendimento mediano, poderia melhorar.', 2);

INSERT INTO Quest_Feedback (email_feedback, avaliacao_feedback, data_feedback, msg_feedback, visitante_id_visit)
VALUES ('carlos.costa@example.com', 4, TO_TIMESTAMP('29/04/2024 11:00:00', 'DD/MM/YYYY HH24:MI:SS'), 'Serviço bom, mas há espaço para aprimoramento.', 3);

COMMIT;

-- Exemplos de Atualização de dados (UPDATE)
UPDATE Login
SET email_login = 'maria.oliveira@gmail.com'
WHERE id_login = 2;

UPDATE Contato
SET tamanho_empresa_id_tam_emp = 3
WHERE id_con = 1;

UPDATE Questionario
SET seg_ques = 'Engenharia'
WHERE id_ques = 1;

-- Exemplos de Remoção de dados (DELETE)
-- Para ver o nome das constraints
SELECT CONSTRAINT_NAME, CONSTRAINT_TYPE, R_CONSTRAINT_NAME, STATUS
FROM ALL_CONSTRAINTS
WHERE TABLE_NAME = 'Quest_Feedback';

-- Exemplo 1
ALTER TABLE Produto
DROP CONSTRAINT produto_pk CASCADE;

DELETE FROM Produto
WHERE cat_prod = 'Serviço';

ALTER TABLE Produto ADD CONSTRAINT produto_pk PRIMARY KEY(id_prod);


-- Exemplo 2
ALTER TABLE Quest_Feedback
DROP CONSTRAINT feedback_pk CASCADE;

DELETE FROM Quest_Feedback
WHERE avaliacao_feedback <= 3;

ALTER TABLE Quest_Feedback ADD CONSTRAINT feedback_pk PRIMARY KEY(id_feedback);

-- Exemplo 3
ALTER TABLE Questionario
DROP CONSTRAINT questionario_pk CASCADE;

DELETE FROM Questionario
WHERE email_ques LIKE '%@example.com';

ALTER TABLE Questionario ADD CONSTRAINT questionario_pk PRIMARY KEY(id_ques);

COMMIT;

-- Linguagem de Consulta de Dados (DQL/SQL)

-- Relatório utilizando classificação de dados 
-- Categoria de Produtos
SELECT id_prod AS "Id",
nome_prod AS "Produto",
desc_prod AS "Descrição",
cat_prod AS "Categoria"
FROM Produto
ORDER BY "Categoria" ASC;

-- Relatório utilizando alguma função do tipo numérica simples
-- Soma do Total de Contatos por Estado
SELECT
  e.sigla_est AS "Estado",
  COUNT(c.id_con) AS "Total de Contatos"
FROM
  Contato c
JOIN Estado e ON c.estado_id_est = e.id_est
GROUP BY
  e.sigla_est;


-- Relatório utilizando alguma função de grupo
-- Tempo médio de permanência no site
SELECT 
  COUNT(id_visit) AS "Total de Visitantes",
  ROUND(AVG((EXTRACT(HOUR FROM (tempo_sai_visit - tempo_ent_visit)) * 60 +
             EXTRACT(MINUTE FROM (tempo_sai_visit - tempo_ent_visit)) +
             EXTRACT(SECOND FROM (tempo_sai_visit - tempo_ent_visit)) / 60)), 2) AS "Tempo médio de Permanência em Min"
FROM Visitante;



-- Relatório utilizando sub consulta
-- Visitantes que estão na área de TI e realizaram contatos
SELECT 
  v.id_visit as "Id", 
  c.nome_con AS "Nome",
  c.cargo_con AS "Cargo",
  TO_CHAR(c.data_con, 'DD/MM/YYYY HH24:MI:SS') AS "Data do Contato"
FROM Visitante v
JOIN Contato c ON v.id_visit = c.visitante_id_visit
WHERE v.id_visit IN (
  SELECT visitante_id_visit FROM Contato
  WHERE cargo_con LIKE '%TI%' 
);

-- Relatório utilizando junção de tabelas
--Junção entre as tabelas Visitante Login e Estado
SELECT 
  v.id_visit "Id",
  l.nome_login || ' ' || l.sobrenome_login AS "Nome Completo",
  l.email_login AS "Email",
  l.funcao_login AS "Função",
  e.sigla_est AS "Estado"
FROM 
  Visitante v
JOIN 
  Login l ON v.id_visit = l.visitante_id_visit
JOIN 
  Estado e ON l.estado_id_est = e.id_est;
