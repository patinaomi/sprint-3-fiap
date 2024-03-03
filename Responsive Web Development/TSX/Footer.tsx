import './styleFooter.css'

export default function Footer() {
    
    return (
        <footer>
        <div className="max-container footer-content">
            
            <div className="footer-info">
                <h4>Entre em contato conosco:</h4>
            </div>

            <a className="footer-info footer-link" target="_blank" href="https://maps.app.goo.gl/aT8dW1a6WcWkLrUP8">
                <img className="footer-icone" src="/IMG/FOOTER/endereco.png" alt="Ícone endereco" title="Ícone endereco"/>
                <p>415 Mission Street 3rd F, San Francisco, CA 94105, United States</p>
            </a>

            <div className="footer-info">
                <img className="footer-icone" src="/IMG/FOOTER/telefone.png" alt="Ícone telefone" title="Ícone telefone" />
                <p>Cel: 0800 891 1887</p>
            </div>

            <a className="footer-info footer-link" target="_blank" href="index.html">
                <img className="footer-icone" src="/IMG/FOOTER/calendario.png" alt="Ícone calendario" title="Ícone calendario" />
                <p>Agende uma consultoria para seu negócio</p>
            </a>

        </div>

        <div className="footer-copyright max-container"> 
        <p>Tokito Techs </p>
        </div>
        </footer>
    );

}