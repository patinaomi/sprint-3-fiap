import json
import oracledb
import re


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


secret = carregar_dados('secret.json')


# Validações dos dados
def validar_email(email):
    # o e-mail deve conter pelo menos um '@' e um '.'
    regex_email = r'^[\w\.-]+@[\w\.-]+\.\w+'

    if re.match(regex_email, email):
        return True
    else:
        print('Email inválido, digite novamente.')
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
                else:
                    return cursor.rowcount  # Retorna o número de linhas afetadas
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


def operacao_db_arquivo(caminho_arquivo, secret, commit=True):
    try:
        with oracledb.connect(user=secret['user'],
                              password=secret['password'],
                              dsn=secret['dsn']) as connection:
            with connection.cursor() as cursor:
                with open(caminho_arquivo, 'r') as file:
                    sql_script = file.read()
                # Separar os comandos SQL por ponto e vírgula e executá-los individualmente
                sql_commands = sql_script.split(';')
                for command in sql_commands:
                    if command.strip():  # Verifica se o comando não está vazio
                        cursor.execute(command)
                if commit:
                    connection.commit()
                return True  # Retorna True se todos os comandos forem executados com sucesso
    except oracledb.DatabaseError as e:
        print(f'Erro no banco de dados: {e}')
        return False  # Retorna False em caso de erro
    except Exception as e:
        print(f'Erro: {e}')
        return False


# Criação das tabelas
def setup_inicial():
    # Primeiro dar drop caso elas existam
    sql_drop = 'sql_drop_tabela.sql'
    operacao_db_arquivo(sql_drop, secret)

    # Agora cria as tabelas
    sql_criar = 'sql_criar_tabela.sql'
    operacao_db_arquivo(sql_criar, secret)

    # E então, colocamos os dados nas tabelas!
    sql_dados = 'sql_carregar_dados.sql'
    operacao_db_arquivo(sql_dados, secret)


def menu_principal():
    while True:
        print('\n>>>>> MENU PRINCIPAL <<<<<')
        print(' [1] Realizar Login')
        print(' [2] Esqueci a senha')
        print(' [0] Sair do programa')
        print('--------------------------')

        op = input('Digite uma opção: ')
        if op.isdigit() and int(op) in range(2):  # ver com o professor, se é assim que o príncipe quer
            if op == '1':
                realizar_login()
            if op == '2':
                esqueci_a_senha()
            elif op == 0:
                print('Saindo do programa...')
                break
        else:
            print('Opção inválida, digite novamente.')


# setup_inicial()


def realizar_login():
    print('\n>>>>> Realizar o Login <<<<<')
    usuario = input('Digite o login: ')
    senha = input('Digite a senha: ')

    # Comando SQL para verificar o usuário e senha
    sql = """
    SELECT usuario_user, senha_user, cargo_user, status_user
    FROM t_usuario_py
    WHERE usuario_user = :usr AND senha_user = :pwd
    """

    result = operacao_db(sql, secret, params={'usr': usuario, 'pwd': senha}, commit=False)

    if result:
        for user_data in result:
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
            break
    else:
        print('Usuário ou senha incorreta. Não foi possível efetuar o login.')

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


def atualizar_senha(email, nova_senha):
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
    except oracledb.DatabaseError as e:
        print(f'Erro no banco de dados: {e}')
        return False
    except Exception as e:
        print(f'Erro: {e}')
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
    # Passar o e-mail como parâmetro para evitar injeção de SQL e resolver o erro DPY-4010
    result = consulta_db(sql_select, secret, params={'eml': email})

    if result:
        for user_data in result:
            nova_senha = verifica_senha('Digite a nova senha: ')
            if nova_senha == user_data[1]:
                print('A nova senha não pode ser igual à senha atual, tente novamente.')
                return

            if atualizar_senha(email, nova_senha):
                print('Senha alterada com sucesso!')
                return
    else:
        print('E-mail não encontrado. Não foi possível alterar a senha.')

