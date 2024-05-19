/* Preciso chamar o use client para simular visão do cliente, sem ele da erro*/
'use client'

/* Importar UseState*/
import { useState } from 'react'

/* Importação do LINK para direcionar para outra página */
import Image from 'next/image'

/*Importação dos componentes */
import TextReader from "../components/TextReader";


export default function Contact() {
  const [InformacoesFormulario, setInformacoesFormulario] = useState({
    nome: "",
    email: "",
    telefone: "",
    tamanho: "",
    segmento: "",
    produto: "",
    cargo: "",
    mensagem: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Mapeamento de valores de tamanho da empresa
    if (name === "tamanho") {
      if (value === "pequena") {
        updatedValue = "1";
      } else if (value === "media") {
        updatedValue = "2";
      } else if (value === "grande") {
        updatedValue = "3";
      } else if (value === "multi_nacional") {
        updatedValue = "4";
      }
    }

    // Mapeamento de valores de produto
    if (name === "produto") {
      if (value === "atendimento") {
        updatedValue = "1";
      } else if (value === "cloud") {
        updatedValue = "2";
      } else if (value === "slack") {
        updatedValue = "3";
      } else if (value === "einstein") {
        updatedValue = "4";
      } else if (value === "vendas") {
        updatedValue = "5";
      } else if (value === "marketing") {
        updatedValue = "6";
      }
    }

    setInformacoesFormulario({
      ...InformacoesFormulario,
      [name]: updatedValue,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const {
      nome,
      email,
      telefone,
      tamanho,
      segmento,
      produto,
      cargo,
      mensagem,
    } = InformacoesFormulario;

    if (
      !nome ||
      !email ||
      !telefone ||
      !tamanho ||
      !segmento ||
      !produto ||
      !cargo ||
      !mensagem
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const dadosParaEnviar = {
      nome,
      email,
      telefone,
      tamanhoEmpresaId: tamanho,
      segmento,
      produtoId: produto,
      cargo,
      mensagem,
    };

    const dadosFormularioJson = JSON.stringify(dadosParaEnviar);

    try {
      const response = await fetch(
        "http://localhost:8080/projetoTeste/rest/contato/inserir",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: dadosFormularioJson,
        }
      );
      if (response.ok) {
        alert("Dados enviados com sucesso!");
      } else {
        alert("Falha ao enviar os dados.");
      }
    } catch (error) {
      alert("Erro ao enviar os dados: " + error);
    }
  };

  return (
    <div className="flex justify-start dark:bg-gray-700 w-full min-h-[70vh]">
      <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center bg-segunda">
        <div>
          <Image
            src="/assets/Contact/formulario-contato.png"
            alt="Imagem para compor a página de cadastro"
            width={500}
            height={200}
          />
        </div>
      </div>
      <div className="bg-white dark:bg-gray-700 w-full p-6">
        <form
          className="flex flex-col justify-center gap-5"
          action="#"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between items-center">
            <div className=" text-[#667085] w-full font-sen text-4xl h-20 flex justify-start items-center dark:text-white">
              <TextReader text="Contato">
                <h1>Contato</h1>
              </TextReader>
            </div>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
            <div className="flex flex-col gap-3">
              <TextReader text="Nome">
                <label
                  htmlFor="nome_contato"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Nome
                </label>
              </TextReader>
              <input
                id="nome_contato"
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                required
                value={InformacoesFormulario.nome}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              <TextReader text="E-mail">
                <label
                  htmlFor="email_contato"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  E-mail
                </label>
              </TextReader>
              <input
                id="email_contato"
                type="mail"
                name="email"
                placeholder="seuemail@gmail.com"
                required
                value={InformacoesFormulario.email}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              <TextReader text="Telefone">
                <label
                  htmlFor="telefone_contato"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Telefone
                </label>
              </TextReader>
              <input
                id="telefone_contato"
                type="number"
                name="telefone"
                placeholder="(xx) xxxxx-xxxx"
                required
                value={InformacoesFormulario.telefone}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              <TextReader text="Segmento">
                <label
                  htmlFor="segmento_contato"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Segmento
                </label>
              </TextReader>
              <input
                id="segmento_contato"
                type="text"
                name="segmento"
                placeholder="Segmento da empresa"
                required
                value={InformacoesFormulario.segmento}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              <TextReader text="Cargo">
                <label
                  htmlFor="cargo_contato"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Cargo
                </label>
              </TextReader>
              <input
                id="cargo_contato"
                type="text"
                name="cargo"
                placeholder="Digite seu cargo"
                required
                value={InformacoesFormulario.cargo}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
          </div>
          <div className="grid md:flex md:flex-col md:justify-start">
            <div className="font-sen text-2xl mb-5">
              <TextReader text="Tamanho da empresa">
                <h6>Tamanho da empresa</h6>
              </TextReader>
            </div>
            <div className="grid md:flex justify-start gap-5 text-xl font-sen mb-10">
              <div className="flex gap-3">
                <input
                  id="tamanho_empresa_pequena"
                  type="radio"
                  name="tamanho"
                  value="pequena"
                  onChange={handleChange}
                />
                <TextReader text="Pequena">
                  <label htmlFor="tamanho_empresa_pequena">Pequena</label>
                </TextReader>
              </div>
              <div className="flex gap-3">
                <input
                  id="tamanho_empresa_media"
                  type="radio"
                  name="tamanho"
                  value="media"
                  onChange={handleChange}
                />
                <TextReader text="Média">
                  <label htmlFor="tamanho_empresa_media">Média</label>
                </TextReader>
              </div>
              <div className="flex gap-3">
                <input
                  id="tamanho_empresa_grande"
                  type="radio"
                  name="tamanho"
                  value="grande"
                  onChange={handleChange}
                />
                <TextReader text="Grande">
                  <label htmlFor="tamanho_empresa_grande">Grande</label>
                </TextReader>
              </div>
              <div className="flex gap-3">
                <input
                  id="tamanho_empresa_multiNacional"
                  type="radio"
                  name="tamanho"
                  value="multi_nacional"
                  onChange={handleChange}
                />
                <TextReader text="Multi nacional">
                  <label htmlFor="tamanho_empresa_multiNacional">
                    Multi nacional
                  </label>
                </TextReader>
              </div>
            </div>
          </div>
          <div className="grid md:flex md:flex-col justify-start">
            <div className="font-sen text-2xl mb-5">
              <TextReader text="Produtos">
                <h6>Produtos</h6>
              </TextReader>
            </div>
            <div className="grid md:flex justify-start gap-5 text-xl font-sen mb-10">
              <div className="flex gap-3">
                <input
                  id="produto_atendimento"
                  type="radio"
                  name="produto"
                  value="atendimento"
                  onChange={handleChange}
                />
                <TextReader text="Atendimento">
                  <label htmlFor="produto_atendimento">Atendimento</label>
                </TextReader>
              </div>
              <div className="flex gap-3">
                <input
                  id="produto_cloud"
                  type="radio"
                  name="produto"
                  value="cloud"
                  onChange={handleChange}
                />
                <TextReader text="Cloud">
                  <label htmlFor="produto_cloud">Cloud</label>
                </TextReader>
              </div>
              <div className="flex gap-3">
                <input
                  id="produto_slack"
                  type="radio"
                  name="produto"
                  value="slack"
                  onChange={handleChange}
                />
                <TextReader text="Slack">
                  <label htmlFor="produto_slack">Slack</label>
                </TextReader>
              </div>
              <div className="flex gap-3">
                <input
                  id="produto_eintein"
                  type="radio"
                  name="produto"
                  value="einstein"
                  onChange={handleChange}
                />
                <TextReader text="Einstein">
                  <label htmlFor="produto_eintein">Einstein</label>
                </TextReader>
              </div>
              <div className="flex gap-3">
                <input
                  id="produto_vendas"
                  type="radio"
                  name="produto"
                  value="vendas"
                  onChange={handleChange}
                />
                <TextReader text="Vendas">
                  <label htmlFor="produto_vendas">Vendas</label>
                </TextReader>
              </div>
              <div className="flex gap-3">
                <input
                  id="produto_marketing"
                  type="radio"
                  name="produto"
                  value="marketing"
                  onChange={handleChange}
                />
                <TextReader text="Marketing">
                  <label htmlFor="produto_marketing">Marketing</label>
                </TextReader>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full mb-10">
            <div className="font-sen text-2xl mb-5">
              <TextReader text="Sua mensagem">
                <h6>Sua mensagem</h6>
              </TextReader>
            </div>
            <div>
              <textarea
                name="mensagem"
                id="mensagem"
                rows={4}
                value={InformacoesFormulario.mensagem}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Deixe seu comentário aqui..."
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center items-center px-8 py-3 font-sen text-2xl rounded bg-segunda dark:bg-[#3EA0E7] dark:text-white text-white text-center">
            <TextReader text="Enviar">
              <button
                className="flexs justify-center items-center"
                type="submit"
              >
                Enviar
              </button>
            </TextReader>
          </div>
        </form>
      </div>
    </div>
  );
}