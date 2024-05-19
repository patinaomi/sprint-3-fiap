/* Preciso chamar o use client para simular visão do cliente, sem ele da erro*/
'use client'

/* Importação do CSS */
import './style.css'

/* Importar UseState*/
import { useState } from 'react'

/* Importação dos icones que serão utilizados no trabalho */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

export default function FormularioContato() {

    /* Ao preencher o formulário de cadastro, será baixado o arquivo para manipulação em Python */

    const [formDados, setFormDados ] = useState({
        nome: '',
        email:'',
        telefone:'',
        segmento:'',
        cargo:'',
        tamanhoEmpresa:'',
        produto:'',
        regiao:'',
        idioma:''
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
    
        const csvContent = "Nome,Email,Telefone,Segmento,Cargo,TamanhoEmpresa,Produto,Regiao,Idioma\n" + 
            `${formDados.nome},${formDados.email},${formDados.telefone},${formDados.segmento},${formDados.cargo},${formDados.tamanhoEmpresa},${formDados.produto},${formDados.regiao},${formDados.idioma}\n`;
    
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

        <div className='container'>
            
                <div className='texto-descritivo-formulario'>
                    <h1 className='titulo-formulario'>Fomulário de contato</h1>
                </div> {/* Fim da div texto-descritivo-formulario*/}

                <div className='formulario-contato'>
                    
                    <div className='container-formulario'>
                        
                        <form action="" onSubmit={handleSubmit}>

                            <div className='box-dados-pessoais'>
                                
                                <div className="dados-pessoais">
                                    <FontAwesomeIcon className='icones-formulario' icon={faUser} style={{color: "#FFD43B",}} />
                                    
                                    <label htmlFor="InputFirstName" className="form-label"></label>
                                    
                                    <input type="text" className="form-control" id="InputNome" name='nome' placeholder="Nome completo" required value={formDados.nome} onChange={handleChange} />
                                </div>
                                
                                <div className="dados-pessoais">
                                    <FontAwesomeIcon className='icones-formulario' icon={faEnvelope} style={{color: "#FFD43B",}} />

                                    <label htmlFor="InputEmail" className="form-label"></label>
                                    
                                    <input type="mail" className="form-control" id="InputEmail" name='email' placeholder="E-mail" value={formDados.email} onChange={handleChange}/>
                                </div>

                                <div className="dados-pessoais">
                                    <FontAwesomeIcon className='icones-formulario' icon={faPhone} style={{color: "#FFD43B",}} />

                                    <label htmlFor="InputTelefone" className="form-label"></label>
                                    
                                    <input type="number" className="form-control"  id="InputTelefone" name='telefone' placeholder="Telefone" value={formDados.telefone} onChange={handleChange} />
                                </div>

                            </div> {/* Fim da div box-dados-pessoais */}

                            <div className='box-dados-empresa'>
                                
                                <div className="dados-empresa">
                                    <FontAwesomeIcon className='icones-formulario' icon={faGlobe} style={{color: "#FFD43B",}} />
                                    
                                    <label htmlFor="InputSegmento" className="form-label"></label>
                                    
                                    <input type="text" className="form-control" id="InputSegmento" name='segmento' placeholder="Segmento" value={formDados.segmento} onChange={handleChange} />
                                </div> {/* Fim da div box-dados-empresa */}

                                <div className="dados-empresa">
                                    <FontAwesomeIcon className='icones-formulario' icon={faUserSecret} style={{color: "#FFD43B",}} />
                                    
                                    <label htmlFor="InputCargo" className="form-label"></label>
                                    
                                    <input type="text" className="form-control" id="InputCargo" name='cargo' placeholder="Cargo" value={formDados.cargo} onChange={handleChange} />
                                </div> {/* Fim da div dados-empresa */}

                                <div className="dados-empresa">
                                    <FontAwesomeIcon className='icones-formulario' icon={faBuilding} style={{color: "#FFD43B",}} />
                                    
                                    <label htmlFor="" className="form-label"></label>
                                    
                                    <input type="text" className="form-control" id="InputTamanho" name='tamanhoEmpresa' placeholder="Tamanho da empresa" value={formDados.tamanhoEmpresa} onChange={handleChange} />
                                </div> {/* Fim da div dados-empresa */}

                            </div> {/* Fim da div box-dados-empresa */}

                            <div className='box-dados-produto'>
                                
                                <div className="dados-produtos">
                                    <FontAwesomeIcon className='icones-formulario' icon={faHeartPulse} style={{color: "#FFD43B",}} />

                                    <select className="form-select" aria-label="produto" name='produto' value={formDados.produto} onChange={handleChange}>
                                        <option value="Produto">Produto</option>
                                        <option value="IA Inteligencia artificial">IA - Inteligência artificial</option>
                                        <option value="Atendimento ao cliente">Atendimento ao cliente</option>
                                        <option value="Commerce">Commerce</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="MuleSoft">MuleSoft</option>
                                        <option value="Net Zero">Net Zero</option>
                                        <option value="Nuvem de Dados">Nuvem de Dados</option>
                                        <option value="Parceiros">Parceiros</option>
                                        <option value="Pequenas Empresas">Pequenas Empresas</option>
                                        <option value="Plataforma">Plataforma</option>
                                        <option value="Slack">Slack</option>
                                        <option value="Sucesso">Sucesso</option>
                                        <option value="Tableau">Tableau</option>
                                        <option value="Vendas">Vendas</option>
                                    </select>

                                </div> {/* Fim da div dados-produtos */}

                                <div className="dados-produtos">
                                    <FontAwesomeIcon className='icones-formulario' icon={faEarthAmericas} style={{color: "#FFD43B",}} />
                                    
                                    <select className="form-select" aria-label="Região" name='regiao' value={formDados.regiao} onChange={handleChange}>
                                        <option value="Regiao">Região</option>
                                        <option value="Brasil">Brasil</option>
                                        <option value="Outros">Outros</option>
                                    
                                    </select>

                                </div> {/* Fim da div dados-produtos */}

                                <div className="dados-produtos">
                                    <FontAwesomeIcon className='icones-formulario' icon={faLanguage} style={{color: "#FFD43B",}} />

                                    <select className="form-select" aria-label="idioma" name='idioma' value={formDados.idioma} onChange={handleChange}>
                                        <option value="Idioma">Idioma para contato</option>
                                        <option value="Portugues">Português</option>
                                        <option value="Ingles">Inglês</option>
                                        <option value="Espanhol">Espanhol</option>
                                    </select>

                                </div> {/* Fim da div dados-produtos */}

                            </div>  {/* Fim da div ox-dados-produto */}

                            <button type='submit' className='btn-formulario'>Enviar</button>
                        </form>
                     
                    </div> {/* Fim da div container-formulario*/}
               
                </div> {/* Fim da div formulario-contato*/}
            
        </div> /* Fim da div container*/
        
    );

}