esqueci_a_senha()
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
                print(2)
            elif op == '3':
                listar_usuario()
                print(3)
            elif op == '4':
                desativar_usuario()
                print(4)
            elif op == '5':
                print("Logout realizado com sucesso.")
                break
            elif op == 0:
                print("Saindo do programa...")
                exit()
        else:
            print('Opção inválida, digite novamente.\n')


def criar_usuario():
    print('\n>>>>> Novo Login <<<<<')

    novo_user = verifica_input('Digite o usuário: ')
    senha = verifica_senha('Digite a senha: ')
    email = ""

    while True:
        email = verifica_input('Digite seu e-mail: ')
        if validar_email(email):
            break
        else:
            print('Email inválido, digite novamente.')

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

    status = '1'  # '1' para ativo, '0' para inativo

    # SQL command to insert new user
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
    print('Novo usuário cadastrado com sucesso!')


criar_usuario()


def escrever_dados(nome_arquivo, dados):
    try:
        with open(nome_arquivo, 'w', encoding='utf-8') as arquivo:
            # pra acentuação etc, ficar correta
            json.dump(dados, arquivo, indent=2, ensure_ascii=False)
    except FileNotFoundError:
        print('Não foi encontrado o arquivo.')
        return


def alterar_usuario():
    print('\n>>>>> Alterar Dados do Usuário <<<<<')
    usuario_dados = 'login_admin.json'
    usuarios = carregar_dados(usuario_dados)

    if not usuarios:
        print('Não há usuários cadastrados.')
        return

    user = input('Digite o usuário que deseja alterar: ')
    user_enc = False
    for nome, info in usuarios.items():
        if user.lower() == nome:
            op = input(' Digite o dado que deseja alterar:'
                       '\n [1] Usuário'
                       '\n [2] E-mail'
                       '\n [3] Cargo'
                       '\n [0] Cancelar'
                       '\n Opção: ')

            if op == '1':
                novo_nome = verifica_input('\nDigite o novo usuário: ')
                # Aqui vai tirar o usuário antigo com o pop e coloca o nome atualizado
                usuarios[novo_nome] = usuarios.pop(user.lower())
            elif op == '2':
                info['email'] = verifica_input('\nDigite o novo e-mail: ')
            elif op == '3':
                print('\n[1] Consultor\n[2] Analista\n[3] Admin')
                op_cargo = verifica_input('Selecione o novo cargo: ')
                if op_cargo == '1':
                    info['cargo'] = 'Consultor'
                elif op_cargo == '2':
                    info['cargo'] = 'Analista'
                elif op_cargo == '3':
                    info['cargo'] = 'Admin'
                else:
                    print('Opção inválida.')
                    return
            else:
                print('Opção inválida.')
                return

            escrever_dados(usuario_dados, usuarios)
            print('Dados alterados com sucesso!')
            return

    if not user_enc:
        print(f'Usuário não encontrado.')


def listar_usuario():
    print('\n>>>>> Listar Usuários <<<<<')
    usuario_dados = 'login_admin.json'
    usuarios = carregar_dados(usuario_dados)

    if not usuarios:
        print('Não há usuários cadastrados.')
        return

    for nome, info in usuarios.items():
        print(f"Usuário: {nome}")
        print(f"E-mail: {info['email']}")
        print(f"Cargo: {info['cargo']}")
        print(f"Status: {'Ativo' if info['status'] else 'Desativado'}")
        print('----------------------------')


def desativar_usuario():
    print('\n>>>>> Deletar Usuários <<<<<')
    usuario_dados = 'login_admin.json'
    usuarios = carregar_dados(usuario_dados)

    if not usuarios:
        print('Não há usuários cadastrados.')
        return

    user_del = input('Digite o usuário que deseja desativar: ')
    user_enc = False
    for nome, info in usuarios.items():
        if user_del.lower() == nome:
            if info['status']:
                user_enc = True
                info['status'] = False
                escrever_dados(usuario_dados, usuarios)
                print(f'Usuário {nome} desativado.')
            else:
                print(f'Usuário {nome} já está desativado da empresa.')
                return

    if not user_enc:
        print(f'Usuário não encontrado.')


