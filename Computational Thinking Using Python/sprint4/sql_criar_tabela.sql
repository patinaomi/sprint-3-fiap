CREATE TABLE T_Usuario_Py (
    id_user NUMBER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) PRIMARY KEY,
    usuario VARCHAR2(50) NOT NULL,
    senha VARCHAR2(50) NOT NULL,
    email VARCHAR2(50) UNIQUE NOT NULL,
    cargo VARCHAR2(50) NOT NULL,
    status CHAR(1) DEFAULT 'A' CHECK (Status IN ('A', 'I')) -- 'A' para ativo, 'I' para inativo
);


CREATE TABLE T_Ticket_Py (
    id_ticket NUMBER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) PRIMARY KEY,
    data DATE NOT NULL,
    nome VARCHAR2(100) NOT NULL,
    sobrenome VARCHAR2(100),
    cargo VARCHAR2(50),
    email VARCHAR2(50),
    telefone NUMBER(20),
    empresa VARCHAR2(50),
    segmento VARCHAR2(50),
    tamanho_empresa VARCHAR2(50),
    pergunta VARCHAR2(255),
    status CHAR(1) DEFAULT 'A' CHECK (Status IN ('A', 'F')) -- 'A' para aberto, 'F' para fechado
);

CREATE TABLE T_Leads_Py (
    id_leads NUMBER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) PRIMARY KEY,
    nome VARCHAR2(100) NOT NULL,
    telefone VARCHAR2(50),
    email VARCHAR2(255) UNIQUE NOT NULL,
    segmento VARCHAR2(100),
    cargo VARCHAR2(50),
    tamanho_empresa VARCHAR2(100),
    produto VARCHAR2(255),
    regiao VARCHAR2(100)
);
