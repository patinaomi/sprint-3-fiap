/* Preciso chamar o use client para simular visão do cliente, sem ele da erro*/
'use client'

/* Importação do CSS */
import './style.css'

/* Importar UseState*/
import { useState } from 'react'

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

        <div className='container-formulario-necessidade'>
            
                <div className='texto-descritivo-formulario'>
                    <h1>Formulário de Necessidade</h1>
                </div> {/* Fim da div texto-descritivo-formulario  */}

                <div className='formulario-contato'>

                    <div className='sobre-formulario'>
                                <h1 className='subtitulo-pagina-formulario'>Sobre esse formulário:</h1>
                                <p className='frase-razao-formulario'>Se você não conhece sobre o que é CRM ou as melhores soluções para sua empresa, responda o questionário abaixo para te conhecermos melhor e te direcionar com as melhores soluções. Teremos uma IA e um time comprometido para entender suas necessidades e preocupações.</p>
                    </div> {/* Fim da div sobre-formulario */}
                    
                    <div className='container-formulario-secundario'>
                        
                        <form action="" onSubmit={handleSubmit}>

                            <div className='subtitulo-pagina'>
                                <h2 className='subtitulo-pagina-formulario'>Identificação</h2>
                            </div> {/* Fim da div subtitulo-pagina */}

                            <div className='box-dados-indentificao'>
                               
                               <div className="dados-indentificao">
                                    
                                    <label htmlFor="InputFirstName" className="form-label"></label>
                                    
                                    <input type="text" className="form-control" id="InputFirstName" name='nome' placeholder="Nome completo" required value={formDados.nome} onChange={handleChange}/>
                                </div> {/* Fim da div dados-indentificao */}
    
                                <div className="dados-indentificao">
                                    
                                    <label htmlFor="InputTelefone" className="form-label"></label>
                                    
                                    <input type="number" className="form-control"  id="InputTelefone" name='telefone' placeholder="Telefone" value={formDados.telefone} onChange={handleChange} />
                                </div> {/* Fim da div dados-indentificao */}

                                <div className="dados-indentificao">
                                    
                                    <label htmlFor="InputEmail" className="form-label"></label>
                                    
                                    <input type="mail" className="form-control" id="InputEmail" name='email' placeholder="E-mail" value={formDados.email} onChange={handleChange} />
                                </div> {/* Fim da div dados-indentificao */}

                            </div> {/* Fim da div box-dados-indentificao */}

                            <div className='subtitulo-formulario'>
                                <h2 className='subtitulo-pagina-formulario'>Setor de  atuação:</h2>
                            </div> {/* Fim da div subtitulo-formulario */}


                            <div className='box-dados-setor-atuacao'>
                                
                                <div className="dados-produtos">
                                    
                                    <select className="form-select" aria-label="produto" name='setorAtuacao' value={formDados.setorAtuacao} onChange={handleChange}>
                                        <option value="setorAtuacao">Setor de Atuação</option>
                                        <option value="Vendas">Vendas</option>
                                        <option value="Atendimento ao cliente">Atendimento ao cliente</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="BI">BI</option>
                                        <option value="Serviços">Serviços</option>
                                        <option value="Finanças">Finanças</option>
                                    </select>
                                </div>   {/* Fim da div dados-produtos */}

                                <div className="dados-setor-atuacao">
                                        
                                        <label htmlFor="InputCargo" className="form-label"></label>
                                        
                                        <input type="text" className="form-control" id="InputCargo" name='cargo' placeholder="Cargo" value={formDados.cargo} onChange={handleChange} />
                                </div> {/* Fim da div dados-setor-atuacao */}

                                <div className="dados-setor-atuacao">
                                        
                                        <label htmlFor="" className="form-label"></label>
                                        
                                        <input type="text" className="form-control" id="InputPublicoAlvo" name='publicoAlvo' placeholder="Publico alvo" value={formDados.publicoAlvo} onChange={handleChange} />
                                </div> {/* Fim da div dados-setor-atuacao */}

                            </div> {/* Fim da div box-dados-setor-atuacao */}

                            <div className='subtitulo-formulario'>
                                <h2 className='subtitulo-pagina-formulario'>Desafios e objetivos:</h2>
                            </div>  {/* Fim da div subtitulo-formulario */}

                            <div className='box-desafios'>
                                
                                <div className="dados-desafios">
                                    
                                    <label htmlFor="" className="form-label"></label>
                                    
                                    <input type="text" className="form-control" id="InputDesafios" name='principaisDesafios' placeholder="Principais desafios?" value={formDados.principaisDesafios} onChange={handleChange} />

                                </div> {/* Fim da div dados-desafios */}

                                <div className="dados-desafios">
                                    
                                    <label htmlFor="" className="form-label"></label>
                                    
                                    <input type="text" className="form-control" id="InputObjetivos" name='principaisObjetivos' placeholder="Principais objetivos" value={formDados.principaisObjetivos} onChange={handleChange}  />
                                </div> {/* Fim da div dados-desafios */}

                                <div className="dados-desafios">
                                    
                                    <label htmlFor="" className="form-label"></label>
                                    
                                    <input type="text" className="form-control" id="InputAreas" name='areaConexao' placeholder="Quais áreas desejas conectar" value={formDados.areaConexao} onChange={handleChange} />
                                </div> {/* Fim da div dados-desafios */}
                            
                            </div> {/* Fim da div box-desafios */}

                            <div className='subtitulo-pagina'>
                                <h2 className='subtitulo-pagina-formulario'>Processos e Necessidades:</h2>
                            </div> {/* Fim da div subtitulo-pagina */}

                            <div className='box-dados-processos-necessidades'>
                               
                               <div className='box-processos'>
                                    <div className="dados-processos-necessidades">
                                        
                                        <select className="form-select-processos-necessidades" aria-label="processos-necessidades" name='processosOtimizar' value={formDados.processosOtimizar} onChange={handleChange}>
                                            <option value="ProcessosOtimizados">Quais processos deseja otimizar?</option>
                                            <option value="Gestao de Leads">Gestão de Leads</option>
                                            <option value="Automacao">Automação</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Gestao de venda">Gestão de venda</option>
                                            <option value="Atendimento ao cliente">Atendimento ao cliente</option>
                                            <option value="Gestao financeira">Gestão financeira</option>
                                        </select>
                                    </div>  {/* Fim da div dados-processos-necessidades */}

                                <div className="dados-processos-necessidades">
                                        
                                        <label htmlFor="InputProcessosNecessidades" className="form-label"></label>
                                        
                                        <input type="text" className="form-control" id="InputIntegracaoConexoes" name='tipoConexao' placeholder="Tipo de conexão ou integrações deseja estabelecer" required value={formDados.tipoConexao} onChange={handleChange} />
                                    </div> {/* Fim da div dados-processos-necessidades */}

                                    <div className="dados-processos-necessidades">
                                        <select className="form-select-processos-necessidades" aria-label="processos-necessidades" name='pessoaProcesso' value={formDados.pessoaProcesso} onChange={handleChange}>
                                            <option value="pessoaProcesso">Pessoas no processo</option>
                                            <option value="Gestores">Gestores</option>
                                            <option value="Analistas">Analistas</option>
                                            <option value="Assistentes">Assistentes</option>
                                            <option value="Devs">Devs</option>
                                            <option value="Todos">Todos</option>
                                        </select>
                                    </div> {/* Fim da div dados-processos-necessidades */}
                                </div> {/* Fim da div box-processos */}
                            
                                <div className='box-necessidade'>
                                    <div className="dados-processos-necessidades">
                                        
                                        <select className="form-select-processos-necessidades" aria-label="processos-necessidades" name='sistemasUtilizados' value={formDados.sistemasUtilizados} onChange={handleChange}>
                                            <option value="Sistemas">Sistemas e ferramentas que sua empresa utiliza</option>
                                            <option value="Excel">Excel</option>
                                            <option value="ERP">ERP</option>
                                            <option value="CRM">CRM</option>
                                            <option value="Automacao">Software de Automações</option>
                                            <option value="Sistema de suporte ao cliente">Sistema de suporte ao cliente</option>
                                        </select>

                                    </div> {/* Fim da div dados-processos-necessidades */}

                                    <div className="dados-processos-necessidades">
                                        
                                        <select className="form-select-processos-necessidades" aria-label="processos-necessidades" name='local' value={formDados.local} onChange={handleChange}>
                                            <option value="Local">Local das aplicações</option>
                                            <option value="Nuvem">Nuvem</option>
                                            <option value="Local">Local</option>
                                        </select>

                                    </div> {/* Fim da div dados-processos-necessidades */}

                                    <div className="dados-processos-necessidades">
                                        
                                        <select className="form-select-processos-necessidades" aria-label="processos-necessidades" name='processosManuais' value={formDados.processosManuais} onChange={handleChange}>
                                            <option value="Processos manuais">Existe processos manuais?</option>
                                            <option value="Sim">Sim</option>
                                            <option value="Nao">Não</option>
                                        </select>

                                    </div> {/* Fim da div dados-processos-necessidades */}
                                </div>
                            </div> {/* Fim da div box-dados-processos-necessidades */}

                            <div className='subitulo-pagina'>
                                <h2 className='subtitulo-pagina-formulario'>Experiência e Preferências:</h2>
                            </div> {/* Fim da div subitulo-pagina */}

                            <div className="box-dados-experiencia-preferencias">
                                
                                <div className="dados-experiencia-preferencias">
                                    
                                    <select className="form-select" aria-label="processos-necessidades" name='usoCRM' value={formDados.usoCRM} onChange={handleChange}>
                                        <option value="Ja utilizou algum CRM antes" >Já utilizou algum CRM antes?</option>
                                        <option value="Sim">Sim</option>
                                        <option value="Nao">Não</option>
                                    </select>

                                </div>  {/* Fim da div dados-experiencia-preerencias */}

                                <div className="dados-experiencia-preferencias">
                                    
                                    <select className="form-select" aria-label="processos-necessidades" name='conhecimentoIntegracoes' value={formDados.conhecimentoIntegracoes} onChange={handleChange}>
                                        <option value="integracao de sistemas">Conhece sobre integração de sistemas?</option>
                                        <option value="Sim">Sim</option>
                                        <option value="Nao">Não</option>
                                    </select>

                                </div> {/* Fim da div dados-experiencia-preerencias */}

                                <div className="dados-experiencia-preferencias">
                                    
                                    <select className="form-select" aria-label="processos-necessidades" name='preferencias' value={formDados.preferencias} onChange={handleChange}>
                                        <option value="Alguma preferencia sobre a interface do usuario?">Alguma preferência sobre a interface do usuário?</option>
                                        <option value="Sim">Sim</option>
                                        <option value="Nao">Não</option>
                                    </select>

                                </div> {/* Fim da div dados-experiencia-preerencias */}

                            </div> {/* Fim da div box-experiencia-preerencias */}

                            <div className='botao-formulario'>
                                <button type='submit' className='btn-formulario'>Enviar</button>
                            </div> {/* Fim da div botao-formulario */}

                    </form>
                    </div> {/* Fim da div formulario-contato  */}

                </div> {/* Fim da div formulario-contato  */}

                
        </div> /* Fim da div container-formulario-necessidade */
        

    );

}