# Menu do Consultor - para ver os tickets já cadastrados, acessar o arquivo json - tickets
def menu_consultor():
    while True:
        print('\n====== Menu de Consultor =====')
        print(' [1] Consultar Tickets')
        print(' [2] Finalizar Ticket')
        print(' [3] Menu Principal')
        print(' [0] Sair do Programa')
        print('===============================')

        try:
            op = int(input(' Digite uma opção: '))
            if op in range(0, 4):
                if op == 1:
                    consultar_ticket()
                elif op == 2:
                    alterar_ticket()
                elif op == 3:
                    break
                elif op == 0:
                    exit()
            else:
                print(' Opção inválida, digite novamente.\n')

        except ValueError:
            print('Digite somente números.')


def consultar_ticket():
    print('\n>>>>> Consulta Ticket <<<<<')
    ticket_arquivo = 'tickets.json'
    ticket_dados = carregar_dados(ticket_arquivo)

    if not ticket_dados:
        print('Não há tickets cadastrados.')
        return

    for info in ticket_dados:
        print(f"Id #{info['id']} - {info['data']}")
        print(f"Nome: {info['nome']} {info['sobrenome']}")
        print(f"Cargo: {info['cargo']}")
        print(f"Contato: {info['email']} - Tel: {info['telefone']}")
        print(f"Empresa: {info['empresa']}")
        print(f"Segmento: {info['segmento']} - Tamanho: {info['tamanhoEmpresa']}")
        print(f"Pergunta: {info['pergunta']}")
        print(f"Status: {'Em Aberto' if info['status'] else 'Fechada'}")
        print('----------------------------')


def alterar_ticket():
    print('\n>>>>> Alterar Status Ticket <<<<<')
    ticket_arquivo = 'tickets.json'
    ticket_dados = carregar_dados(ticket_arquivo)

    if not ticket_dados:
        print('Não há tickets cadastrados.')
        return
    try:
        op = int(input('Digite o id do chamado: '))
        for info in ticket_dados:
            if op == info['id']:

                print(f"Status: {'Em Aberto' if info['status'] else 'Fechada'}")
                if info['status']:
                    info['status'] = False
                    print(f"O chamado do ID #{info['id']} foi encerrado.")
                    escrever_dados(ticket_arquivo, ticket_dados)
                    break

                else:
                    print(f"O chamado do ID #{info['id']} já está encerrado.")
                    break
        else:
            print(f"ID não encontrado.")

    except ValueError:
        print('Digite um valor válido.')
        return


def cadastrar_dados():
    print('\n>>>>> Cadastrar Lead <<<<<')
    leads_arquivo = 'leads.json'
    leads = carregar_dados(leads_arquivo)

    novo_lead = {
        'id': len(leads) + 1,
        'nome': verifica_input('Digite o nome: '),
        'telefone': verifica_input('Digite o telefone: '),
        'segmento': verifica_input('Digite o segmento: '),
        'cargo': verifica_input('Digite o cargo: '),
        'tamanhoDaEmpresa': verifica_input('Digite o tamanho da empresa: '),
        'produto': verifica_input('Digite o produto: '),
        'regiao': verifica_input('Digite a região: ')
    }

    while True:
        email = verifica_input('Digite o e-mail: ')
        if validar_email(email):
            novo_lead['email'] = email
            break

    leads.append(novo_lead)

    escrever_dados(leads_arquivo, leads)
    print('Novo lead cadastrado.')
    return


