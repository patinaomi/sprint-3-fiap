import json
import oracledb
import re
from datetime import datetime


def configurar_credenciais():
    print("--- Configuração das credenciais do banco de dados Oracle ---")
    usuario = input("Digite o nome de usuário: ")
    senha = input("Digite a senha: ")

    dados_secret = {
        'user': usuario,
        'password': senha,
        'dsn': 'oracle.fiap.com.br:1521/orcl'
    }

    escrever_dados('secret.json', dados_secret)
    print("Credenciais salvas!")

    return dados_secret


# Criação das tabelas
def setup_inicial():
    # Configura as credenciais do banco
    secret = configurar_credenciais()

    # Verifica se as credenciais foram configuradas corretamente
    if not secret:
        print("Falha ao configurar as credenciais.")
        return

    try:
        # Primeiro dar drop caso elas existam
        if not operacao_db_arquivo('sql_drop_tabela.sql', secret):
            print("Falha ao deletar as tabelas já existentes.")
            return

        # Agora cria as tabelas
        if not operacao_db_arquivo('sql_criar_tabela.sql', secret):
            print("Falha ao criar tabelas.")
            return

        # E então, colocamos os dados nas tabelas!
        if not operacao_db_arquivo('sql_carregar_dados.sql', secret):
            print("Falha ao inserir dados iniciais nas tabelas.")
            return

        print("Setup inicial concluído com sucesso.")

    except Exception as e:
        print(f"Erro durante o setup inicial: {e}")


# Funções para trabalhar com JSON
def carregar_dados(dados):
    try:
        with open(dados, 'r') as arquivo:
            dados = json.load(arquivo)
            return dados
    except FileNotFoundError:
        print(f'O arquivo {dados} não foi encontrado.')
        return
    except Exception as e:
        print(f'Erro: {e}')
        return


def escrever_dados(nome_arquivo, dados):
    try:
        with open(nome_arquivo, 'w', encoding='utf-8') as arquivo:
            # pra acentuação etc, ficar correta
            json.dump(dados, arquivo, indent=2, ensure_ascii=False)
    except FileNotFoundError:
        print('Não foi encontrado o arquivo.')
        return
    except Exception as e:
        print(f'Erro: {e}')
        return


# Validações dos dados
def validar_email(email):
    # o e-mail deve conter pelo menos um '@' e um '.'
    regex_email = r'^[\w\.-]+@[\w\.-]+\.\w+'

    if re.match(regex_email, email):
        return True
    else:
        return False


def validar_telefone(telefone):
    # Remove caracteres não numéricos da string telefone usando a função filter e str.isdigit
    # e depois o join junta os caracteres restantes de volta em uma string única.
    telefone_limpo = ''.join(filter(str.isdigit, telefone))

    return telefone_limpo


def verifica_usuario_repetido(usuario):
    sql = """
    SELECT COUNT(*) FROM t_usuario_py
    WHERE usuario_user = :usuario
    """
    params = {'usuario': usuario}
    result = consulta_db(sql, secret, params)
    # Vai retornar True se o resultado é maior que 0, ou seja, já tem um usuário igual no banco
    if result and result[0][0] > 0:  # result[0][0] é o valor de COUNT(*), é o primeiro elemento da primeira tupla.
        return True
    return False


def verifica_email_repetido(email):
    sql = """
    SELECT COUNT(*) FROM t_usuario_py
    WHERE email_user = :email
    """
    params = {'email': email}
    result = consulta_db(sql, secret, params)
    if result and result[0][0] > 0:
        return True
    return False


def verifica_input(msg):
    valor = input(msg).strip()  # o strip remove espaços em branco do começo e fim
    while not valor:
        print("Este campo não pode ficar vazio. Por favor, insira um valor.")
        valor = input(msg).strip()
    return valor


