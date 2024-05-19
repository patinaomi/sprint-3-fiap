/* Preciso chamar o use client para simular visão do cliente, sem ele da erro*/
"use client";

/* Importar UseState*/
import { useState } from "react";

/* Importação do LINK para direcionar para outra página */
import Image from "next/image";

/* Importação dos componentes */
import TextReader from "../components/TextReader";

export default function Cadastro() {
  const [InformacoesFormulario, setInformacoesFormulario] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    celular: "",
    senha: "",
    confirmacaoSenha: "",
    generoId: "",
    sobreEmpresaId: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Mapeamento de valores de gênero
    if (name === "generoId") {
      if (value === "feminino") {
        updatedValue = "1";
      } else if (value === "masculino") {
        updatedValue = "2";
      } else {
        updatedValue = "3"; // Prefiro não dizer
      }
    }

    // Mapeamento de valores de empresa
    if (name === "sobreEmpresaId") {
      if (value === "funcionario") {
        updatedValue = "1";
      } else if (value === "proprietario") {
        updatedValue = "2";
      } else if (value === "filiado") {
        updatedValue = "3";
      } else {
        updatedValue = "4"; // Estudante
      }
    }

    if (["nome", "sobrenome"].includes(name)) {
      updatedValue = value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
    }

    if (name === "celular") {
      updatedValue = value.replace(/\D/g, "");
    }

    setInformacoesFormulario({
      ...InformacoesFormulario,
      [name]: updatedValue,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(InformacoesFormulario.email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    if (InformacoesFormulario.senha.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (
      !InformacoesFormulario.nome ||
      !InformacoesFormulario.sobrenome ||
      !InformacoesFormulario.email ||
      !InformacoesFormulario.celular ||
      !InformacoesFormulario.senha ||
      !InformacoesFormulario.confirmacaoSenha ||
      !InformacoesFormulario.generoId ||
      !InformacoesFormulario.sobreEmpresaId
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (
      InformacoesFormulario.senha !== InformacoesFormulario.confirmacaoSenha
    ) {
      alert("As senhas não coincidem.");
      return;
    }

    const { confirmacaoSenha, ...dadosParaEnviar } = InformacoesFormulario;

    const dadosFormularioJson = JSON.stringify(dadosParaEnviar);

    localStorage.setItem("InformacoesFormulario", dadosFormularioJson);

    try {
      const response = await fetch(
        "http://localhost:8080/projetoTeste/rest/cadastro/inserir",
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
    <div className="flex md:flex md:justify-center items-center dark:bg-gray-700 min-h-[100vh]">
      <div className="hidden md:flex md:flex-col md:justify-center md:items-center md:gap-20 bg-segunda min-h-[100vh] border border-[#3EA0E7] w-[50%]">
        <div>
          <Image
            className="w-auto h-auto"
            src="/assets/Cadastro/salesforce-logo.svg"
            alt="Logo da SalesForce"
            width={400}
            height={200}
          />
        </div>
        <div>
          <Image
            className="imagem-pagina-cadastro"
            src="/assets/Cadastro/undraw_shopping_re_3wst.svg"
            alt="Imagem para compor a página de cadastro"
            width={500}
            height={200}
          />
        </div>
      </div>
      <div className="bg-white min-h-[100vh] w-full dark:bg-gray-700 flex flex-col md:flex md:justify-center md:items-center border border-[#3EA0E7]">
        <form className="flex flex-col" action="post" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center mb-10">
            <div className=" text-[#667085] w-full font-sen text-4xl h-20 flex justify-start items-center dark:text-white">
              <TextReader text="Cadastre-se">
                <h1>Cadastre-se</h1>
              </TextReader>
            </div>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 justify-center gap-10 mb-10">
            <div className="flex flex-col gap-3">
              <TextReader text="Nome">
                <label
                  htmlFor="nome"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Nome
                </label>
              </TextReader>
              <input
                id="nome"
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
              <TextReader text="Sobrenome">
                <label
                  htmlFor="sobrenome"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Sobrenome
                </label>
              </TextReader>
              <input
                id="sobrenome"
                type="text"
                name="sobrenome"
                placeholder="Digite seu sobrenome"
                required
                value={InformacoesFormulario.sobrenome}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              <TextReader text="E-mail">
                <label
                  htmlFor="email"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  E-mail
                </label>
              </TextReader>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
                value={InformacoesFormulario.email}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              <TextReader text="Celular">
                <label
                  htmlFor="celular"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Celular
                </label>
              </TextReader>
              <input
                id="celular"
                type="tel"
                name="celular"
                placeholder="(xx) xxxx-xxxx"
                required
                value={InformacoesFormulario.celular}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              <TextReader text="Senha">
                <label
                  htmlFor="senha"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Senha
                </label>
              </TextReader>
              <input
                id="senha"
                type="password"
                name="senha"
                placeholder="Digite sua senha"
                required
                value={InformacoesFormulario.senha}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              <TextReader text="Confirme sua Senha">
                <label
                  htmlFor="confirmacaoSenha"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Confirme sua Senha
                </label>
              </TextReader>
              <input
                id="confirmacaoSenha"
                type="password"
                name="confirmacaoSenha"
                placeholder="Confirme a senha"
                required
                value={InformacoesFormulario.confirmacaoSenha}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <div className="font-sen text-2xl mb-5">
              <TextReader text="Gênero">
                <h6>Gênero</h6>
              </TextReader>
            </div>
            <div className="flex justify-start gap-5 text-xl font-sen mb-10">
              <div className="flex gap-3">
                <TextReader text="Feminino">
                  <input
                    id="feminino"
                    type="radio"
                    name="generoId"
                    value="feminino"
                    onChange={handleChange}
                  />
                  <label htmlFor="feminino">Feminino</label>
                </TextReader>
              </div>
              <div className="flex gap-3">
                <input
                  id="masculino"
                  type="radio"
                  name="generoId"
                  value="masculino"
                  onChange={handleChange}
                />
                <TextReader text="Masculino">
                  <label htmlFor="masculino">Masculino</label>
                </TextReader>
              </div>
              <div className="flex gap-3">
                <input
                  id="semDefinicao"
                  type="radio"
                  name="generoId"
                  value="Prefiro não dizer"
                  onChange={handleChange}
                />
                <TextReader text="Prefiro não dizer">
                  <label htmlFor="semDefinicao">Prefiro não dizer</label>
                </TextReader>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <div className="font-sen text-2xl mb-5">
              <TextReader text="Sobre empresa">
                <h6>Sobre empresa</h6>
              </TextReader>
            </div>
            <div className="flex justify-start gap-5 text-xl font-sen mb-10">
              <div className="flex gap-3">
                <input
                  id="funcionario"
                  type="radio"
                  name="sobreEmpresaId"
                  value="funcionario"
                  onChange={handleChange}
                />
                <TextReader text="Funcionário">
                  <label htmlFor="funcionario">Funcionário</label>
                </TextReader>
              </div>
              <div className="flex gap-3">
                <input
                  id="proprietario"
                  type="radio"
                  name="sobreEmpresaId"
                  value="proprietario"
                  onChange={handleChange}
                />
                <TextReader text="Proprietário">
                  <label htmlFor="proprietario">Proprietário</label>
                </TextReader>
              </div>
              <div className="flex gap-3">
                <input
                  id="filiado"
                  type="radio"
                  name="sobreEmpresaId"
                  value="filiado"
                  onChange={handleChange}
                />
                <TextReader text="Filiado">
                  <label htmlFor="filiado">Filiado</label>
                </TextReader>
              </div>
              <div className="flex gap-3">
                <input
                  id="estudante"
                  type="radio"
                  name="sobreEmpresaId"
                  value="estudante"
                  onChange={handleChange}
                />
                <TextReader text="Estudante">
                  <label htmlFor="estudante">Estudante</label>
                </TextReader>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center px-8 py-3 font-sen text-2xl rounded bg-segunda dark:bg-[#3EA0E7] dark:text-white text-white text-center w-full">
            <TextReader text="Continuar">
              <button type="submit">Continuar</button>
            </TextReader>
          </div>
        </form>
      </div>
    </div>
  );
}