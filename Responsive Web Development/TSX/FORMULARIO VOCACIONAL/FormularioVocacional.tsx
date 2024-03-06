import './StyleFormularioVocacional.css'


export default function FormularioVocacional() {

    return (

    
        <div className='container'>
            
                <div className='texto-descritivo-formulario'>
                    <h1>Fomulário Vocacional</h1>
                </div>

                <div className='formulario-contato'>
                    
                    <div>
                        <form action="">

                            <div>
                            <h1 className='Subtitulo-pagina-formulario'>Sobre esse formulário:</h1>
                            <p className='frase-razao-formulario'>Se você não conhece sobre o que é CRM ou as melhores soluções para sua empresa, responda o questionário abaixo para te conhecermos melhor e te direcionar com as melhores soluções. Teremos uma IA e um time comprometido para entender suas necessidades e preocupações.</p>
                            </div>

                            <div>
                                <h2 className='Subtitulo-pagina-formulario'>Identificação:</h2>
                            </div>

                            <div className='box-dados-indentificao'>
                               
                               <div className="dados-indentificao">
                                    <label htmlFor="InputFirstName" className="form-label"></label>
                                    <input type="text" className="form-control" id="InputFirstName" placeholder="Nome completo" required />
                                </div>
    

                                <div className="dados-indentificao">
                                    <label htmlFor="InputTelefone" className="form-label"></label>
                                    <input type="number" className="form-control"  id="InputTelefone" placeholder="Telefone" />
                                </div>

                                <div className="dados-indentificao">
                                    <label htmlFor="InputEmail" className="form-label"></label>
                                    <input type="mail" className="form-control" id="InputEmail" placeholder="E-mail" />
                                </div>

                            </div>

                            <div>
                                <h2 className='Subtitulo-pagina-formulario'>Setor de  atuação:</h2>
                            </div>


                            <div className='box-dados-setor-atuacao'>
                                
                                <div className="dados-produtos">
                                    <select className="form-select" aria-label="produto">
                                        <option selected>Setor de Atuação</option>
                                        <option value="1">Vendas</option>
                                        <option value="2">Atendimento ao cliente</option>
                                        <option value="3">Marketing</option>
                                        <option value="3">BI</option>
                                        <option value="3">Serviços</option>
                                        <option value="3">Finanças</option>
                                    </select>
                                </div>

                                <div className="dados-setor-atuacao">
                                        <label htmlFor="InputCargo" className="form-label"></label>
                                        <input type="text" className="form-control" id="InputCargo" placeholder="Cargo" />
                                </div>

                                <div className="dados-setor-atuacao">
                                        <label htmlFor="" className="form-label"></label>
                                        <input type="text" className="form-control" id="InputPublicoAlvo" placeholder="Publico alvo" />
                                </div>
                            </div>

                            <div>
                                <h2 className='Subtitulo-pagina-formulario'>Desafios e objetivos:</h2>
                            </div>

                            <div className='box-desafios'>
                                
                                <div className="dados-desafios">
                                    <label htmlFor="" className="form-label"></label>
                                    <input type="text" className="form-control" id="InputPublicoAlvo" placeholder="Principais desafios?" />
                                </div>

                                <div className="dados-desafios">
                                    <label htmlFor="" className="form-label"></label>
                                    <input type="text" className="form-control" id="InputPublicoAlvo" placeholder="Principais objetivos" />
                                </div>

                                <div className="dados-desafios">
                                    <label htmlFor="" className="form-label"></label>
                                    <input type="text" className="form-control" id="InputPublicoAlvo" placeholder="Quais áreas desejas conectar" />
                                </div>
                            
                            </div>

                            <div>
                                <h2 className='Subtitulo-pagina-formulario'>Processos e Necessidades:</h2>
                            </div>

                            <div className='box-dados-processos-necessidades'>
                               
                                <div className="dados-processos-necessidades">
                                    <select className="form-select-processos-necessidades" aria-label="processos-necessidades">
                                        <option selected>Quais processos deseja otimizar?</option>
                                        <option value="1">Gestão de Leads</option>
                                        <option value="2">Automação</option>
                                        <option value="3">Marketing</option>
                                        <option value="3">Gestão de venda</option>
                                        <option value="3">Atendimento ao cliente</option>
                                        <option value="3">Gestão financeira </option>
                                    </select>
                                </div>

                               <div className="dados-processos-necessidades">
                                    <label htmlFor="InputProcessosNecessidades" className="form-label"></label>
                                    <input type="text" className="form-control" id="InputProcesso" placeholder="Tipo de conexão ou integrações deseja estabelecer" required />
                                </div>

                                <div className="dados-processos-necessidades">
                                    <select className="form-select-processos-necessidades" aria-label="processos-necessidades">
                                        <option selected>Pessoas no processo</option>
                                        <option value="1">Gestores</option>
                                        <option value="1">Analistas</option>
                                        <option value="2">Assistentes</option>
                                        <option value="2">Devs</option>
                                        <option value="2">Todos</option>
                                    </select>
                                </div>

                                <div className="dados-processos-necessidades">
                                    <select className="form-select-processos-necessidades" aria-label="processos-necessidades">
                                        <option selected>Sistemas e ferramentas que sua empresa utiliza</option>
                                        <option value="1">Excel</option>
                                        <option value="1">ERP</option>
                                        <option value="2">CRM</option>
                                        <option value="2">Software de Automações</option>
                                        <option value="2">Sistema de suporte ao cliente</option>
                                    </select>
                                </div>

                                <div className="dados-processos-necessidades">
                                    <select className="form-select-processos-necessidades" aria-label="processos-necessidades">
                                        <option selected>Local das aplicações</option>
                                        <option value="1">Nuvem</option>
                                        <option value="1">Local</option>
                                    </select>
                                </div>

                                <div className="dados-processos-necessidades">
                                    <select className="form-select-processos-necessidades" aria-label="processos-necessidades">
                                        <option selected>Existe processos manuais?</option>
                                        <option value="1">Sim</option>
                                        <option value="1">Não</option>
                                    </select>
                                </div>

                            </div>

                            <div>
                                <h2 className='Subtitulo-pagina-formulario'>Experiência e Preferências:</h2>
                            </div>

                            <div className="box-dados-experiencia-preerencias">
                                <div className="dados-experiencia-preerencias">
                                    <select className="form-select" aria-label="processos-necessidades">
                                        <option selected>Já utilizou algum CRM antes?</option>
                                        <option value="1">Sim</option>
                                        <option value="2">Não</option>
                                    
                                    </select>
                                </div>

                                <div className="dados-experiencia-preerencias">
                                    <select className="form-select" aria-label="processos-necessidades">
                                        <option selected>Já utilizou algum CRM antes?</option>
                                        <option value="1">Sim</option>
                                        <option value="2">Não</option>
                                    
                                    </select>
                                </div>

                                <div className="dados-experiencia-preerencias">
                                    <select className="form-select" aria-label="processos-necessidades">
                                        <option selected>Alguma preferência sobre a interface do usuário?</option>
                                        <option value="1">Sim</option>
                                        <option value="2">Não</option>
                                    
                                    </select>
                                </div>

                            </div>
                        
                        
                            
                    
                    </form>
                </div>
            </div>
                <button className='btn-formulario'>Enviar</button>
        </div>
        

    );

}