# Operações de banco de dados
def operacao_db(comando, secret, params=None, commit=True):
    try:
        with oracledb.connect(user=secret['user'],
                              password=secret['password'],
                              dsn=secret['dsn']) as connection:
            with connection.cursor() as cursor:
                cursor.execute(comando, params)
                if commit:
                    connection.commit()

                    # caso seja update ou delete, vai contar a qtd de linhas alteradas
                    if comando.strip().lower().startswith("update") or comando.strip().lower().startswith("delete"):
                        return cursor.rowcount > 0
                    else:
                        return True

    except oracledb.DatabaseError as e:
        print(f'Erro no banco de dados: {e}')
        return None
    except Exception as e:
        print(f'Erro: {e}')
        return None


def consulta_db(comando, secret, params=None):
    try:
        with oracledb.connect(user=secret['user'],
                              password=secret['password'],
                              dsn=secret['dsn']) as connection:
            with connection.cursor() as cursor:
                cursor.execute(comando, params)  # Passa os parâmetros para o comando SQL
                return cursor.fetchall()
    except oracledb.DatabaseError as e:
        print(f'Erro no banco de dados: {e}')
        return None  # Retorna None em caso de erro
    except Exception as e:
        print(f'Erro: {e}')
        return None


def operacao_db_arquivo(arquivo, secret, commit=True):
    try:
        with oracledb.connect(user=secret['user'],
                              password=secret['password'],
                              dsn=secret['dsn']) as connection:
            with connection.cursor() as cursor:
                with open(arquivo, 'r') as file:
                    sql_script = file.read()
                # Separar os comandos SQL por ponto e vírgula pra executar um por um
                sql_commands = sql_script.split(';')
                for command in sql_commands:
                    if command.strip():  # Verifica se o comando não está vazio
                        cursor.execute(command)
                if commit:
                    connection.commit()
                return True  # Retorna True se todos os comandos forem executados com sucesso
    except oracledb.DatabaseError as e:
        print(f'Erro no banco de dados: {e}')
        return False
    except Exception as e:
        print(f'Erro: {e}')
        return False


def menu_principal():
    while True:
        print('\n>>>>> MENU PRINCIPAL <<<<<')
        print(' [1] Realizar Login')
        print(' [2] Esqueci a senha')
        print(' [0] Sair do programa')
        print('--------------------------')

        op = input('Digite uma opção: ')
        if op.isdigit() and int(op) in range(2):  # ver com o professor, se é assim que o príncipe Wagner quer
            if op == '1':
                realizar_login()
            if op == '2':
                esqueci_a_senha()
            elif op == 0:
                print('Saindo do programa...')
                break
        else:
            print('Opção inválida, digite novamente.')


def realizar_login():
    print('\n>>>>> Realizar o Login <<<<<')
    usuario = input('Digite o login: ')
    senha = input('Digite a senha: ')

    # Comando SQL para verificar o usuário e senha
    sql = """
    SELECT usuario_user, senha_user, cargo_user, status_user
    FROM t_usuario_py
    WHERE usuario_user = :usr
    """

    params = {'usr': usuario}
    result = consulta_db(sql, secret, params)

    if result:
        user_data = result[0]
        if user_data[1] == senha:  # Vê se a senha está correta
            if user_data[3] == '1':  # Checa se o status é '1' (Ativo)
                print('Login efetuado com sucesso!')
                # Verifica o cargo e redireciona para o menu correspondente
                if user_data[2] == 'Admin':
                    menu_admin()
                elif user_data[2] == 'Consultor':
                    menu_consultor()
                else:
                    menu_analista()
            else:
                print('Usuário desativado. Não foi possível efetuar o login.')
        else:
            print('Senha incorreta. Não foi possível efetuar o login.')
    else:
        print('Usuário não encontrado.')

    return usuario


def verifica_senha(msg):
    senha = input(msg).strip()
    regex = re.compile(r'^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$')

    while True:
        if not senha:
            print("Este campo não pode ficar vazio. Por favor, insira uma senha.")
        elif len(senha) < 6:
            print("A senha deve ter pelo menos 6 dígitos.")
        elif not regex.match(senha):
            print("A senha deve conter pelo menos um número, uma letra maiúscula e um caractere especial.")
        else:
            return senha
        senha = input(msg).strip()


