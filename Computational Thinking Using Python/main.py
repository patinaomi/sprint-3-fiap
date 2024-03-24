import csv
import json
import os
import re


def menu_principal():
    while True:
        print('\n>>>>> MENU PRINCIPAL <<<<<')
        print(' [1] Realizar Login')
        print(' [2] Esqueci a senha')
        print(' [0] Sair do programa')
        print('--------------------------')

        try:
            op = int(input('Digite uma opção: '))

            if op in range(0, 3):
                if op == 1:
                    realizar_login()
                if op == 2:
                    esqueci_a_senha()
                elif op == 0:
                    print('Saindo do programa...')
                    break
            else:
                print('Opção inválida, digite novamente.')
        except ValueError:
            print('Digite somente números.')


# Para reaproveitamento das funções, optei por mandar por parâmetro o json pois será aberto outros arquivos depois
def carregar_dados(dados):
    try:
        with open(dados, 'r') as arquivo:
            dados = json.load(arquivo)
            return dados
    except FileNotFoundError:
        print(f'O arquivo {dados} não foi encontrado.')
        return


def validar_email(email):
    # o e-mail deve conter pelo menos
    regex_email = r'^[\w\.-]+@[\w\.-]+\.\w+'

    if re.match(regex_email, email):
        return True
    else:
        print('Email inválido, digite novamente. ')
        return False


def escrever_dados(nome_arquivo, dados):
    try:
        with open(nome_arquivo, 'w', encoding='utf-8') as arquivo:
            # pra acentuação etc, ficar correta
            json.dump(dados, arquivo, indent=2, ensure_ascii=False)
    except FileNotFoundError:
        print('Não foi encontrado o arquivo.')
        return


def esqueci_a_senha():
    dados = 'login_admin.json'
    dados_login = carregar_dados(dados)
    if dados_login is None:
        return

    print('\n>>>>> Esqueci a Senha <<<<<')
    email = input('Digite o e-mail associado ao seu login: ')

    for login, info_usuario in dados_login.items():
        if info_usuario['email'].lower() == email.lower():
            nova_senha = input('Digite a nova senha: ')

            # Vai verificar se a senha é diferente da original
            if nova_senha == info_usuario['senha']:
                print('A nova senha não pode ser igual à senha atual. Tente novamente.')
                return

            dados_login[login]['senha'] = nova_senha

            escrever_dados(dados, dados_login)
            print('Senha alterada com sucesso!')
            return

    print('E-mail não encontrado. Não foi possível alterar a senha.')


def realizar_login():
    dados = 'login_admin.json'
    dados_login = carregar_dados(dados)
    print('\n>>>>> Realizar o Login <<<<<')
    login = input('Digite o login: ')
    senha = input('Digite a senha: ')

    # aqui pesquisa se o login está no json e se bate com a senha cadastrada
    if login in dados_login and senha == dados_login[login]['senha']:
        if dados_login[login]['status']:
            print('Login efetuado com sucesso!')
            # o Admin é responsável por administrar os logins dos funcionarios
            if dados_login[login]['cargo'] == 'Admin':
                menu_admin()

            # o Consultor irá verificar todos as solicitações de contato por parte dos clientes
            elif dados_login[login]['cargo'] == 'Consultor':
                menu_consultor()
            # irá ver as msgs deixadas no formulario dos leads
            else:
                print('menu analista')
                # irá analisar os dados dos clientes
        else:
            print('Usuário desativado. Não foi possível efetuar o login.')
            return
    else:
        print('Usuário ou senha incorreta. Não foi possível efetuar o login.')

    return login


# Menu do Administrador - para ver os usuários já cadastrados, acessar o arquivo json - login_admin
def menu_admin():
    while True:
        print('\n====== Menu de Administrador =====')
        print(' [1] Criar Novo Usuário')
        print(' [2] Alterar Dados')
        print(' [3] Listar Usuários')
        print(' [4] Desativar Usuário')
        print(' [5] Menu Principal')
        print(' [0] Sair do Programa')
        print('===============================')

        try:
            op = int(input(' Digite uma opção: '))
            if op in range(0, 6):
                if op == 1:
                    criar_usuario()
                elif op == 2:
                    alterar_usuario()
                elif op == 3:
                    listar_usuario()
                elif op == 4:
                    desativar_usuario()
                elif op == 5:
                    break
                elif op == 0:
                    exit()
            else:
                print(' Opção inválida, digite novamente.\n')

        except ValueError:
            print('Digite somente números.')


