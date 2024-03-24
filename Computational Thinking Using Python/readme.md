# Sprint 3 - Challenge Salesforce

## Descrição

Este projeto desenvolvido em Python oferece uma solução de gerenciamento para um sistema de CRM (Salesforce). Possui funcionalidades de login, gestão de usuários e gerenciamento de leads através de uma interface de linha de comando. Além disso, o projeto inclui a funcionalidade de armazenamento de informações em três arquivos JSON separados.

## Funcionalidades

-   **Login de Usuário**: Acesso seguro com sistema de recuperação de senha.
-   **Gestão de Usuários**: Permite a criação, alteração, visualização e desativação de usuários.
-   **Gerenciamento de Leads**: Inclui a adição, listagem, edição e exclusão de leads do site.
    

## Uso do Programa

### Menu Principal

-   **[1] Realizar Login**: Acessa o sistema utilizando as credenciais do usuário.
-   **[2] Esqueci a senha**: Permite recuperar a senha através do e-mail cadastrado.
-   **[0] Sair do programa**: Encerra a aplicação.

### Submenus e Funcionalidades CRUD

Após o login, o usuário terá acesso a funcionalidades específicas baseadas no seu cargo (Admin, Consultor ou Analista), incluindo a gestão de outros usuários e o gerenciamento de leads.

### Funções
-   **Admin**: Responsável pela administração completa dos usuários do sistema. Isso inclui a capacidade de adicionar novos usuários, modificar dados existentes, alterar cargos e até desativar usuários conforme necessário. O Admin possui controle total sobre as permissões de acesso e funções de cada usuário dentro do sistema.
    
-   **Consultor**: O papel do Consultor é focado na interação com potenciais clientes. Eles têm a responsabilidade de monitorar, analisar e responder às mensagens deixadas no formulário de contato do site. Após a interação com o lead e a resolução das dúvidas ou demandas, o Consultor pode alterar o status do ticket para "finalizado", assegurando que todas as consultas sejam devidamente atendidas e arquivadas.
    
-   **Analista**: Especializado na análise de dados dos leads, o Analista desempenha um papel crucial na organização e no entendimento das informações de potenciais clientes. Eles têm a capacidade de cadastrar novos leads, listar todos os leads registrados, editar informações para manter os dados atualizados e deletar registros quando necessário. Este papel é vital para manter a qualidade e a relevância do banco de dados de clientes, facilitando estratégias de marketing e vendas mais eficazes.

## Tratamento de Erros

O sistema inclui tratamento de erros para garantir a entrada correta dos dados, como validação de e-mail e verificação de campos obrigatórios.

## Autores

-   Claudio Bispo - RM553472
-   Patricia Naomi - RM552981
-  Sara Ingrid - RM554021