def atualizar_senha(email, nova_senha, secret):
    sql_update = """
    UPDATE t_usuario_py
    SET senha_user = :new_pwd
    WHERE email_user = :eml
    """
    try:
        with oracledb.connect(user=secret['user'],
                              password=secret['password'],
                              dsn=secret['dsn']) as connection:
            with connection.cursor() as cursor:
                cursor.execute(sql_update, {'new_pwd': nova_senha, 'eml': email})
                connection.commit()
                if cursor.rowcount > 0:  # Pra ver se alguma linha foi alterada
                    return True
                else:
                    print('Nenhuma alteração foi feita.')
                    return False
    except oracledb.DatabaseError as e:
        print(f'Erro no banco de dados: {e}')
        return False
    except Exception as e:
        print(f'Erro geral: {e}')
        return False


def esqueci_a_senha():
    print('\n>>>>> Esqueci a Senha <<<<<')
    email = input('Digite o e-mail associado ao seu login: ')

    # Comando SQL para buscar o usuário pelo e-mail
    sql_select = """
    SELECT usuario_user, senha_user, email_user
    FROM t_usuario_py
    WHERE email_user = :eml
    """

    result = consulta_db(sql_select, secret, params={'eml': email})

    if result:
        for user_data in result:
            nova_senha = verifica_senha('Digite a nova senha: ')
            if nova_senha == user_data[1]:
                print('A nova senha não pode ser igual à senha atual, tente novamente.')
                return

            if atualizar_senha(email, nova_senha, secret):
                print('Senha alterada com sucesso!')
                return
    else:
        print('E-mail não encontrado. Não foi possível alterar a senha.')


def menu_admin():
    while True:
        print('\n====== Menu de Administrador =====')
        print(' [1] Criar Novo Usuário')
        print(' [2] Alterar Dados')
        print(' [3] Listar Usuários')
        print(' [4] Desativar Usuário')
        print(' [5] Logout e Voltar ao Menu Principal')
        print(' [0] Sair do Programa')
        print('===============================')

        op = input('Digite uma opção: ')

        if op.isdigit() and int(op) in range(6):
            if op == '1':
                criar_usuario()
            elif op == '2':
                alterar_usuario()
            elif op == '3':
                listar_usuario()
            elif op == '4':
                desativar_usuario()
            elif op == '5':
                print("Logout realizado com sucesso.")
                break
            elif op == 0:
                print("Saindo do programa...")
                exit()
        else:
            print('Opção inválida, digite novamente.\n')


def criar_usuario():
    print('\n>>>>> Novo Cadastro <<<<<')

    while True:
        novo_user = verifica_input('Digite o usuário: ')
        if verifica_usuario_repetido(novo_user):
            print('Nome de usuário já registrado. Tente um diferente.')
        else:
            break

    senha = verifica_senha('Digite a senha: ')
    email = ""

    while True:
        email = verifica_input('Digite seu e-mail: ')
        if validar_email(email) and not verifica_email_repetido(email):
            break
        elif not validar_email(email):
            print('Email inválido, digite novamente.')
        else:
            print('E-mail já registrado. Tente novamente.')
            return

    print('\n[1] Consultor\n[2] Analista\n[3] Admin')
    cargo_dict = {'1': 'Consultor', '2': 'Analista', '3': 'Admin'}
    cargo = ""

    while True:
        op_cargo = verifica_input('Digite o cargo: ')
        if op_cargo in cargo_dict:
            cargo = cargo_dict[op_cargo]
            break
        else:
            print('Opção inválida, escolha 1, 2 ou 3.')

    status = '1'  # '1' para ativo, '0' para inativo, já vou deixar o novo usuário como ativo

    # SQL Pra inserir um novo usuário na tabela
    sql_insert = """
    INSERT INTO t_usuario_py (usuario_user, senha_user, email_user, cargo_user, status_user)
    VALUES (:usuario, :senha, :email, :cargo, :status)
    """

    params = {
        'usuario': novo_user,
        'senha': senha,
        'email': email,
        'cargo': cargo,
        'status': status
    }

    result = operacao_db(sql_insert, secret, params, commit=True)
    if result:
        print('Novo usuário cadastrado com sucesso!')
    else:
        print('Falha ao cadastrar novo usuário.')


