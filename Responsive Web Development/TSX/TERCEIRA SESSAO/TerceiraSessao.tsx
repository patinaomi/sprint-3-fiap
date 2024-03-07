import './StyleTerceiraSessao.css'

import imagem1 from '../../assets/TerceiraSessao/button-vsl.png'

export default function TerceiraSessao() {
    
    return ( 
    
            <div className="content-intro">

                <div className='container-titulo-pagina'>
                    <h1>Apresentação do nosso projeto</h1>
                </div>
                
                <p> Nosso objetivo de proporcionar simplicidade na resolução de dúvidas, agilidade no contato e gerar leads com maior eficácia, sempre priorizando a experiência do cliente.</p>

                <p className='texto-pitch'>Abaixo teremos nosso PITCH explicando o projeto com as nossas soluções</p>
                
                <div className="content-vsl">
                    
                    <div className="btn-vsl"><img src={imagem1}
                        title="VSL - não introduzida pelo bloqueio de JS nessa sprint"/>
                    </div>

                </div>

            </div>
    );
}