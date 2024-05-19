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

-- Inserções para trabalharmos com o relatório para a Sprint
-- Inserção de dados na tabela Contato
INSERT INTO Contato (nome_con, email_con, tel_con, seg_con, cargo_con, msg_con, data_con, produto_id_prod, tamanho_empresa_id_tam_emp)
VALUES ('Maria Silva', 'maria.silva@example.com', '123456789', 'Tecnologia', 'Gerente de TI', 'Gostaria de mais informações sobre os produtos.', SYSDATE, 1, 2);

INSERT INTO Contato (nome_con, email_con, tel_con, seg_con, cargo_con, msg_con, data_con, produto_id_prod, tamanho_empresa_id_tam_emp)
VALUES ('José Souza', 'jose.souza@example.com', '987654321', 'Vendas', 'Diretor de Vendas', 'Interessado em uma demonstração do produto.', SYSDATE, 2, 3);

INSERT INTO Contato (nome_con, email_con, tel_con, seg_con, cargo_con, msg_con, data_con, produto_id_prod, tamanho_empresa_id_tam_emp)
VALUES ('Ana Costa', 'ana.costa@example.com', '456789123', 'Marketing', 'Especialista em Marketing', 'Preciso de mais detalhes sobre as funcionalidades.', SYSDATE, 3, 1);

INSERT INTO Contato (nome_con, email_con, tel_con, seg_con, cargo_con, msg_con, data_con, produto_id_prod, tamanho_empresa_id_tam_emp)
VALUES ('Carlos Pereira', 'carlos.pereira@example.com', '321654987', 'RH', 'Analista de Recursos Humanos', 'Qual é o preço do produto?', SYSDATE, 4, 4);

INSERT INTO Contato (nome_con, email_con, tel_con, seg_con, cargo_con, msg_con, data_con, produto_id_prod, tamanho_empresa_id_tam_emp)
VALUES ('Fernanda Lima', 'fernanda.lima@example.com', '789123456', 'Finanças', 'Gerente Financeiro', 'Gostaria de saber sobre as opções de pagamento.', SYSDATE, 5, 2);


-- Inserção de dados na tabela Cadastro
INSERT INTO Cadastro (nome_cad, sobrenome_cad, email_cad, cel_cad, senha_cad, data_cad, genero_id_gen, sobre_emp_id_emp)
VALUES ('João', 'Santos', 'joao.santos@example.com', '999888777', 'senha123', SYSDATE, 2, 1);

INSERT INTO Cadastro (nome_cad, sobrenome_cad, email_cad, cel_cad, senha_cad, data_cad, genero_id_gen, sobre_emp_id_emp)
VALUES ('Mariana', 'Oliveira', 'mariana.oliveira@example.com', '888777666', 'senha456', SYSDATE, 1, 2);

INSERT INTO Cadastro (nome_cad, sobrenome_cad, email_cad, cel_cad, senha_cad, data_cad, genero_id_gen, sobre_emp_id_emp)
VALUES ('Carlos', 'Lima', 'carlos.lima@example.com', '777666555', 'senha789', SYSDATE, 2, 3);

INSERT INTO Cadastro (nome_cad, sobrenome_cad, email_cad, cel_cad, senha_cad, data_cad, genero_id_gen, sobre_emp_id_emp)
VALUES ('Fernanda', 'Costa', 'fernanda.costa@example.com', '666555444', 'senha101', SYSDATE, 1, 4);

INSERT INTO Cadastro (nome_cad, sobrenome_cad, email_cad, cel_cad, senha_cad, data_cad, genero_id_gen, sobre_emp_id_emp)
VALUES ('Ricardo', 'Pereira', 'ricardo.pereira@example.com', '555444333', 'senha202', SYSDATE, 3, 1);