def alterar_usuario():
    print('\n>>>>> Alterar Dados do Usuário <<<<<')
    usuario = input('Digite o usuário que deseja alterar: ')

    # Primeiro, ver se o usuário existe
    sql_verifica = "SELECT usuario_user, email_user, cargo_user FROM t_usuario_py WHERE usuario_user = :usuario"
    result = consulta_db(sql_verifica, secret, params={'usuario': usuario})
    if not result:
        print('Usuário não encontrado.')
        return

    op = input(' Digite o dado que deseja alterar:'
               '\n [1] Usuário'
               '\n [2] E-mail'
               '\n [3] Cargo'
               '\n [0] Cancelar'
               '\n Opção: ')

    if op == '1':
        novo_nome = verifica_input('\nDigite o novo usuário: ')
        if verifica_usuario_repetido(novo_nome):
            print('Nome de usuário já existe. Tente outro nome.')
            return
        sql_update = "UPDATE t_usuario_py SET usuario_user = :novo WHERE usuario_user = :antigo"
        operacao_db(sql_update, secret, params={'novo': novo_nome, 'antigo': usuario}, commit=True)

    elif op == '2':
        while True:
            novo_email = verifica_input('\nDigite o novo e-mail: ')
            if validar_email(novo_email):
                if verifica_email_repetido(novo_email):
                    print('E-mail já registrado. Tente outro e-mail.')
                else:
                    break
            else:
                print('Email inválido, digite novamente.')

        sql_update = "UPDATE t_usuario_py SET email_user = :email WHERE usuario_user = :usuario"
        operacao_db(sql_update, secret, params={'email': novo_email, 'usuario': usuario}, commit=True)

    elif op == '3':
        print('\n[1] Consultor\n[2] Analista\n[3] Admin')
        cargo_dict = {'1': 'Consultor', '2': 'Analista', '3': 'Admin'}
        op_cargo = verifica_input('Selecione o novo cargo: ')
        if op_cargo in cargo_dict:
            sql_update = "UPDATE t_usuario_py SET cargo_user = :cargo WHERE usuario_user = :usuario"
            operacao_db(sql_update, secret, params={'cargo': cargo_dict[op_cargo], 'usuario': usuario}, commit=True)
        else:
            print('Opção inválida.')
            return

    elif op == '0':
        print('Cancelando...')
        return
    else:
        print('Opção inválida.')
        return

    print('Dados alterados com sucesso!')


def listar_usuario():
    print('\n>>>>> Listar Usuários <<<<<')
    sql = "SELECT usuario_user, email_user, cargo_user, status_user FROM t_usuario_py"
    usuarios = consulta_db(sql, secret)

    if not usuarios:
        print('Não há usuários cadastrados.')
        return

    for usuario in usuarios:
        print(f"Usuário: {usuario[0]}")
        print(f"E-mail: {usuario[1]}")
        print(f"Cargo: {usuario[2]}")
        print(f"Status: {'Ativo' if usuario[3] == '1' else 'Desativado'}")
        print('----------------------------')


def desativar_usuario():
    print('\n>>>>> Desativar Usuários <<<<<')
    user_del = verifica_input('Digite o usuário que deseja desativar: ')

    # Primeiro, verifica se o usuário existe e o status atual
    sql_check = "SELECT status_user FROM t_usuario_py WHERE usuario_user = :usuario"
    result = consulta_db(sql_check, secret, params={'usuario': user_del})
    if not result:
        print('Usuário não encontrado.')
        return

    # Verificar se já está desativado
    if result[0][0] == '0':
        print(f'Usuário {user_del} já está desativado.')
        return

    # Se não, desativar o usuário
    sql_update = "UPDATE t_usuario_py SET status_user = '0' WHERE usuario_user = :usuario"
    if operacao_db(sql_update, secret, params={'usuario': user_del}, commit=True):
        print(f'Usuário {user_del} desativado com sucesso.')
    else:
        print('Falha ao desativar o usuário.')


