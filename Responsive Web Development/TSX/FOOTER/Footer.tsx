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

        <div className="footer-copyright max-container"> 
            <img  className="nav-wrapper--logo--Tokito" src={imagem1} alt="Logo da Tokito Techs" />
            <p className='logo-tokito-techs'>Tokito Techs | Challenge SalesForce </p>
        </div>

    </footer>
    );

}