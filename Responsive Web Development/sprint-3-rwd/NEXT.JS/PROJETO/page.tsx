import './style.css'

/* Importação das imagens */
import imagem1 from '../../../public/assets/Projeto/button-vsl.png'

export default function Projeto() {
    return (
        <div className="container-projeto" id='projetos'>

                <div className='box-titulo-projeto'>
                    <h1 className='titulo-pagina-projeto'>projeto</h1>
                </div>
                
                <p className='descricao-projeto'>Nosso objetivo de proporcionar simplicidade na resolução de dúvidas, agilidade no contato e gerar leads com maior eficácia, sempre priorizando a experiência do cliente.</p>

                <p className='descricao-projeto'>Abaixo teremos nosso PITCH explicando o projeto com as nossas soluções</p>
                
                <div className="content-vsl-projeto">
                    
                    <div className="btn-vsl-projeto"><img className='imagem-pagina-projeto' src={imagem1.src}
                        title="VSL - não introduzida pelo bloqueio de JS nessa sprint"/>
                    </div>

                </div>

        </div>
    );
}