# Menu do Consultor
def menu_consultor():
    while True:
        print('\n====== Menu de Consultor =====')
        print(' [1] Consultar Tickets')
        print(' [2] Finalizar Ticket')
        print(' [3] Menu Principal')
        print(' [0] Sair do Programa')
        print('===============================')

        op = input(' Digite uma opção: ')
        if op.isdigit() and int(op) in range(4):
            if op == '1':
                consultar_ticket()
            elif op == '2':
                alterar_ticket()
            elif op == '3':
                break
            elif op == 0:
                exit()
        else:
            print(' Opção inválida, digite novamente.')


def consultar_ticket():
    print('\n>>>>> Consulta Ticket <<<<<')
    status_filtro = input("Deseja filtrar tickets por status?\n"
                          "\n[A] Aberto"
                          "\n[F] Fechado"
                          "\nou qualquer tecla para todos: ")

    if status_filtro.upper() == 'A':
        sql = "SELECT * FROM t_ticket_py WHERE status_ticket = 'A'"
        print("Selecionando tickets Abertos...")
    elif status_filtro.lower() == 'F':
        sql = "SELECT * FROM t_ticket_py WHERE status_ticket = 'F'"
        print("Selecionando  tickets Fechados...")
    else:
        sql = "SELECT * FROM t_ticket_py"
        print("Exibindo todos os tickets...")

    tickets = consulta_db(sql, secret)

    if not tickets:
        print('Não há tickets cadastrados para este filtro.')
        return

    for ticket in tickets:
        print(f"Id #{ticket[0]} - {ticket[1]}")
        print(f"Nome: {ticket[2]} {ticket[3] if ticket[3] else ''}")
        print(f"Cargo: {ticket[4]}")
        print(f"Contato: {ticket[5]} - Tel: {ticket[6]}")
        print(f"Empresa: {ticket[7]}")
        print(f"Segmento: {ticket[8]}")
        print(f"Tamanho: {ticket[9]}")
        print(f"Pergunta: {ticket[10]}")
        print(f"Status: {'Em Aberto' if ticket[11] == 'A' else 'Fechada'}")
        print('----------------------------')

    exportar = input("Deseja exportar esses resultados para JSON? (s/n): ")
    if exportar.lower() == 's':
        exportar_tickets(tickets)


# Wagner -- n to conseguindo deixar utf8 ai ta ficando tudo zuado

def exportar_tickets(tickets):
    dados = []
    for ticket in tickets:
        ticket_dict = dict(
            zip(['id', 'data', 'nome', 'sobrenome', 'cargo', 'contato', 'telefone', 'empresa', 'segmento', 'tamanho',
                 'pergunta', 'status'], ticket))
        ticket_dict['data'] = ticket_dict['data'].strftime('%Y-%m-%d %H:%M:%S')
        # pra converter pra string e poder armazernar no json certinho
        dados.append(ticket_dict)

    try:
        with open('tickets.json', 'w', encoding='utf-8') as arquivo:
            json.dump(dados, arquivo, ensure_ascii=False, indent=4)
        print("Dados exportados com sucesso para 'tickets.json'.")
    except IOError as e:
        print(f"Não foi possível escrever no arquivo: {e}")
    except Exception as e:
        print(f"Ocorreu um erro ao exportar os dados: {e}")


