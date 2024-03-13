/* Importação do CSS */
import './style.css'

/* Importação das imagens */
import imagem1 from './assets/logo2-removebg-preview.png'
import imagem2 from './assets/endereco.png'
import imagem3 from './assets/telefone.png'
import imagem4 from './assets/calendario.png'

/* Importação dos icones da rede social */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhoneVolume, faCommentSms, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faWhatsapp  } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <footer>
            <div className="container-footer">
                
                <div className='conteudo-contato'>
                    
                    <div className="footer-info-titulo">
                        <h1>Entre em contato conosco:</h1>
                    </div> {/* Fim div footer-info */}

                    <div className='footer-info-endereco'>
                        
                        <div>
                            <a className="footer-info-link-localidade" target="_blank" href="https://maps.app.goo.gl/aT8dW1a6WcWkLrUP8">
                            <img className="footer-icone" src={imagem2.src} title="Ícone endereco"/></a>
                        </div> {/* Fim div footer-info-link-localidade */}

                        <div className='footer-info-texto-localidade'>
                            <p>Av. Paulista, 1106 - 7º andar - Bela Vista, São Paulo - SP, 01311-000</p>
                        </div> {/* Fim div footer-info-texto-localidade */}
                        
                    </div> {/* Fim div footer-info-endereco */}

                    <div className="footer-info-telefone">

                        <div className='footer-info-link-telefone'>
                            <img className="footer-icone" src={imagem3.src} title="Ícone telefone" />
                        </div> {/* Fim div footer-info-link-telefone */}

                        <div className='footer-info-texto-telefone'>
                            <p>Cel: 0800 891 1887</p>
                        </div> {/* Fim div footer-info-texto-telefone */}

                    </div> {/* fim da div footer-info-telefone */}

                    <div className='footer-info-agendamento'>

                        <div className='footer-info-link-agendamento'>
                            <a className="footer-info-agendamento" target="_blank" href="index.html">
                                <img className="footer-icone" src={imagem4.src} title="Ícone calendario" /></a>
                        </div> {/* fim da div footer-info-link-agendamento */}

                        <div className='footer-info-texto-agendamento'>
                            <p>Agende uma consultoria para seu negócio</p>
                        </div> {/* fim da div footer-info-texto-agendamento */}
                        
                    </div> {/* Fim da div footer-info-agendamento */}

                </div> {/* Fim div conteudo-contato */}
            
                <div className="conteudo-redes-sociais">

                    <div className='footer-info-titulo'>
                        <h1 className="titulo-dois-redes-sociais">Siga nossa empresa nas redes sociais ou entre em contato:</h1>
                    </div> {/* Fim div footer-info-titulo */}

                    <div className='icones-redes-sociais'>
                        <ul className="icones-rede-social">
                            <li>
                                <a className="rede-social-instagram" href="#" target="_blank"><FontAwesomeIcon className='icones-rede-social-font' icon={faInstagram}/></a>
                            </li>
                            <li>
                                <a className="rede-social-facebook" href="#" target="_blank"><FontAwesomeIcon className='icones-rede-social-font' icon={faFacebook} /></a>
                            </li>

                            <li>
                                <a className="rede-social-telefone" href="tel:+11958757740"><FontAwesomeIcon className='icones-rede-social-font' icon={faPhoneVolume} /></a>
                            </li>
                            <li>
                                <a className="rede-social-sms" href="sms:+11958757740"><FontAwesomeIcon className='icones-rede-social-font' icon={faCommentSms} /></a>
                            </li>
                            <li>
                                <a className="rede-social-email" href="mailto:rm553472@fiap.com.br"><FontAwesomeIcon className='icones-rede-social-font' icon={faEnvelope} /></a>
                            </li>
                            <li>
                                <a className="rede-social-whatsapp" href="https://wa.me/11958757740"><FontAwesomeIcon className='icones-rede-social-font' icon={faWhatsapp}/></a>
                            </li>
                        </ul>
                    </div> {/* Fim div icones-redes-sociais */}
                </div> {/* Fim div conteudo-redes-sociais */}

                <div className="conteudo-logos"> 
                    
                    <div className='footer-logo-tokito-techs'>
                        <img  className="nav-wrapper-logo-Tokito" src={imagem1.src} alt="Logo da Tokito Techs" />
                    </div> {/* Fim div footer-logo-tokito-techs */}

                    <div className='footer-logo-tokito-texto'>
                        <p className='logo-tokito-techs'>Tokito Techs</p> 
                    </div> {/* Fim div footer-logo-tokito-texto */}


                    <div className='footer-logo-salesforce'>
                        <p className='logo-salesforce'>Challenge SalesForce </p>
                    </div> {/* Fim div footer-logo-salesforce */}

                </div> {/* Fim div conteudo-logos */}

            </div> {/* Fim container-footer */}

        </footer>
    );
}