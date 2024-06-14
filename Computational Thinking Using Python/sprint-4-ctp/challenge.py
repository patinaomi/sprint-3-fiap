import json
import oracledb
import openai


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


def consultar_feedback(secret):
    comando = """
    SELECT nome_feedback, email_feedback, avaliacao_feedback, msg_feedback
    FROM QUEST_FEEDBACK
    WHERE avaliacao_feedback <= 3
    """
    return consulta_db(comando, secret)


def atualizar_sentimento(secret, feedback_id, sentimento):
    comando = """
    UPDATE FEEDBACK
    SET sentimento_feedback = :sentimento
    WHERE id = :id
    """
    params = {'sentimento_feedback': sentimento, 'id_feedback': feedback_id}
    return operacao_db(comando, secret, params)


# Análise de Sentimentos
def analisar_sentimentos(feedbacks):
    openai.api_key = "sk-proj-qYLceiDdSCkAXV0ujfkcT3BlbkFJHknF8zf3yGKeeUPyWKtX"
    resultados = []

    for feedback in feedbacks:
        texto = feedback[3]  # Mensagem do feedback
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=f"Analise o sentimento do seguinte feedback: '{texto}'",
            max_tokens=60
        )
        sentimento = response.choices[0].text.strip()
        resultados.append((feedback[0], feedback[1], feedback[2], feedback[3], sentimento))

    return resultados


def obter_insights(feedbacks_analisados):
    openai.api_key = "sk-proj-qYLceiDdSCkAXV0ujfkcT3BlbkFJHknF8zf3yGKeeUPyWKtX"
    todas_mensagens = " ".join([f"{feedback[3]}" for feedback in feedbacks_analisados])
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=f"Com base nos seguintes feedbacks, o que pode ser melhorado no site? {todas_mensagens}",
        max_tokens=150
    )
    return response.choices[0].text.strip()


def main():
    secret = carregar_dados('secret.json')
    if not secret:
        secret = configurar_credenciais()

    feedbacks = consultar_feedback(secret)
    if feedbacks:
        feedbacks_analisados = analisar_sentimentos(feedbacks, secret)
        insights = obter_insights(feedbacks_analisados)

        print("Feedbacks analisados:")
        for feedback in feedbacks_analisados:
            print(f"Nome: {feedback[1]}, Email: {feedback[2]}, Avaliação: {feedback[3]}, Mensagem: {feedback[4]}, Sentimento: {feedback[5]}")

        print("\nInsights para melhorias no site:")
        print(insights)
    else:
        print("Nenhum feedback considerado regular ou negativo encontrado.")

if __name__ == "__main__":
    main()