def alterar_ticket():
    print('\n>>>>> Alterar Status Ticket <<<<<')

    try:
        op = int(input('Digite o id do chamado: '))

        # Ver o status atual do ticket
        sql_status = "SELECT status_ticket FROM t_ticket_py WHERE id_ticket = :id"
        result = consulta_db(sql_status, secret, {'id': op})

        if not result:
            print('Ticket não encontrado.')
            return

        status_atual = result[0][0]
        print(f"Status atual: {'Aberto' if status_atual == 'A' else 'Fechada'}")

        # Alterar o status do ticket se estiver em aberto
        if status_atual == 'A':
            sql_update = "UPDATE t_ticket_py SET status_ticket = 'F' WHERE id_ticket = :id"
            if operacao_db(sql_update, secret, {'id': op}, commit=True):
                print(f'O chamado do ID #{op} foi encerrado.')
            else:
                print('Falha ao tentar encerrar o chamado.')
        else:
            print(f'O chamado do ID #{op} já está encerrado.')

    except ValueError:
        print('Digite um valor válido.')


def cadastrar_leads():
    print('\n>>>>> Cadastrar Lead <<<<<')

    nome = verifica_input('Digite o nome: ')
    telefone = verifica_input('Digite o telefone: ')
    segmento = verifica_input('Digite o segmento: ')
    cargo = verifica_input('Digite o cargo: ')
    tamanho_empresa = verifica_input('Digite o tamanho da empresa: ')
    produto = verifica_input('Digite o produto: ')
    regiao = verifica_input('Digite a região: ')

    tel_limpo = validar_telefone(telefone)

    while True:
        email = verifica_input('Digite o e-mail: ')
        if validar_email(email):
            break
        else:
            print('Email inválido, digite novamente.')

    # SQL para inserir dados na tabela de leads
    sql_insert = """
    INSERT INTO t_leads_py (nome_leads, tel_leads, email_leads, segmento_leads, cargo_leads, tamanho_empresa_leads, produto_leads, regiao_leads)
    VALUES (:nome, :telefone, :email, :segmento, :cargo, :tamanho_empresa, :produto, :regiao)
    """

    params = {
        'nome': nome,
        'telefone': tel_limpo,
        'email': email,
        'segmento': segmento,
        'cargo': cargo,
        'tamanho_empresa': tamanho_empresa,
        'produto': produto,
        'regiao': regiao
    }

    if operacao_db(sql_insert, secret, params, commit=True):
        print('Novo lead cadastrado com sucesso.')
    else:
        print('Falha ao cadastrar novo lead.')


def listar_leads():
    print('\n>>>>> Listar Dados <<<<<')

    campos = {
        '1': 'segmento_leads',  # Moda, Comério etc
        '2': 'tamanho_empresa_leads',  # Grande, Pequena etc
        '3': 'produto_leads',  # Produtos Salesforce, IA, Cloud etc
        '4': 'regiao_leads'  # Norte, Sul, Sudeste etc
    }

    # Mostra opções pro usuário
    escolha = input('\nEscolha o campo pelo qual deseja filtrar'
                    '\nou deixe em branco para selecionar todos:'
                    '\n [1] Segmento'
                    '\n [2] Tamanho da Empresa'
                    '\n [3] Produto'
                    '\n [4] Região'
                    '\n [0] Cancelar'
                    '\n Opção: ')

    # Preparar a consulta SQL com base na escolha do usuário
    if escolha and escolha in campos:
        filtro = campos[escolha]
        valor_filtro = input(f"Digite o valor para {filtro}: ")
        sql = f"SELECT * FROM t_leads_py WHERE {filtro} = :valor"
        params = {'valor': valor_filtro}
    else:
        sql = "SELECT * FROM t_leads_py"
        params = {}

    leads = consulta_db(sql, secret, params)

    if not leads:
        print('Não há leads cadastrados para este filtro.')
        return

    # Listar os leads
    for lead in leads:
        print(f"---------- ID #{lead[0]} ----------")
        print(f"Nome: {lead[1]}")
        print(f"Telefone: {lead[2]}")
        print(f"E-mail: {lead[3]}")
        print(f"Segmento: {lead[4]}")
        print(f"Cargo: {lead[5]}")
        print(f"Tamanho da Empresa: {lead[6]}")
        print(f"Produto: {lead[7]}")
        print(f"Região: {lead[8]}")
        print('----------------------------')

    exportar = input("Deseja exportar esses resultados para JSON? (s/n): ")
    if exportar.lower() == 's':
        exportar_leads(leads, 'leads.json')


