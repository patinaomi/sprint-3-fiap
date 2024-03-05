import './styleFooter.css'

import imagem1 from '../../assets/Navbar/logo2-removebg-preview.png'
import imagem2 from '../../assets/Footer/endereco.png'
import imagem3 from '../../assets/Footer/telefone.png'
import imagem4 from '../../assets/Footer/calendario.png'

export default function Footer() {
    
    return (
        <footer>
        <div className="max-container footer-content">
            
            <div className="footer-info">
                <h4>Entre em contato conosco:</h4>
            </div>

            <a className="footer-info footer-link" target="_blank" href="https://maps.app.goo.gl/aT8dW1a6WcWkLrUP8">
                <img className="footer-icone" src={imagem2} title="Ícone endereco"/>
                <p>Av. Paulista, 1106 - 7º andar - Bela Vista, São Paulo - SP, 01311-000</p>
            </a>

            <div className="footer-info">
                <img className="footer-icone" src={imagem3} title="Ícone telefone" />
                <p>Cel: 0800 891 1887</p>
            </div>

            <a className="footer-info footer-link" target="_blank" href="index.html">
                <img className="footer-icone" src={imagem4} title="Ícone calendario" />
                <p>Agende uma consultoria para seu negócio</p>
            </a>

        </div>

        <div className="footer-copyright max-container redes-sociais"> 
            <div className="box-redes-sociais">

                <div className='titulo-dois-redes-sociais'>
                    <h1 className="titulo-dois-redes-sociais">Siga nossa empresa nas redes sociais:</h1>
                </div> 

                <div className='icones-redes-sociais'>
                    <ul className="icons_rede_social">
                        <li>
                            <a className="rede_social instagram" href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a className="rede_social facebook" href="#" target="_blank"><i className="fab fa-facebook"></i></a>
                        </li>

                        <li>
                            <a className="rede_social telefone" href="tel:+11958757740"><i className="fas fa-phone-volume"></i></a>
                        </li>
                        <li>
                            <a className="rede_social sms" href="sms:+11958757740"><i className="fas fa-comment-sms"></i></a>
                        </li>
                        <li>
                            <a className="rede_social email" href="mailto:rm553472@fiap.com.br"><i className="fas fa-envelope"></i></a>
                        </li>
                        <li>
                            <a className="rede_social whatsapp" href="https://wa.me/11958757740"><i className="fab fa-whatsapp"></i></a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright max-container"> 
            <img  className="nav-wrapper--logo--Tokito" src={imagem1} alt="Logo da Tokito Techs" />
            <p className='logo-tokito-techs'>Tokito Techs | Challenge SalesForce </p>
        </div>

    </footer>
    );

}