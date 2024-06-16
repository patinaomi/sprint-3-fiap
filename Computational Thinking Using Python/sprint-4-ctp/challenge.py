import json
import oracledb
import requests

# Funções para trabalhar com JSON
def carregar_dados(dados):
    try:
        with open(dados, 'r') as arquivo:
            dados = json.load(arquivo)
            return dados
    except FileNotFoundError:
        print(f'O arquivo {dados} não foi encontrado.')
        return None
    except Exception as e:
        print(f'Erro: {e}')
        return None

def escrever_dados(nome_arquivo, dados):
    try:
        with open(nome_arquivo, 'w', encoding='utf-8') as arquivo:
            json.dump(dados, arquivo, indent=2, ensure_ascii=False)
    except FileNotFoundError:
        print('Não foi encontrado o arquivo.')
        return
    except Exception as e:
        print(f'Erro: {e}')
        return

def configurar_credenciais():
    try:
        print('--- Configuração das credenciais do banco de dados Oracle ---')
        usuario = input('Digite o nome de usuário: ')
        senha = input('Digite a senha: ')

        dados_secret = {
            'user': usuario,
            'password': senha,
            'dsn': 'oracle.fiap.com.br:1521/orcl'
        }

        escrever_dados('secret.json', dados_secret)
        print('Credenciais salvas!')

        return dados_secret
    except Exception as e:
        print(f'Erro ao configurar credenciais: {e}')
        return None

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
                cursor.execute(comando, params)
                return cursor.fetchall()
    except oracledb.DatabaseError as e:
        print(f'Erro no banco de dados: {e}')
        return None
    except Exception as e:
        print(f'Erro: {e}')
        return None

def consultar_feedback(secret, only_unanalyzed=False):
    if only_unanalyzed:
        comando = """
        SELECT id_feedback, nome_feedback, email_feedback, avaliacao_feedback, msg_feedback, sentimento_feedback
        FROM QUEST_FEEDBACK
        WHERE sentimento_feedback IS NULL
        """
    else:
        comando = """
        SELECT id_feedback, nome_feedback, email_feedback, avaliacao_feedback, msg_feedback, sentimento_feedback
        FROM QUEST_FEEDBACK
        """
    return consulta_db(comando, secret)

def atualizar_sentimento(secret, feedback_id, sentimento):
    comando = """
    UPDATE QUEST_FEEDBACK
    SET sentimento_feedback = :sentimento
    WHERE id_feedback = :id
    """
    params = {'sentimento': sentimento, 'id': feedback_id}
    return operacao_db(comando, secret, params)

def analisar_sentimentos(feedbacks, secret):
    api_key = 'sk-proj-qYLceiDdSCkAXV0ujfkcT3BlbkFJHknF8zf3yGKeeUPyWKtX'  # chave de API do OpenAI

    resultados = []

    for feedback in feedbacks:
        feedback_id = feedback[0]
        texto = feedback[4]  # Mensagem do feedback

        response = requests.post(
            "https://api.openai.com/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json"
            },
            json={
                "model": "gpt-3.5-turbo",
                "messages": [
                    {"role": "system", "content": "Você é um analista de sentimentos."},
                    {"role": "user", "content": f"Analise o sentimento do seguinte texto:\n\n{texto}\n\nResponda somente com a palavra Promotor, Detrator ou Neutro."}
                ],
                "max_tokens": 50
            }
        )

        if response.status_code == 200:
            response_data = response.json()
            if 'choices' in response_data:
                sentimento = response_data['choices'][0]['message']['content'].strip().lower()
                resultados.append((feedback_id, feedback[1], feedback[2], feedback[3], texto, sentimento))
                atualizar_sentimento(secret, feedback_id, sentimento)
            else:
                print(f"Resposta inesperada da API: {response_data}")
        else:
            print(f"Erro na chamada da API: {response.status_code} - {response.text}")

    return resultados

def obter_insights(feedbacks_analisados):
    api_key = 'sk-proj-qYLceiDdSCkAXV0ujfkcT3BlbkFJHknF8zf3yGKeeUPyWKtX'  # chave de API do OpenAI

    todas_mensagens = " ".join([f"{feedback[4]}" for feedback in feedbacks_analisados])
    response = requests.post(
        "https://api.openai.com/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        },
        json={
            "model": "gpt-3.5-turbo",
            "messages": [
                {"role": "system", "content": "Você é um consultor especializado em melhorias de sites."},
                {"role": "user", "content": f"Com base nos seguintes feedbacks de clientes:\n\n{todas_mensagens}\n\nQue melhorias você sugere para o site?"}
            ],
            "max_tokens": 300  # Aumentado para garantir que toda a resposta seja capturada
        }
    )

    if response.status_code == 200:
        response_data = response.json()
        if 'choices' in response_data:
            insights = response_data['choices'][0]['message']['content'].strip()
        else:
            print(f"Resposta inesperada da API: {response_data}")
            insights = "Nenhum insight disponível."
    else:
        print(f"Erro na chamada da API: {response.status_code} - {response.text}")
        insights = "Erro ao obter insights."

    return insights

def menu():
    print("Escolha uma opção:")
    print("1. Analisar sentimentos")
    print("2. Obter insights")
    print("3. Mostrar feedbacks")
    print("4. Sair")
    return input("Digite o número da opção desejada: ")

def main():
    secret = carregar_dados('secret.json')
    if not secret:
        secret = configurar_credenciais()

    while True:
        opcao = menu()

        if opcao == '1':
            print("Analisando sentimentos...")
            feedbacks = consultar_feedback(secret, only_unanalyzed=True)
            if feedbacks:
                feedbacks_analisados = analisar_sentimentos(feedbacks, secret)
                print("Análise de sentimentos concluída com sucesso!")
            else:
                print("Nenhum feedback para analisar.")
        elif opcao == '2':
            feedbacks = consultar_feedback(secret)
            if feedbacks:
                feedbacks_analisados = analisar_sentimentos(feedbacks, secret)
                insights = obter_insights(feedbacks_analisados)
                print("\nInsights para melhorias no site:")
                print(insights)
            else:
                print("Nenhum feedback disponível.")
        elif opcao == '3':
            feedbacks = consultar_feedback(secret)
            if feedbacks:
                print("Feedbacks:")
                for feedback in feedbacks:
                    print(f"Nome: {feedback[1]}, Email: {feedback[2]}, Avaliação: {feedback[3]}, Mensagem: {feedback[4]}, Sentimento: {feedback[5]}")
            else:
                print("Nenhum feedback encontrado.")
        elif opcao == '4':
            break
        else:
            print("Opção inválida. Por favor, tente novamente.")

if __name__ == "__main__":
    main()
