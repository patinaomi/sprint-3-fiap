import json
from datetime import datetime


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
            with open(dados, 'w') as arquivo:
                json.dump(dados_login, arquivo, indent=2)
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
                menu_admin(login)
            #
            elif dados_login[login]['cargo'] == 'Consultor':
                print('Menu consultor')
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
def menu_admin(login):
    while True:
        print('\n====== Menu de Administrador =====')
        print(' [1] Criar Novo Usuário')
        print(' [2] Alterar Dados')
        print(' [3] Listar Usuários')
        print(' [4] Desativar Usuário')
        print(' [0] Sair do Programa')
        print('===============================')

        try:
            op = int(input(' Digite uma opção: '))
            if op in range(0, 5):
                if op == 1:
                    criar_usuario()
                elif op == 2:
                    alterar_usuario()
                elif op == 3:
                    listar_usuario()
                elif op == 4:
                    desativar_usuario()
                elif op == 0:
                    exit()
            else:
                print(' Opção inválida, digite novamente.\n')

        except ValueError:
            print('Digite somente números.')


def criar_usuario():
    return


def alterar_usuario():
    return


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
                print(f'Usuário {nome} desativado.')
                with open(usuario_dados, 'w') as arquivo:
                    json.dump(usuarios, arquivo, indent=2)
            else:
                print(f'Usuário {nome} já está desativado da empresa.')
                break

    if not user_enc:
        print(f'Usuário não encontrado.')


menu_principal()
