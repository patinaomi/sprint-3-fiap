INSERT INTO T_Usuario_Py (usuario_user, senha_user, email_user, cargo_user, status_user) VALUES ('saraingrid', '123456', 'sarai@exemplo.com',
'Consultor', 1);
INSERT INTO T_Usuario_Py (usuario_user, senha_user, email_user, cargo_user, status_user) VALUES ('claudiobispo', 'palhacinho', 'claudiob@exemplo.com', 'Analista', 1);
INSERT INTO T_Usuario_Py (usuario_user, senha_user, email_user, cargo_user, status_user) VALUES ('patinaomi', '654321', 'patrician@exemplo.com',
'Admin', 1);


INSERT INTO T_Ticket_Py (data_ticket, nome_ticket, sobrenome_ticket, cargo_ticket, email_ticket, tel_ticket, empresa_ticket, segmento_ticket, tamanho_empresa_ticket, pergunta_ticket, status_ticket)
VALUES (sysdate, 'João', 'Silva', 'Gerente de Projetos', 'joaosilva@exemplo.com', 1123456789, 'ExemploCorp', 'Tecnologia', 'Pequena', 'Como posso integrar o CRM ao meu sistema atual?', 'F');

INSERT INTO T_Ticket_Py (data_ticket, nome_ticket, sobrenome_ticket, cargo_ticket, email_ticket, tel_ticket, empresa_ticket, segmento_ticket, tamanho_empresa_ticket, pergunta_ticket, status_ticket)
VALUES (sysdate, 'Maria', 'Pereira', 'CEO', 'mariap@exemploempresa.com', 11987654321, 'ExemploEmpresa', 'Financeiro', 'Média', 'Vocês oferecem treinamento para a equipe?', 'F');

INSERT INTO T_Ticket_Py (data_ticket, nome_ticket, sobrenome_ticket, cargo_ticket, email_ticket, tel_ticket, empresa_ticket, segmento_ticket, tamanho_empresa_ticket, pergunta_ticket, status_ticket)
VALUES (sysdate, 'Carlos', 'Andrade', 'Diretor de Marketing', 'carlosa@empresaexemplo.com', 21987654321, 'Marketing Solutions', 'Publicidade', 'Grande', 'Existem integrações de CRM com plataformas de automação de marketing?', 'A');

INSERT INTO T_Leads_Py (nome_leads, tel_leads, email_leads, segmento_leads, cargo_leads, tamanho_empresa_leads, produto_leads, regiao_leads)
VALUES ('Ana Silva', 11987654321, 'ana.silva@empresa.com', 'Tecnologia', 'Gerente de Projetos', 'Média', 'IA', 'Sudeste');

INSERT INTO T_Leads_Py (nome_leads, tel_leads, email_leads, segmento_leads, cargo_leads, tamanho_empresa_leads, produto_leads, regiao_leads)
VALUES ('Carlos Souza', 21987654321, 'carlos.souza@empresa.com', 'Financeiro', 'Analista Financeiro', 'Grande', 'Marketing', 'Nordeste');

INSERT INTO T_Leads_Py (nome_leads, tel_leads, email_leads, segmento_leads, cargo_leads, tamanho_empresa_leads, produto_leads, regiao_leads)
VALUES ('Julia Martins', 31987654321, 'julia.martins@empresa.com', 'Saúde', 'Consultora de Saúde', 'Pequena', 'Tableau', 'Centro-Oeste');

INSERT INTO T_Leads_Py (nome_leads, tel_leads, email_leads, segmento_leads, cargo_leads, tamanho_empresa_leads, produto_leads, regiao_leads)
VALUES ('Pedro Alvares', 41987654321, 'pedro.alvares@empresa.com', 'Educação', 'Coordenador Pedagógico', 'Média', 'Commerce', 'Sul');

INSERT INTO T_Leads_Py (nome_leads, tel_leads, email_leads, segmento_leads, cargo_leads, tamanho_empresa_leads, produto_leads, regiao_leads)
VALUES ('Fernanda Rocha', 51987654321, 'fernanda.rocha@empresa.com', 'Varejo', 'Gerente de Vendas', 'Grande', 'Data Cloud', 'Norte');