def criar_usuario():
    print('\n>>>>> Novo Usuário <<<<<')
    usuario_dados = 'login_admin.json'
    usuarios = carregar_dados(usuario_dados)

    novo_user = ''
    while not novo_user.strip():
        novo_user = input('Digite o usuário: ')
        if not novo_user.strip():
            print('O nome de usuário não pode ficar em branco.')

    dados_user = {}

    senha = ''
    while not senha.strip():
        senha = input('Digite a senha: ')
        if not senha.strip():
            print('A senha não pode ficar em branco.')
    dados_user['senha'] = senha

    while True:
        email = input('Digite seu e-mail: ')
        if validar_email(email):
            dados_user['email'] = email
            break

    while True:
        print('\n[1] Consultor\n[2] Analista\n[3] Admin')
        op_cargo = input('Digite o cargo: ')
        if op_cargo == '1':
            dados_user['cargo'] = 'Consultor'
            break
        elif op_cargo == '2':
            dados_user['cargo'] = 'Analista'
            break
        elif op_cargo == '3':
            dados_user['cargo'] = 'Admin'
            break

    dados_user['status'] = True
    usuarios[novo_user] = dados_user
    escrever_dados(usuario_dados, usuarios)
    print('Novo usuário cadastrado')
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
                novo_nome = input('\nDigite o novo usuário: ')
                # Aqui vai tirar o usuário antigo com o pop e coloca o nome atualizado
                usuarios[novo_nome] = usuarios.pop(user.lower())
            elif op == '2':
                info['email'] = input('\nDigite o novo e-mail: ')
            elif op == '3':
                print('\n[1] Consultor\n[2] Analista\n[3] Admin')
                op_cargo = input('Selecione o novo cargo: ')
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

    novo_lead = {'id': len(leads) + 1, 'nome': input('Digite o nome: '), 'telefone': input('Digite o telefone: '),
                 'email': input('Digite o e-mail: '), 'segmento': input('Digite o segmento: '),
                 'cargo': input('Digite o cargo: '), 'tamanhoDaEmpresa': input('Digite o tamanho da empresa: '),
                 'produto': input('Digite o produto: '), 'regiao': input('Digite a região: ')}

    leads.append(novo_lead)

    escrever_dados(leads_arquivo, leads)
    print('Novo lead cadastrado')
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
                    lead['nome'] = input('Digite o novo nome: ')
                elif op == '2':
                    print(f"Telefone atual {lead['telefone']}")
                    lead['telefone'] = input('Digite o novo telefone: ')
                elif op == '3':
                    print(f"E-mail atual {lead['email']}")
                    lead['email'] = input('Digite o novo e-mail: ')
                elif op == '4':
                    print(f"Segmento atual {lead['segmento']}")
                    lead['segmento'] = input('Digite o novo segmento: ')
                elif op == '5':
                    print(f"Cargo atual {lead['cargo']}")
                    lead['cargo'] = input('Digite o novo cargo: ')
                elif op == '6':
                    print(f"Tamanho da empresa atual {lead['tamanhoDaEmpresa']}")
                    lead['tamanhoDaEmpresa'] = input('Digite o novo tamanho da empresa: ')
                elif op == '7':
                    print(f"Produto atual {lead['produto']}")
                    lead['produto'] = input('Digite o novo produto: ')
                elif op == '8':
                    print(f"Região atual {lead['regiao']}")
                    lead['regiao'] = input('Digite o novo região: ')
                elif op == '0':
                    return
                else:
                    print('Opção inválida')
                    break

                escrever_dados(leads_arquivo, leads)
                print('Lead alterado com sucesso')
                return

        else:
            print('Id não encontrado')

    except ValueError:
        print('Digite somente números')


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



def menu_analista():
    while True:
        print('\n====== Menu Analista =====')
        print(' [1] Converter Dados')
        print(' [2] Listar Dados')
        print(' [3] Editar Dados')
        print(' [4] Deletar Dados')
        print(' [5] Menu Principal')
        print(' [0] Sair do Programa')
        print('===============================')

        try:
            op = int(input(' Digite uma opção: '))
            if op in range(0, 5):
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
                print(' Opção inválida, digite novamente.\n')

        except ValueError:
            print('Digite somente números.')


# tirar pontos finais
# ver onde pode ter try except
# usar validacao do email em tudo q dar
# validacao de espacos em branco
# organizar codigo, principais no inicio
#funcoes do menu primeiro
#menu
deletar_dados()
menu_principal()
