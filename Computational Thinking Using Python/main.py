import json
from datetime import datetime


def carregar_dados_login():
    with open('login_admin.json', 'r') as arquivo:
        dados_login = json.load(arquivo)
    return dados_login


def realizar_login():
    dados_login = carregar_dados_login()
    print('\n>>>>> Realizar o Login <<<<<')
    login = input(' Digite o login: ')
    senha = input(' Digite a senha: ')

    if login in dados_login and senha == dados_login[login]['senha']:
        print(' Login efetuado com sucesso!')
        if dados_login[login]['cargo'] == 'Admin':
            print('Menu admin')
        elif dados_login[login]['cargo'] == 'Consultor':
            print('Menu consultor')
        else:
            print('menu analista')

    else:
        print('Usuário ou senha incorreta. Não foi possível efetuar o login.')

    return login


def esqueci_a_senha():
    dados_login = carregar_dados_login()
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
            with open('login_admin.json', 'w') as arquivo:
                json.dump(dados_login, arquivo, indent=2)
            print('Senha alterada com sucesso!')
            return

    print('E-mail não encontrado. Não foi possível alterar a senha.')


# Menu do Administrador - para ver os usuários já cadastrados, acessar o arquivo json - login_admin
def menu_principal():
    while True:
        print('\n>>>>> MENU PRINCIPAL <<<<<')
        print(' [1] Realizar Login')
        print(' [2] Esqueci a senha')
        print(' [0] Sair do programa')
        print('--------------------------')

        op = input(' Digite uma opção: ')

        if op == '1':
            realizar_login()
        if op == '2':
            esqueci_a_senha()
        elif op == '0':
            print('Saindo do programa...')
            break
        else:
            print(' Opção inválida, digite novamente.')


menu_principal()
