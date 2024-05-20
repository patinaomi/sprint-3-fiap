"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import TextReader from "../components/TextReader";

type FormDataChangeHandler = (name: string, value: string) => void;

export default function FormDescoberta() {
  const formRef = useRef<HTMLFormElement>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const [InformacoesFormulario, setInformacoesFormulario] = useState({
    nome: "",
    telefone: "",
    email: "",
    nomeEmpresa: "",
    segmento: "",
    conheceSalesforce: "",
    necessidadeEmpresa: "",
    produtoImplantado: "",
    empresaFuncionamento: "",
    estrategiasMarketing: "",
    iaAutomacoes: "",
    desenvolverEstrategia: "",
    melhorarComunicacao: "",
    ambienteIntegrado: "",
    aumentoProdutividade: "",
    melhorarCapacitacao: "",
    reducaoCusto: "",
    aumentarConversao: "",
    potencializarVendas: "",
    acelerarVendas: "",
    riquezaDados: "",
    melhorarExperiencia: "",
    mostrarDiferencial: "",
    criarJornada: "",
    mktOportunidade: "",
  });

  const handleFormDataChange: FormDataChangeHandler = (name, value) => {
    setInformacoesFormulario((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInformacoesFormulario({
      ...InformacoesFormulario,
      [name]: value,
    });
  };

  const saveDataToCSV = (InformacoesFormulario: any) => {
    console.log(InformacoesFormulario);

    const csvContent =
      "nome,telefone,email,nomeEmpresa,segmento,conheceSalesforce,necessidadeEmpresa,produtoImplantado,empresaFuncionamento,estrategiasMarketing,iaAutomacoes,desenvolverEstrategia,melhorarComunicacao,ambienteIntegrado,aumentoProdutividade,melhorarCapacitacao,reducaoCusto,aumentarConversao,potencializarVendas,acelerarVendas,riquezaDados,melhorarExperiencia,mostrarDiferencial,criarJornada,mktOportunidade\n" +
      `${InformacoesFormulario.nome},
      ${InformacoesFormulario.telefone},
      ${InformacoesFormulario.email},
      ${InformacoesFormulario.nomeEmpresa},
      ${InformacoesFormulario.segmento},
      ${InformacoesFormulario.conheceSalesforce},
      ${InformacoesFormulario.necessidadeEmpresa},
      ${InformacoesFormulario.produtoImplantado},
      ${InformacoesFormulario.empresaFuncionamento},
      ${InformacoesFormulario.estrategiasMarketing},
      ${InformacoesFormulario.iaAutomacoes},
      ${InformacoesFormulario.desenvolverEstrategia},
      ${InformacoesFormulario.melhorarComunicacao},
      ${InformacoesFormulario.ambienteIntegrado},
      ${InformacoesFormulario.aumentoProdutividade},
      ${InformacoesFormulario.melhorarCapacitacao},
      ${InformacoesFormulario.reducaoCusto},
      ${InformacoesFormulario.aumentarConversao},
      ${InformacoesFormulario.potencializarVendas},
      ${InformacoesFormulario.acelerarVendas},
      ${InformacoesFormulario.riquezaDados},
      ${InformacoesFormulario.melhorarExperiencia},
      ${InformacoesFormulario.mostrarDiferencial},
      ${InformacoesFormulario.criarJornada},
      ${InformacoesFormulario.mktOportunidade}, \n`;

    const link = document.createElement("a");
    link.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent);
    link.download = "form_data.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // saveDataToCSV(InformacoesFormulario);
    const dadosFormularioJson = JSON.stringify(InformacoesFormulario);
    localStorage.setItem("InformacoesFormulario", dadosFormularioJson);

    try {
      const response = await fetch(
        "http://localhost:8080/projetoTeste/rest/questionario/inserir",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: dadosFormularioJson,
        }
      );
      if (response.ok) {
        console.log("Dados enviados com sucesso!");
      } else {
        console.error("Falha ao enviar os dados.");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }

    if (currentStep < 7) {
      nextStep();
    } else {
      console.log("Enviando o formulário...", InformacoesFormulario);
      if (formRef.current !== null) {
        formRef.current.submit();
      }
    }
  };

  const nextStep = () => {
    console.log(InformacoesFormulario);
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo onChange={handleFormDataChange} />;
      case 2:
        return <CompanyInfo onChange={handleFormDataChange} />;
      case 3:
        return <ProductInfo onChange={handleFormDataChange} />;
      case 4:
        return <QuestInfoFirst onChange={handleFormDataChange} />;
      case 5:
        return <QuestInfoSecond onChange={handleFormDataChange} />;
      case 6:
        return <QuestInfoThird onChange={handleFormDataChange} />;
      case 7:
        return <QuestInfoFourth onChange={handleFormDataChange} />;
      default:
        return <PersonalInfo onChange={handleFormDataChange} />;
    }
  };

  return (
    <div className="grid grid-col lg:flex justify-start items-start dark:bg-gray-700 dark:text-white min-h-[100vh] md:min-h-[60vh]">
      <div className="flex flex-col gap-10 mb-10 md:mb-0 lg:max-w-xl p-6 items-center">
        <div className=" flex flex-col gap-5">
          <TextReader text=">Dê o próximo passo">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl uppercase">
              Dê o próximo passo
            </h2>
          </TextReader>

          <TextReader text="Para descobrir quais soluções podem catapultar sua empresa para o próximo nível, convidamos você a preencher nosso formulário de descoberta. Ao final, você receberá uma recomendação personalizada, adaptada às metas e desafios únicos do seu negócio, podendo ser uma combinação perfeita de um, dois ou todos os três módulos de CRM mencionados.">
            <p className="dark:text-white font-manrope text-lg md:text-xl leading-10 ">
              Para descobrir quais soluções podem catapultar sua empresa para o
              próximo nível, convidamos você a preencher nosso formulário de
              descoberta. Ao final, você receberá uma recomendação
              personalizada, adaptada às metas e desafios únicos do seu negócio,
              podendo ser uma combinação perfeita de um, dois ou todos os três
              módulos de CRM mencionados.
            </p>
          </TextReader>

          <TextReader text="Não perca esta oportunidade de aprimorar seu relacionamento com clientes e impulsionar o crescimento do seu negócio. Preencha o formulário agora e comece sua jornada para uma gestão de relacionamento com clientes sem precedentes.">
            <p className="dark:text-white font-manrope text-lg md:text-xl leading-10">
              Não perca esta oportunidade de aprimorar seu relacionamento com
              clientes e impulsionar o crescimento do seu negócio. Preencha o
              formulário agora e comece sua jornada para uma gestão de
              relacionamento com clientes sem precedentes.
            </p>
          </TextReader>
        </div>

        <div>
          <Image
            src="/assets/Details/imagem4.png"
            alt="Imagem sobre contato"
            width={300}
            height={500}
          />
        </div>
      </div>

      <div className="dark:bg-gray-700 border border-blue-400 rounded-md min-h-[100vh] w-full">
        <form
          ref={formRef}
          name="form-descoberta"
          method="post"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="grid md:flex justify-center items-center absolute"
        >
          <input type="hidden" name="form-name" value="form-descoberta" />
          <input type="hidden" name="nome" value={InformacoesFormulario.nome} />
          <input
            type="hidden"
            name="email"
            value={InformacoesFormulario.email}
          />
          <input
            type="hidden"
            name="telefone"
            value={InformacoesFormulario.telefone}
          />
          <input
            type="hidden"
            name="nomeEmpresa"
            value={InformacoesFormulario.nomeEmpresa}
          />
          <input
            type="hidden"
            name="segmento"
            value={InformacoesFormulario.segmento}
          />
          <input
            type="hidden"
            name="conheceSalesforce"
            value={InformacoesFormulario.conheceSalesforce}
          />
          <input
            type="hidden"
            name="necessidadeEmpresa"
            value={InformacoesFormulario.necessidadeEmpresa}
          />
          <input
            type="hidden"
            name="produtoImplantado"
            value={InformacoesFormulario.produtoImplantado}
          />
          <input
            type="hidden"
            name="empresaFuncionamento"
            value={InformacoesFormulario.empresaFuncionamento}
          />
          <input
            type="hidden"
            name="estrategiasMarketing"
            value={InformacoesFormulario.estrategiasMarketing}
          />
          <input
            type="hidden"
            name="iaAutomacoes"
            value={InformacoesFormulario.iaAutomacoes}
          />
          <input
            type="hidden"
            name="desenvolverEstrategia"
            value={InformacoesFormulario.desenvolverEstrategia}
          />
          <input
            type="hidden"
            name="melhorarComunicacao"
            value={InformacoesFormulario.melhorarComunicacao}
          />
          <input
            type="hidden"
            name="ambienteIntegrado"
            value={InformacoesFormulario.ambienteIntegrado}
          />
          <input
            type="hidden"
            name="aumentoProdutividade"
            value={InformacoesFormulario.aumentoProdutividade}
          />
          <input
            type="hidden"
            name="melhorarCapacitacao"
            value={InformacoesFormulario.melhorarCapacitacao}
          />
          <input
            type="hidden"
            name="reducaoCusto"
            value={InformacoesFormulario.reducaoCusto}
          />
          <input
            type="hidden"
            name="aumentarConversao"
            value={InformacoesFormulario.aumentarConversao}
          />
          <input
            type="hidden"
            name="potencializarVendas"
            value={InformacoesFormulario.potencializarVendas}
          />
          <input
            type="hidden"
            name="acelerarVendas"
            value={InformacoesFormulario.acelerarVendas}
          />
          <input
            type="hidden"
            name="riquezaDados"
            value={InformacoesFormulario.riquezaDados}
          />
          <input
            type="hidden"
            name="melhorarExperiencia"
            value={InformacoesFormulario.melhorarExperiencia}
          />
          <input
            type="hidden"
            name="mostrarDiferencial"
            value={InformacoesFormulario.mostrarDiferencial}
          />
          <input
            type="hidden"
            name="criarJornada"
            value={InformacoesFormulario.criarJornada}
          />
          <input
            type="hidden"
            name="mktOportunidade"
            value={InformacoesFormulario.mktOportunidade}
          />

          <div className="bg-white rounded-xl h-[600px] md:h-[550px] p-10 order-2 md:order-1 mb-20 md:mb-0">
            {renderStep()}
            <div className="flex justify-between">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="mt-4 bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded"
                >
                  Voltar
                </button>
              )}
              {currentStep < 7 && (
                <button
                  type="button"
                  onClick={nextStep}
                  className="mt-4 bg-[#064E8B] hover:bg-[#B3CEE5] text-white py-2 px-4 rounded"
                >
                  Próximo
                </button>
              )}
              {currentStep === 7 && (
                <button
                  className="mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
                  type="submit"
                >
                  Enviar
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

interface PersonalInfoProps {
  onChange: FormDataChangeHandler;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ onChange }) => {
  return (
    <div className="mb-5">
      <h2 className="text- font-semibold leading- uppercase text-blue-900">
        Informações pessoais
      </h2>

      <div className="mt-5 flex gap-x-1 gap-y-6  flex-col">
        <div className="sm:col-span-3">
          <label
            htmlFor="nome"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nome completo
          </label>

          <div className="mt-2">
            <input
              type="text"
              name="nome"
              id="nome"
              autoComplete="nome"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="telefone"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Telefone
          </label>

          <div className="mt-2">
            <input
              type="number"
              name="telefone"
              id="telefone"
              autoComplete="telefone"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email para contato
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface CompanyInfoProps {
  onChange: FormDataChangeHandler;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ onChange }) => {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold leading-7 text-blue-900 mt-10 uppercase">
        Informações sobre a empresa
      </h2>

      <div className="mt-5 flex-col md:block md:grid-cols-1 md:gap-x-6 md:gap-y-5 ">
        <div className="col-span-full">
          <label
            htmlFor="nomeEmpresa"
            className="block text-sm font-medium leading-2 text-gray-900"
          >
            Nome da empresa
          </label>

          <div className="mt-2">
            <input
              type="text"
              name="nomeEmpresa"
              id="nomeEmpresa"
              autoComplete="nomeEmpresa"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label
            htmlFor="segmento"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Segmento de atuação
          </label>

          <div className="mt-2">
            <input
              type="text"
              name="segmento"
              id="segmento"
              autoComplete="segmento"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="conheceSalesforce"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Possui conhecimento sobre os produtos da SalesForce?
          </label>

          <div className="mt-2">
            <select
              id="conheceSalesforce"
              name="conheceSalesforce"
              autoComplete="conheceSalesforce"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Qual a necessidade da empresa?
          </label>

          <textarea
            id="necessidadeEmpresa"
            name="necessidadeEmpresa"
            rows={5}
            className="block p-2 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Comente..."
            onChange={(e) => onChange(e.target.name, e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

interface ProductInfoProps {
  onChange: FormDataChangeHandler;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ onChange }) => {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold leading-7uppercase text-blue-900 mt-10">
        Produtos
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:flex-col">
        <div className="sm:col-span-3">
          <label htmlFor="produtoImplantado">
            A empresa possui algum produto implantado hoje?
          </label>

          <div className="mt-2">
            <select
              id="produtoImplantado"
              name="produtoImplantado"
              autoComplete="produtoImplantado"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="empresaFuncionamento">
            Quais produtos sua empresa tem em funcionamento hoje?
          </label>

          <div className="mt-2">
            <select
              id="empresaFuncionamento"
              name="empresaFuncionamento"
              autoComplete="empresaFuncionamento"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

interface QuestProps {
  onChange: FormDataChangeHandler;
}

const QuestInfoFirst: React.FC<QuestProps> = ({ onChange }) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h2 className="text-lg font-semibold leading-7uppercase text-blue-900 mt-10">
        Questões principais
      </h2>

      <p>
        Nesta etapa, você responderá a um total de 16 perguntas. Ao final, será
        indicado um ou mais produtos ideais para a sua empresa.
      </p>

      <p>
        Para cada pergunta, selecione um número de 1 a 4, onde 1 indica que o
        item não é importante e 4 indica que é muito importante.
      </p>

      <div className="mt-5 flex flex-col gap-x-6 gap-y-5 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="estrategiasMarketing">
            Estratégias de marketing mais eficientes que mostrem nossa marca
            para nosso público alvo
          </label>

          <div className="mt-2">
            <select
              id="estrategiasMarketing"
              name="estrategiasMarketing"
              autoComplete="estrategiasMarketing"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="iaAutomacoes">
            IA e automações para auxiliar nas atividades operacionais
          </label>

          <div className="mt-2">
            <select
              id="iaAutomacoes"
              name="iaAutomacoes"
              autoComplete="iaAutomacoes"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="desenvolverEstrategia">
            Desenvolver estratégias de atendimento eficientes
          </label>

          <div className="mt-2">
            <select
              id="desenvolverEstrategia"
              name="desenvolverEstrategia"
              autoComplete="desenvolverEstrategia"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="melhorarComunicacao">
            Melhorar a comunicação entre nossos clientes e nossa equipe de
            atendimento
          </label>

          <div className="mt-2">
            <select
              id="melhorarComunicacao"
              name="melhorarComunicacao"
              autoComplete="melhorarComunicacao"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

interface QuestPropsSecond {
  onChange: FormDataChangeHandler;
}

const QuestInfoSecond: React.FC<QuestPropsSecond> = ({ onChange }) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h2 className="text-lg font-semibold leading-7uppercase text-blue-900 mt-10">
        Questões - Segunda fase
      </h2>

      <div className="mt-5 flex flex-col gap-x-6 gap-y-5 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="ambienteIntegrado">
            Ambiente integrado para manter as equipes 100% entrosadas
          </label>

          <div className="mt-2">
            <select
              id="ambienteIntegrado"
              name="ambienteIntegrado"
              autoComplete="ambienteIntegrado"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="aumentoProdutividade">
            Aumento da produtividade da equipe
          </label>

          <div className="mt-2">
            <select
              id="aumentoProdutividade"
              name="aumentoProdutividade"
              autoComplete="aumentoProdutividade"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="melhorarCapacitacao">
            Melhorar a capacitação das equipes de CRM
          </label>

          <div className="mt-2">
            <select
              id="melhorarCapacitacao"
              name="melhorarCapacitacao"
              autoComplete="melhorarCapacitacao"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="reducaoCusto">
            Redução no custo de suporte e atendimento ao clientes
          </label>

          <div className="mt-2">
            <select
              id="reducaoCusto"
              name="reducaoCusto"
              autoComplete="reducaoCusto"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

interface QuestPropsThird {
  onChange: FormDataChangeHandler;
}

const QuestInfoThird: React.FC<QuestPropsThird> = ({ onChange }) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h2 className="text-lg font-semibold leading-7uppercase text-blue-900 mt-10">
        Questões - Terceira fase
      </h2>

      <div className="mt-5 flex flex-col gap-x-6 gap-y-5 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="aumentarConversao">
            Aumentar a conversão da loja virtual
          </label>

          <div className="mt-2">
            <select
              id="aumentarConversao"
              name="aumentarConversao"
              autoComplete="aumentarConversao"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="potencializarVendas">
            Potencializar as vendas em canais online como loja virtual, whatsapp
            entre outros.
          </label>

          <div className="mt-2">
            <select
              id="potencializarVendas"
              name="potencializarVendas"
              autoComplete="potencializarVendas"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="acelerarVendas">
            Acelerar e aumentar as vendas através de dados e ferramentas
            qualificadas
          </label>

          <div className="mt-2">
            <select
              id="acelerarVendas"
              name="acelerarVendas"
              autoComplete="acelerarVendas"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="riquezaDados">
            Riqueza de dados para análise integrada do nosso time de vendas
          </label>

          <div className="mt-2">
            <select
              id="riquezaDados"
              name="riquezaDados"
              autoComplete="riquezaDados"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

interface QuestPropsFourth {
  onChange: FormDataChangeHandler;
}

const QuestInfoFourth: React.FC<QuestPropsFourth> = ({ onChange }) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h2 className="text-lg font-semibold leading-7uppercase text-blue-900 mt-10">
        Questões - Quarta fase
      </h2>

      <div className="mt-5 flex flex-col gap-x-6 gap-y-5 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="melhorarExperiencia">
            Melhorar a experiência do cliente com uma equipe de atendimento
            assertiva por meio de ferramentas eficazes
          </label>

          <div className="mt-2">
            <select
              id="melhorarExperiencia"
              name="melhorarExperiencia"
              autoComplete="melhorarExperiencia"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="mostrarDiferencial">
            Mostrar os diferenciais da minha marca para os clientes que desejo
            obter
          </label>

          <div className="mt-2">
            <select
              id="mostrarDiferencial"
              name="mostrarDiferencial"
              autoComplete="mostrarDiferencial"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="criarJornada">
            Criar jornadas personalizadas na segmentação dos nossos clientes
            entendendo quem são e o que querem
          </label>

          <div className="mt-2">
            <select
              id="criarJornada"
              name="criarJornada"
              autoComplete="criarJornada"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="mktOportunidade">
            Marketing de oportunidade eficiente, base forte e preparada para o
            mercado.
          </label>

          <div className="mt-2">
            <select
              id="mktOportunidade"
              name="mktOportunidade"
              autoComplete="mktOportunidade"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            >
              <option>Selecione uma opção</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};