def exportar_leads(dados, arquivo):
    data = [dict(
        zip(['id', 'nome', 'telefone', 'email', 'segmento', 'cargo', 'tamanho_da_empresa', 'produto', 'regiao'], lead))
        for lead in dados]
    try:
        with open(arquivo, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print(f"Dados exportados com sucesso para '{arquivo}'.")
    except Exception as e:
        print(f"Ocorreu um erro ao exportar os dados: {e}")


def editar_leads():
    print('\n>>>>> Editar Dados <<<<<')

    try:
        num_lead = int(input('Digite o ID do lead que deseja alterar: '))

        sql_select = "SELECT * FROM t_leads_py WHERE id_leads = :id"
        lead = consulta_db(sql_select, secret, {'id': num_lead})
        if not lead:
            print('Lead não encontrado.')
            return
        lead = lead[0]  # pra pegar o lead da lista

        # Menu para editar campos específicos
        op = input('\nDigite o número correspondente ao dado que deseja alterar:'
                   '\n [1] Nome'
                   '\n [2] Telefone'
                   '\n [3] E-mail'
                   '\n [4] Segmento'
                   '\n [5] Cargo'
                   '\n [6] Tamanho da Empresa'
                   '\n [7] Produto'
                   '\n [8] Região'
                   '\n [0] Cancelar'
                   '\n Opção: ')
        campos = {
            '1': 'nome',
            '2': 'telefone',
            '3': 'email',
            '4': 'segmento',
            '5': 'cargo',
            '6': 'tamanho_empresa',
            '7': 'produto',
            '8': 'regiao'
        }

        if op == '0':
            return

        if op in campos:
            valor_atual = lead[campos[op] + 1]  # +1 para ajustar índice devido ao ID no início
            print(f"Valor atual: {valor_atual}")
            novo_valor = verifica_input(f'Digite o novo {campos[op]}: ')

            if op == '3' and not validar_email(novo_valor):  # Validação de e-mail
                print('Email inválido, tente novamente.')
                return

            # Atualizar o campo escolhido
            sql_update = f"UPDATE t_leads_py SET {campos[op]} = :novo_valor WHERE id = :id"
            if operacao_db(sql_update, secret, {'novo_valor': novo_valor, 'id': num_lead}, commit=True):
                print(f'{campos[op].capitalize()} alterado com sucesso.')
            else:
                print(f'Falha ao atualizar o {campos[op]}.')

    except ValueError:
        print('Digite somente números.')


def deletar_leads():
    print('\n>>>>> Deletar Dados <<<<<')

    op = input('Digite o ID do lead que deseja deletar: ')

    try:
        lead_id = int(op)

        sql_delete = "DELETE FROM t_leads_py WHERE id_leads = :id"
        result = operacao_db(sql_delete, secret, {'id': lead_id}, commit=True)

        if result:
            print('Lead deletado com sucesso.')
        else:
            print('Lead não foi encontrado ou não pôde ser deletado.')

    except ValueError:
        print('Digite somente números.')
    except Exception as e:
        print(f'Ocorreu um erro: {e}')


# Menu do Analista
def menu_analista():
    while True:
        print('\n====== Menu Analista =====')
        print(' [1] Cadastrar Dados')
        print(' [2] Listar Dados')
        print(' [3] Editar Dados')
        print(' [4] Deletar Dados')
        print(' [5] Menu Principal')
        print(' [0] Sair do Programa')
        print('===============================')

        try:
            op = input(' Digite uma opção: ')
            if op.isdigit() and int(op) in range(6):
                if op == '1':
                    cadastrar_leads()
                elif op == '2':
                    listar_leads()
                elif op == '3':
                    editar_leads()
                elif op == '4':
                    deletar_leads()
                elif op == '5':
                    break
                elif op == '0':
                    exit()
            else:
                print('Opção inválida, digite novamente.\n')

        except ValueError:
            print('Digite somente números.')


# Iniciando o projeto
setup_inicial()
secret = carregar_dados('secret.json')
menu_principal()
