/* Importação do CSS */
import './style.css'
import Link from 'next/link'

/* Importação das imagens */
import imagem1 from '../../../public/assets/Footer/logo2-removebg-preview.png'
import imagem2 from '../../../public/assets/Footer/endereco.png'
import imagem3 from '../../../public/assets/Footer/telefone.png'
import imagem4 from '../../../public/assets/Footer/calendario.png'

/* Importação dos icones da rede social */

/* Instalar */
/*npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faCommentSms, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faWhatsapp  } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <footer>
            <div className="container-footer">
                
                <div className='conteudo-contato'>
                    
                    <div className="footer-info-titulo">
                        <h1 className='titulo-footer-contato'>Entre em contato conosco:</h1>
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
            
                <div className="linha">
                </div> {/* Div da linha */}

            </div> {/* Fim container-footer */}

            <p className='frase-direitos-footer'>&copy; <span id="currentYear"></span> 2024 - Challenge Sales Force - Todos os direitos reservados à Tokito Techs.</p>

            <p className='frase-direitos-footer'>Alunos: Claudio Bispo - 553472, Patricia Naomi - 552981, Sara Ingrid - 554021 <Link href="/Equipe"> Clique aqui </Link> </p>

        </footer>
    );
}