-- Inserção de dados na tabela Questionario
INSERT INTO Questionario (nome_ques, email_ques, tel_ques, nome_emp_ques, seg_ques, conhece_sales_ques, nec_emp_ques, prod_implantado_ques, prod_funcionamento_ques, estrategias_mkt_ques, ia_automacoes_ques, des_estrategia_ques, melhorar_comunicacao_ques, ambiente_integrado_ques, aumento_produtividade_ques, melhorar_capacitacao_ques, reducao_custo_ques, aumentar_conversao_ques, potencializar_vendas_ques, acelerar_vendas_ques, riqueza_dados_ques, melhorar_exp_ques, mostrar_diferencial_ques, criar_jornada_ques, mkt_oportunidade_ques, data_ques)
VALUES ('Pedro Almeida', 'pedro.almeida@gmail.com', '111222333', 'Tech Solutions', 'Tecnologia', 'Sim', 'Necessitamos de uma solução robusta para gestão de clientes.', 'Sim', 1, 1, 4, 1, 3, 2, 5, 4, 3, 2, 4, 3, 2, 4, 5, 2, 1, TO_TIMESTAMP('18/01/2024 10:30:00', 'DD/MM/YYYY HH24:MI:SS'));

INSERT INTO Questionario (nome_ques, email_ques, tel_ques, nome_emp_ques, seg_ques, conhece_sales_ques, nec_emp_ques, prod_implantado_ques, prod_funcionamento_ques, estrategias_mkt_ques, ia_automacoes_ques, des_estrategia_ques, melhorar_comunicacao_ques, ambiente_integrado_ques, aumento_produtividade_ques, melhorar_capacitacao_ques, reducao_custo_ques, aumentar_conversao_ques, potencializar_vendas_ques, acelerar_vendas_ques, riqueza_dados_ques, melhorar_exp_ques, mostrar_diferencial_ques, criar_jornada_ques, mkt_oportunidade_ques, data_ques)
VALUES ('Ana Ribeiro', 'ana.ribeiro@gmail.com', '222333444', 'Marketing Experts', 'Marketing', 'Não', 'Precisamos melhorar nossas campanhas de marketing.', 'Não', 1, 2, 4, 3, 1, 3, 3, 3, 2, 4, 2, 4, 3, 4, 3, 2, 5, TO_TIMESTAMP('08/02/2024 10:30:00', 'DD/MM/YYYY HH24:MI:SS'));

INSERT INTO Questionario (nome_ques, email_ques, tel_ques, nome_emp_ques, seg_ques, conhece_sales_ques, nec_emp_ques, prod_implantado_ques, prod_funcionamento_ques, estrategias_mkt_ques, ia_automacoes_ques, des_estrategia_ques, melhorar_comunicacao_ques, ambiente_integrado_ques, aumento_produtividade_ques, melhorar_capacitacao_ques, reducao_custo_ques, aumentar_conversao_ques, potencializar_vendas_ques, acelerar_vendas_ques, riqueza_dados_ques, melhorar_exp_ques, mostrar_diferencial_ques, criar_jornada_ques, mkt_oportunidade_ques, data_ques)
VALUES ('Lucas Santos', 'lucas.santos@example.com', '333444555', 'Financial Advisors', 'Finanças', 'Sim', 'Estamos procurando uma solução para otimizar nossas operações financeiras.', 'Sim', 3, 4, 2, 4, 4, 4, 3, 2, 1, 3, 4, 3, 2, 4, 3, 4, 3, TO_TIMESTAMP('14/03/2024 10:30:00', 'DD/MM/YYYY HH24:MI:SS'));

