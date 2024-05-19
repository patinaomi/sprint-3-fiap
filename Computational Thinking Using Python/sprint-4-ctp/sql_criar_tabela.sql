CREATE TABLE T_Usuario_Py (
    id_user NUMBER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) PRIMARY KEY,
    usuario_user VARCHAR2(50) UNIQUE NOT NULL,
    senha_user VARCHAR2(50) NOT NULL,
    email_user VARCHAR2(50) NOT NULL,
    cargo_user VARCHAR2(50) NOT NULL,
    status_user CHAR(1)
);


CREATE TABLE T_Ticket_Py (
    id_ticket NUMBER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) PRIMARY KEY,
    data_ticket DATE NOT NULL,
    nome_ticket VARCHAR2(100) NOT NULL,
    sobrenome_ticket VARCHAR2(100),
    cargo_ticket VARCHAR2(50),
    email_ticket VARCHAR2(50),
    tel_ticket NUMBER(20),
    empresa_ticket VARCHAR2(50),
    segmento_ticket VARCHAR2(50),
    tamanho_empresa_ticket VARCHAR2(50),
    pergunta_ticket VARCHAR2(255),
    status_ticket CHAR(1)
);

CREATE TABLE T_Leads_Py (
    id_leads NUMBER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) PRIMARY KEY,
    nome_leads VARCHAR2(100) NOT NULL,
    tel_leads VARCHAR2(50),
    email_leads VARCHAR2(255) NOT NULL,
    segmento_leads VARCHAR2(100),
    cargo_leads VARCHAR2(50),
    tamanho_empresa_leads VARCHAR2(100),
    produto_leads VARCHAR2(255),
    regiao_leads VARCHAR2(100)
);