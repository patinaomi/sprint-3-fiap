import './StyleFormularioContacto.css'

/* IMPORT DOS ICOES QUE SERÁ USADOS NO FORMULÁRIO */
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

    return (

    
        <div className='container'>
            
                <div className='texto-descritivo-formulario'>
                    <h1 className='titulo-formulario'>Fomulário de contato</h1>
                </div>

                <div className='formulario-contato'>
                    
                    <div>
                        <form action="">

                            <div className='box-dados-pessoais'>
                                
                                <div className="dados-pessoais">
                                    <FontAwesomeIcon className='icones-formulario' icon={faUser} style={{color: "#FFD43B",}} />
                                    
                                    <label htmlFor="InputFirstName" className="form-label"></label>
                                    <input type="text" className="form-control" id="InputFirstName" placeholder="Nome completo" required />
                                </div>
                                
                                <div className="dados-pessoais">
                                    <FontAwesomeIcon className='icones-formulario' icon={faEnvelope} style={{color: "#FFD43B",}} />

                                    <label htmlFor="InputEmail" className="form-label"></label>
                                    <input type="mail" className="form-control" id="InputEmail" placeholder="E-mail" />
                                </div>

                                <div className="dados-pessoais">
                                    <FontAwesomeIcon className='icones-formulario' icon={faPhone} style={{color: "#FFD43B",}} />

                                    <label htmlFor="InputTelefone" className="form-label"></label>
                                    <input type="number" className="form-control"  id="InputTelefone" placeholder="Telefone" />
                                </div>

                            </div>

                            <div className='box-dados-empresa'>
                                <div className="dados-empresa">
                                    <FontAwesomeIcon className='icones-formulario' icon={faGlobe} style={{color: "#FFD43B",}} />
                                    <label htmlFor="InputSegmento" className="form-label"></label>
                                    <input type="text" className="form-control" id="InputSegmento" placeholder="Segmento" />
                                </div>

                                <div className="dados-empresa">
                                    <FontAwesomeIcon className='icones-formulario' icon={faUserSecret} style={{color: "#FFD43B",}} />
                                    <label htmlFor="InputCargo" className="form-label"></label>
                                    <input type="text" className="form-control" id="InputCargo" placeholder="Cargo" />
                                </div>

                                <div className="dados-empresa">
                                    <FontAwesomeIcon className='icones-formulario' icon={faBuilding} style={{color: "#FFD43B",}} />
                                    
                                    <label htmlFor="" className="form-label"></label>
                                    <input type="text" className="form-control" id="InputTamanho" placeholder="Tamanho da empresa" />
                                </div>
                            </div>

                            <div className='box-dados-produto'>
                                <div className="dados-produtos">
                                    <FontAwesomeIcon className='icones-formulario' icon={faHeartPulse} style={{color: "#FFD43B",}} />

                                    <select className="form-select" aria-label="produto">
                                        <option selected>Produto</option>
                                        <option value="1">IA - Inteligência artificial</option>
                                        <option value="2">Atendimento ao cliente</option>
                                        <option value="3">Commerce</option>
                                        <option value="4">Marketing</option>
                                        <option value="5">MuleSoft</option>
                                        <option value="6">Net Zero</option>
                                        <option value="7">Nuvem de Dados</option>
                                        <option value="8">Parceiros</option>
                                        <option value="9">Pequenas Empresas</option>
                                        <option value="10">Plataforma</option>
                                        <option value="10">Slack</option>
                                        <option value="10">Sucesso</option>
                                        <option value="10">Tableau</option>
                                        <option value="10">Vendas</option>
                                    </select>
                                </div>

                                
                                

                                <div className="dados-produtos">
                                    <FontAwesomeIcon className='icones-formulario' icon={faEarthAmericas} style={{color: "#FFD43B",}} />
                                    <select className="form-select" aria-label="Região">
                                        <option selected>Região</option>
                                        <option value="1">Brasil</option>
                                        <option value="2">Outros</option>
                                    
                                    </select>
                                </div>

                                <div className="dados-produtos">
                                    <FontAwesomeIcon className='icones-formulario' icon={faLanguage} style={{color: "#FFD43B",}} />

                                    <select className="form-select" aria-label="idioma">
                                        <option selected>Idioma para contato</option>
                                        <option value="1">Português</option>
                                        <option value="2">Inglês</option>
                                        <option value="2">Espanhol</option>
                                    
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