def listar_dados():
    print('\n>>>>> Listar Dados <<<<<')
    leads_arquivo = 'leads.json'
    leads = carregar_dados(leads_arquivo)

    if not leads:
        print('Não há leads cadastrados.')
        return

    for info in leads:
        print(f"---------- ID #{info['id']} ----------")
        print(f"Nome: {info['nome']}")
        print(f"Telefone: {info['telefone']}")
        print(f"E-mail: {info['email']}")
        print(f"Segmento: {info['segmento']}")
        print(f"Cargo: {info['cargo']}")
        print(f"Tamanho da Empresa: {info['tamanhoDaEmpresa']}")
        print(f"Produto: {info['produto']}")
        print(f"Região: {info['regiao']}")
        print('----------------------------')


def editar_dados():
    print('\n>>>>> Editar Dados <<<<<')
    leads_arquivo = 'leads.json'
    leads = carregar_dados(leads_arquivo)

    if not leads:
        print('Não há leads cadastrados.')
        return

    try:
        num_lead = int(input('Digite o número do lead que deseja alterar: '))
        alterado = False  # Variável para controle de alterações

        for i, lead in enumerate(leads):
            if lead['id'] == num_lead:
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
                if op == '1':
                    print(f"Nome atual {lead['nome']}")
                    lead['nome'] = verifica_input('Digite o novo nome: ')
                    alterado = True
                elif op == '2':
                    print(f"Telefone atual {lead['telefone']}")
                    lead['telefone'] = verifica_input('Digite o novo telefone: ')
                    alterado = True
                elif op == '3':
                    print(f"E-mail atual {lead['email']}")
                    email = verifica_input('Digite o novo e-mail: ')
                    if validar_email(email):
                        lead['email'] = email
                        alterado = True
                    else:
                        return
                elif op == '4':
                    print(f"Segmento atual {lead['segmento']}")
                    lead['segmento'] = verifica_input('Digite o novo segmento: ')
                    alterado = True
                elif op == '5':
                    print(f"Cargo atual {lead['cargo']}")
                    lead['cargo'] = verifica_input('Digite o novo cargo: ')
                    alterado = True
                elif op == '6':
                    print(f"Tamanho da empresa atual {lead['tamanhoDaEmpresa']}")
                    lead['tamanhoDaEmpresa'] = verifica_input('Digite o novo tamanho da empresa: ')
                    alterado = True
                elif op == '7':
                    print(f"Produto atual {lead['produto']}")
                    lead['produto'] = verifica_input('Digite o novo produto: ')
                    alterado = True
                elif op == '8':
                    print(f"Região atual {lead['regiao']}")
                    lead['regiao'] = verifica_input('Digite o novo região: ')
                    alterado = True
                elif op == '0':
                    return

                if alterado:
                    escrever_dados(leads_arquivo, leads)
                    print('Lead alterado com sucesso.')
                    return
                else:
                    print('Nenhuma alteração realizada.')

                break
        else:
            print('Id não encontrado.')

    except ValueError:
        print('Digite somente números.')


def deletar_dados():
    print('\n>>>>> Deletar Dados <<<<<')
    leads_arquivo = 'leads.json'
    leads = carregar_dados(leads_arquivo)

    if not leads:
        print('Não há leads cadastrados.')
        return

    op = input('Digite o ID do lead: ')

    try:
        busca = int(op)
        encontrado = False

        for i, lead in enumerate(leads):
            if lead['id'] == busca:
                del leads[i]
                print('Lead deletado com sucesso.')
                escrever_dados(leads_arquivo, leads)
                encontrado = True
                break

        if not encontrado:
            print('Lead não foi encontrado.')

    except ValueError:
        print('Digite somente números.')


# Menu do Analista - para ver os dados já cadastrados, acessar o arquivo json - leads
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
            op = int(input(' Digite uma opção: '))
            if op in range(0, 6):
                if op == 1:
                    cadastrar_dados()
                elif op == 2:
                    listar_dados()
                elif op == 3:
                    editar_dados()
                elif op == 4:
                    deletar_dados()
                elif op == 5:
                    break
                elif op == 0:
                    exit()
            else:
                print('Opção inválida, digite novamente.\n')

        except ValueError:
            print('Digite somente números.')
