/* Preciso chamar o use client para simular visão do cliente, sem ele da erro*/
'use client'

/* Importação do CSS */
import './style.css'

/* Importar UseState*/
import { useState } from 'react'
import Link from 'next/link'

/* Importar imagem */
import imagem from '../../../public/assets/FormularioContato/undraw_shopping_re_3wst.svg'
import imagem2 from '../../../public/assets/FormularioContato/salesforce-logo.svg'

/* Função principal */
export default function FormularioVocacional() {

    /* Ao preencher o formulário de cadastro, será baixado o arquivo para manipulação em Python */

    const [formDados, setFormDados ] = useState({
        nome: '',
        telefone:'',
        email:'',
        setorAtuacao:'',
        cargo:'',
        publicoAlvo:'',
        principaisDesafios:'',
        principaisObjetivos:'',
        areaConexao:'',
        processosOtimizar:'',
        tipoConexao:'',
        pessoaProcesso:'',
        sistemasUtilizados:'',
        local:'',
        processosManuais:'',
        usoCRM:'',
        conhecimentoIntegracoes:'',
        preferencias:'',

    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormDados({
            ...formDados,
            [name]: value
        });
    };

    /* Para salvar as informações em csv */
    const saveDataToCSV = (formDados: any) => {
        /* Verificar as informações antes de baixar */
        console.log(formDados);
    
        const csvContent = "Nome,Sobrenome,Email,Telefone,Senha,ConfirmacaoSenha,Genero,Empresa\n" +
            `${formDados.nome},
            ${formDados.telefone},
            ${formDados.email},
            ${formDados.setorAtuacao},
            ${formDados.cargo},
            ${formDados.publicoAlvo},
            ${formDados.principaisDesafios},
            ${formDados.principaisObjetivos},
            ${formDados.areaConexao},
            ${formDados.processosOtimizar},
            ${formDados.tipoConexao},
            ${formDados.pessoaProcesso},
            ${formDados.sistemasUtilizados},
            ${formDados.local},
            ${formDados.processosManuais},
            ${formDados.usoCRM},
            ${formDados.conhecimentoIntegracoes},
            ${formDados.preferencia}\n`;
    
        const link = document.createElement('a');
        link.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
        link.download = 'form_data.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    

    const handleSubmit = (e:any) => {
        e.preventDefault();

        /* Chama a função para salvar os dados em CSV*/
        saveDataToCSV(formDados);
    };

    return (

        <div className="container-necessidade">
            
            <div className="form-image-necessidade">

                <div>
                    <img className='imagem-pagina-necessidade-sales' src={imagem2.src} alt="Logo do Tokito Tech" />
                </div>

                <div>
                    <img className='imagem-pagina-necessidade' src={imagem.src} alt="Logo da Sales Force" />
                </div>

            </div> {/* Fim da div form-image */}
            
            <div className="form-necessidade">
              
                <form className='formulario-necessidade' action="#" onSubmit={handleSubmit}>
                    
                    <div className='container-info-inputs-necessidade'> 
                    
                        <div className="form-header-necessidade">
                            
                            <div className="title-pagina-necessidade">
                                <h1>Formulário de necessidade</h1>
                            </div> {/* Fim da div title*/}

                            <div className="login-button-pagina-necessidade">
                                <Link href="/FormularioContato">
                                    <button className='botao-contato-form-necessidade'>Contato</button>
                                </Link>
                            </div> {/* Fim da div login-button */}

                        </div> {/* Fim da div form-header */}
                        
                        <div className="box-info-pessoais-necessidade">

                            <div className='titulo-box-info-pessoais'>
                                <h1 className='titulo-dados-necessidade'>Dados pessoais</h1>
                            </div>

                            <div className='campos-inputs-necessidade'>

                                <div className="input-box-necessidade">

                                    <label className='label-form-necessidade' htmlFor="nome">Nome</label>
                                    <input className='input-form-necessidade' id="nome" type="text" name="nome" placeholder="Digite seu primeiro nome" required value={formDados.nome} onChange={handleChange} />

                                </div> {/* Fim div input-box-necessidade*/}

                                <div className="input-box-necessidade">

                                    <label className='label-form-necessidade' htmlFor="telefone">Telefone</label>
                                    <input className='input-form-necessidade' id="telefone" type="tel" name="telefone" placeholder="(XX) XXXXX-XXXX" required value={formDados.telefone} onChange={handleChange} />

                                </div> {/* Fim div input-box-necessidade */}

                                <div className="input-box-necessidade">

                                    <label className='label-form-necessidade' htmlFor="email">Email</label>
                                    <input className='input-form-necessidade' id="email" type="mail" name="email" placeholder="name@gmail.com" required value={formDados.email} onChange={handleChange} />

                                </div> {/* Fim div input-box-necessidade */}

                            </div>

                        </div>

                        <div className="box-info-produtos-necessidade">
                            
                            <div className='titulo-box-info-pessoais'>
                                <h1 className='titulo-dados-necessidade'>Setor de atuação</h1>
                            </div>

                            <div className='campos-inputs-necessidade'>

                                <div className='grupo-selecoes-form-necessidade'>
                                    <label className='label-form-necessidade' htmlFor="InputCargo" >Setor de atuação</label>

                                    <select className="form-select-necessidade" aria-label="produto" name='setorAtuacao' value={formDados.setorAtuacao} onChange={handleChange}>
                                        <option value="setorAtuacao">Selecione</option>
                                        <option value="Vendas">Vendas</option>
                                        <option value="Atendimento ao cliente">Atendimento ao cliente</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="BI">BI</option>
                                        <option value="Serviços">Serviços</option>
                                        <option value="Finanças">Finanças</option>
                                    </select>

                                </div>

                                <div className="input-box-necessidade">
                                                
                                    <label className='label-form-necessidade' htmlFor="InputCargo" >Cargo de atuação</label>
                                    
                                    <input className='input-form-necessidade' type="text" id="InputCargo" name='cargo' placeholder="Digite aqui" value={formDados.cargo} onChange={handleChange} />
                                </div> {/* Fim div input-box-necessidade */}

                                <div className="input-box-necessidade">
                                                
                                    <label className='label-form-necessidade' htmlFor="IputPublico" >Público alvo</label>
                                    
                                    <input className='input-form-necessidade' type="text" id="InputPublicoAlvo" name='PublicoAlvo' placeholder="Digite aqui" value={formDados.publicoAlvo} onChange={handleChange} />
                                </div> {/* Fim div input-box-necessidade */}

                            </div>   {/* Fim div campos-inputs-necessidade */}

                        </div> {/* Fim div box-info-produtos-necessidade  */}

                        <div className="box-info-desafios-necessidade">
                            
                            <div className='titulo-box-info-pessoais'>
                                <h1 className='titulo-dados-necessidade'>Desafios</h1>
                            </div>

                            <div className='campos-inputs-necessidade'>

                                <div className='input-box-necessidade'>
                                    
                                    <label className='label-form-necessidade' htmlFor="InputPrincipaisDesafios" >Desafio encontrados</label>

                                    <input className='input-form-necessidade' type="text" id="InputDesafios" name='desafios' placeholder="Digite aqui" value={formDados.principaisDesafios} onChange={handleChange} />

                                </div>

                                <div className="input-box-necessidade">
                                                
                                    <label className='label-form-necessidade' htmlFor="InputCargo" >Principais objetivos</label>
                                    
                                    <input className='input-form-necessidade' type="text" id="InputObjetivos" name='PrincipaisObjetivos' placeholder="Digite aqui" value={formDados.principaisObjetivos} onChange={handleChange} />

                                </div> {/* Fim div input-box-necessidade */}

                                <div className="input-box-necessidade">
                                                
                                    <label className='label-form-necessidade' htmlFor="IputPublico" >Área que deseja integrar com soluções</label>
                                    
                                    <input className='input-form-necessidade' type="text" id="InputPublicoAlvo" name='PublicoAlvo' placeholder="Digite aqui" value={formDados.areaConexao} onChange={handleChange} />
                                </div> {/* Fim div input-box-necessidade */}
                                

                            </div>   {/* Fim div campos-inputs-necessidade */}

                        </div> {/* Fim div box-info-produtos-necessidade  */}

                        <div className="box-info-processos-necessidade">
                            
                            <div className='titulo-box-info-pessoais'>
                                <h1 className='titulo-dados-necessidade'>Processos e Necessidades</h1>
                            </div>

                            <div className='campos-inputs-necessidade'>

                                <div className='grupo-selecoes-form-necessidade'>
                                    
                                    <label className='label-form-necessidade' htmlFor="InputCargo" >Quais processos deseja otimizar?</label>

                                    <select className="form-select-necessidade" aria-label="processos" name='ProcessosOtimizar' value={formDados.processosOtimizar} onChange={handleChange}>
                                    
                                        <option value="ProcessosOtimizados">Selecione</option>
                                        <option className='textos-opcoes-lista' value="Gestao de Leads">Gestão de Leads</option>
                                        <option value="Automacao">Automação</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Gestao de venda">Gestão de venda</option>
                                        <option value="Atendimento ao cliente">Atendimento ao cliente</option>
                                        <option value="Gestao financeira">Gestão financeira</option>
                                    </select>

                                </div>

                                <div className="input-box-necessidade">
                                                
                                    <label className='label-form-necessidade' htmlFor="InputProcessosNecessidades" >Deseja integrar quais módulos?</label>
                                    
                                    <select className="form-select-necessidade" aria-label="processos" name='processos' value={formDados.processosOtimizar} onChange={handleChange}>

                                        <option value="ProcessosOtimizados">Selecione</option>
                                        <option value="pessoaProcesso">Financeiro</option>
                                        <option value="Gestores">Marketing</option>
                                        <option value="Analistas">Comercial</option>
                                        <option value="Assistentes">IA</option>
                                        <option value="Devs">Desenvolvimento</option>
                                        <option value="Todos">Todos</option>

                                    </select>

                                </div> {/* Fim div input-box-necessidade */}

                                <div className='grupo-selecoes-form-necessidade'>
                                    
                                    <label className='label-form-necessidade' htmlFor="pessoasProcessos" >Pessoas envolvidas no processo</label>

                                    <select className="form-select-necessidade" aria-label="pessoasProcessos" name='pessoasProcessos' value={formDados.pessoaProcesso} onChange={handleChange}>

                                        <option value="ProcessosOtimizados">Selecione</option> 
                                        <option value="Gestores">Gestores</option>
                                        <option value="Analistas">Analistas</option>
                                        <option value="Assistentes">Assistentes</option>
                                        <option value="Devs">Devs</option>
                                        <option value="Todos">Todos</option>

                                    </select>

                                </div>

                                <div className='grupo-selecoes-form-necessidade'>
                                    
                                    <label className='label-form-necessidade' htmlFor="sistemasUtilizados" >Ferramentas utilizadas nas atividades</label>

                                    <select className="form-select-necessidade" aria-label="sistemasUtilizados" name='sistemasUtilizados' value={formDados.sistemasUtilizados} onChange={handleChange}>

                                        <option value="Sistemas">Selecione</option>
                                        <option value="Excel">Excel</option>
                                        <option value="ERP">ERP</option>
                                        <option value="CRM">CRM</option>
                                        <option value="Automacao">Software de Automações</option>
                                        <option value="Sistema de suporte ao cliente">Sistema de suporte ao cliente</option>

                                    </select>

                                </div>

                                <div className='grupo-selecoes-form-necessidade'>
                                    
                                    <label className='label-form-necessidade' htmlFor="localHospedagem" >Local de hospedagem dos arquivos</label>

                                    <select className="form-select-necessidade" aria-label="localHospedagem" name='localHospedagem' value={formDados.local} onChange={handleChange}>

                                        <option value="Local">Selecione</option>
                                        <option value="Nuvem">Nuvem</option>
                                        <option value="Local">Local</option>

                                    </select>

                                </div>

                                <div className='grupo-selecoes-form-necessidade'>
                                    
                                    <label className='label-form-necessidade' htmlFor="processosManuais" >Existem processos manuais?</label>

                                    <select className="form-select-necessidade" aria-label="processosManuais" name='processosManuais' value={formDados.processosManuais} onChange={handleChange}>

                                        <option value="Processos manuais">Selecione</option>
                                        <option value="Sim">Sim</option>
                                        <option value="Nao">Não</option>

                                    </select>

                                </div>

                            </div>   {/* Fim div campos-inputs-necessidade */}

                        </div> {/* Fim div box-info-produtos-necessidade  */}

                        <div className="box-info-experiencia-necessidade">
                            
                            <div className='titulo-box-info-pessoais'>
                                <h1 className='titulo-dados-necessidade'>Experiências e Preferências</h1>
                            </div>

                            <div className='campos-inputs-necessidade'>

                                <div className='grupo-selecoes-form-necessidade'>
                                    
                                    <label className='label-form-necessidade' htmlFor="utilizacaoCRM" >Já utilizou algum CRM antes?</label>

                                    <select className="form-select-necessidade" aria-label="utilizacaoCRM" name='utilizacaoCRM' value={formDados.usoCRM} onChange={handleChange}>
                                    
                                        <option value="Ja utilizou algum CRM antes" >Selecione</option>
                                        <option value="Sim">Sim</option>
                                        <option value="Nao">Não</option>

                                    </select>

                                </div>

                                <div className="input-box-necessidade">
                                                
                                    <label className='label-form-necessidade' htmlFor="InputProcessosNecessidades" >Conhece sobre integração de sistemas?</label>
                                    
                                    <select className="form-select-necessidade" aria-label="conhecimentoIntegracao" name='conhecimentoIntegracao' value={formDados.conhecimentoIntegracoes} onChange={handleChange}>

                                        <option value="integracao de sistemas">Selecione</option>
                                        <option value="Sim">Sim</option>
                                        <option value="Nao">Não</option>

                                    </select>

                                </div> {/* Fim div input-box-necessidade */}

                                <div className='grupo-selecoes-form-necessidade'>
                                    
                                    <label className='label-form-necessidade' htmlFor="pessoasProcessos" >Alguma preferência sobre a interface do usuário?</label>

                                    <select className="form-select-necessidade" aria-label="pessoasProcessos" name='pessoasProcessos' value={formDados.preferencias} onChange={handleChange}>

                                        <option value="Alguma preferencia sobre a interface do usuario?">Selecione</option>
                                        <option value="Sim">Sim</option>
                                        <option value="Nao">Não</option>

                                    </select>

                                </div>


                            </div>   {/* Fim div campos-inputs-necessidade */}

                        </div> {/* Fim div box-info-produtos-necessidade  */}

                    </div>

                    <div className="continue-button-necessidade">
                        <button className='botao-continuar-necessidade' type="submit">Continuar</button>
                    </div> {/* Fim da div continue-button */}

                </form>


                    

            </div>
        </div> /* Fim da div container-cadastro*/ 

    );

}