INSERT INTO Questionario (nome_ques, email_ques, tel_ques, nome_emp_ques, seg_ques, conhece_sales_ques, nec_emp_ques, prod_implantado_ques, prod_funcionamento_ques, estrategias_mkt_ques, ia_automacoes_ques, des_estrategia_ques, melhorar_comunicacao_ques, ambiente_integrado_ques, aumento_produtividade_ques, melhorar_capacitacao_ques, reducao_custo_ques, aumentar_conversao_ques, potencializar_vendas_ques, acelerar_vendas_ques, riqueza_dados_ques, melhorar_exp_ques, mostrar_diferencial_ques, criar_jornada_ques, mkt_oportunidade_ques, data_ques)
VALUES ('Mariana Souza', 'mariana.souza@example.com', '444555666', 'EduTech', 'Educação', 'Não', 'Queremos melhorar a experiência de nossos alunos com novas tecnologias.', 'Não', 0, 3, 4, 2, 4, 3, 4, 4, 4, 3, 3, 2, 3, 2, 3, 1, 1, TO_TIMESTAMP('22/04/2024 10:30:00', 'DD/MM/YYYY HH24:MI:SS'));

INSERT INTO Questionario (nome_ques, email_ques, tel_ques, nome_emp_ques, seg_ques, conhece_sales_ques, nec_emp_ques, prod_implantado_ques, prod_funcionamento_ques, estrategias_mkt_ques, ia_automacoes_ques, des_estrategia_ques, melhorar_comunicacao_ques, ambiente_integrado_ques, aumento_produtividade_ques, melhorar_capacitacao_ques, reducao_custo_ques, aumentar_conversao_ques, potencializar_vendas_ques, acelerar_vendas_ques, riqueza_dados_ques, melhorar_exp_ques, mostrar_diferencial_ques, criar_jornada_ques, mkt_oportunidade_ques, data_ques)
VALUES ('Ricardo Fernandes', 'ricardo.fernandes@example.com', '555666777', 'Health Solutions', 'Saúde', 'Sim', 'Estamos interessados em soluções que possam melhorar nossa gestão de pacientes.', 'Sim', 3, 4, 4, 4, 3, 2, 4, 3, 4, 3, 2, 2, 1, 3, 4, 4, 3, TO_TIMESTAMP('29/05/2024 10:30:00', 'DD/MM/YYYY HH24:MI:SS'));


-- inserção de dados na tabela Feedback
INSERT INTO Quest_Feedback (nome_feedback, email_feedback, avaliacao_feedback, data_feedback, msg_feedback)
VALUES ('João Pimenta', 'joao.pimenta@example.com', 5, TO_TIMESTAMP('21/01/2024 11:01:00', 'Ótimo serviço, experiência muito satisfatória.');

INSERT INTO Quest_Feedback (nome_feedback, email_feedback, avaliacao_feedback, data_feedback, msg_feedback)
VALUES ('Maria Oliveira', 'maria.oliveira@example.com', 3, TO_TIMESTAMP('11/02/2024 18:45:00', 'DD/MM/YYYY HH24:MI:SS'), 'Atendimento mediano, poderia melhorar.');

INSERT INTO Quest_Feedback (nome_feedback, email_feedback, avaliacao_feedback, data_feedback, msg_feedback)
VALUES ('Carlos Costa', 'carlos.costa@example.com', 4, TO_TIMESTAMP('08/04/2024 09:55:00', 'DD/MM/YYYY HH24:MI:SS'), 'Serviço bom, mas há espaço para aprimoramento.');

INSERT INTO Quest_Feedback (nome_feedback, email_feedback, avaliacao_feedback, data_feedback, msg_feedback)
VALUES ('Ana Júlia', 'aninhatdb@gmail.com', 2, TO_TIMESTAMP('03/01/2024 21:53:00', 'DD/MM/YYYY HH24:MI:SS'), 'Nossa detestei esse site!');

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
SET email_cad = 'mariana@gmail.com'
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
-- Primeiro precisamos remover as constraints de FK para poder deletar
-- Remover as FK na tabela Contato
ALTER TABLE Contato DROP CONSTRAINT contato_produto_fk CASCADE;
ALTER TABLE Contato DROP CONSTRAINT contato_tamanho_empresa_fk CASCADE;

-- Remover as FK na tabela Cadastro
ALTER TABLE Cadastro DROP CONSTRAINT cad_genero_fk CASCADE;
ALTER TABLE Cadastro DROP CONSTRAINT cad_sobre_emp_fk CASCADE;

-- Agora vamos deletar os dados que queremos das tabelas
-- Deletar registros da tabela Produto onde cat_prod é 'Serviço'
DELETE FROM Produto WHERE cat_prod = 'Serviço';

-- Deletar registros da tabela Quest_Feedback onde avaliacao_feedback <= 3
DELETE FROM Quest_Feedback WHERE avaliacao_feedback <= 3;

-- Deletar registros da tabela Questionario onde email_ques contém '@gmail.com'
DELETE FROM Questionario WHERE email_ques LIKE '%@gmail.com';

-- Adicionar novamente as constraints de chave estrangeira na tabela Contato
ALTER TABLE Contato ADD CONSTRAINT contato_produto_fk
FOREIGN KEY (produto_id_prod) REFERENCES Produto(id_prod);

ALTER TABLE Contato ADD CONSTRAINT contato_tamanho_empresa_fk
FOREIGN KEY (tamanho_empresa_id_tam_emp) REFERENCES Tamanho_Empresa(id_tam_emp);

-- Adicionar novamente as constraints de chave estrangeira na tabela Cadastro
ALTER TABLE Cadastro ADD CONSTRAINT cad_genero_fk
FOREIGN KEY (genero_id_gen) REFERENCES Genero(id_gen);

ALTER TABLE Cadastro ADD CONSTRAINT cad_sobre_emp_fk
FOREIGN KEY (sobre_emp_id_emp) REFERENCES Sobre_Empresa(id_emp);


COMMIT;
-- Linguagem de Consulta de Dados (DQL/SQL)
-- Antes de trabalhar com os relatórios, inserimos mais dados para mais resultados
INSERT INTO Questionario (nome_ques, email_ques, tel_ques, nome_emp_ques, seg_ques, conhece_sales_ques, nec_emp_ques, prod_implantado_ques, prod_funcionamento_ques, estrategias_mkt_ques, ia_automacoes_ques, des_estrategia_ques, melhorar_comunicacao_ques, ambiente_integrado_ques, aumento_produtividade_ques, melhorar_capacitacao_ques, reducao_custo_ques, aumentar_conversao_ques, potencializar_vendas_ques, acelerar_vendas_ques, riqueza_dados_ques, melhorar_exp_ques, mostrar_diferencial_ques, criar_jornada_ques, mkt_oportunidade_ques, data_ques)
VALUES ('Igor Marcondes', 'iguinho@hotmail.com', '444555666', 'IgTech', 'Automobilismo', 'Não', 'Queremos vender mais e economizar dinheiro.', 'Não', 0, 3, 4, 2, 4, 3, 4, 4, 4, 3, 3, 2, 3, 2, 3, 1, 1, TO_TIMESTAMP('05/05/2024 00:30:00', 'DD/MM/YYYY HH24:MI:SS'));

INSERT INTO Questionario (nome_ques, email_ques, tel_ques, nome_emp_ques, seg_ques, conhece_sales_ques, nec_emp_ques, prod_implantado_ques, prod_funcionamento_ques, estrategias_mkt_ques, ia_automacoes_ques, des_estrategia_ques, melhorar_comunicacao_ques, ambiente_integrado_ques, aumento_produtividade_ques, melhorar_capacitacao_ques, reducao_custo_ques, aumentar_conversao_ques, potencializar_vendas_ques, acelerar_vendas_ques, riqueza_dados_ques, melhorar_exp_ques, mostrar_diferencial_ques, criar_jornada_ques, mkt_oportunidade_ques, data_ques)
VALUES ('Nath Comeron', 'nathzinha@email.com', '555666777', 'Nath Ideias', 'Design', 'Sim', 'Estamos interessados em ideias para atrair mais alunos.', 'Sim', 3, 4, 4, 4, 3, 2, 4, 3, 4, 3, 2, 2, 1, 3, 4, 4, 3, TO_TIMESTAMP('02/03/2024 11:34:00', 'DD/MM/YYYY HH24:MI:SS'));

INSERT INTO Quest_Feedback (nome_feedback, email_feedback, avaliacao_feedback, data_feedback, msg_feedback)
VALUES ('Rita Maria', 'maria.rita@hotmail.com', 5, TO_TIMESTAMP('11/10/2023 10:59:00'), 'Site incrível amei!');

INSERT INTO Quest_Feedback (nome_feedback, email_feedback, avaliacao_feedback, data_feedback, msg_feedback)
VALUES ('Bruno Cassio', 'cassio.bruno@exemplo.com', 2, TO_TIMESTAMP('18/01/2023 10:53:00'), 'Mandei mensagem e até agora não fui atendido');

INSERT INTO Contato (nome_con, email_con, tel_con, seg_con, cargo_con, msg_con, data_con, produto_id_prod, tamanho_empresa_id_tam_emp)
VALUES ('Camila Andrade', 'and_camila@gmail.com', '678435678', 'Moda', 'Estilista', 'Gostaria de entender mais como funciona', SYSDATE, 4, 4);

INSERT INTO Contato (nome_con, email_con, tel_con, seg_con, cargo_con, msg_con, data_con, produto_id_prod, tamanho_empresa_id_tam_emp)
VALUES ('Luís Leonardo', 'leo_luis@hotmail.com', '98732136', 'Indústria', 'Desenvolvedor', 'Como faço para adquirir os serviços?', SYSDATE, 5, 2);

COMMIT;

-- Relatório utilizando classificação de dados 
-- Questionários Classificados por Data de Preenchimento em ordem decrescente
SELECT
    nome_ques as "Nome",
    email_ques as "E-mail",
    nome_emp_ques as "Empresa",
    TO_CHAR(data_ques, 'DD/MM/YYYY HH24:MI:SS') as "Data"
FROM
    Questionario
ORDER BY
    "Data" DESC;

-- Relatório utilizando alguma função do tipo numérica simples
-- Média de Avaliação de Feedbacks
SELECT
    AVG(avaliacao_feedback) AS "Avaliação Média"
FROM
    Quest_Feedback;


-- Relatório utilizando alguma função de grupo
-- Contagem de Cadastros Agrupados por Gênero
SELECT
    g.desc_gen AS "Gênero",
    COUNT(c.id_cad) AS "Número de Cadastros"
FROM
    Cadastro c
JOIN
    Genero g ON c.genero_id_gen = g.id_gen
GROUP BY
    g.desc_gen
ORDER BY
    "Número de Cadastros" DESC;


-- Relatório utilizando sub consulta
-- Contatos com Categoria do Produto
SELECT
    c.nome_con AS "Nome do Contato",
    c.email_con AS "E-mail do Contato",
    c.tel_con AS "Telefone do Contato",
    c.cargo_con AS "Cargo do Contato",
    (SELECT p.cat_prod 
     FROM Produto p 
     WHERE p.id_prod = c.produto_id_prod) AS "Categoria do Produto"
FROM
    Contato c
ORDER BY
    c.nome_con;


-- Relatório utilizando junção de tabelas
-- Cadastros com Informações de Gênero e Empresa
SELECT
    c.nome_cad AS "Nome",
    c.sobrenome_cad AS "Sobrenome",
    c.email_cad AS "E-mail",
    g.desc_gen AS "Gênero",
    s.desc_sobre_emp AS "Sobre"
FROM
    Cadastro c
JOIN
    Genero g ON c.genero_id_gen = g.id_gen
JOIN
    Sobre_Empresa s ON c.sobre_emp_id_emp = s.id_emp
ORDER BY
    c.nome_cad, c.sobrenome_cad;
