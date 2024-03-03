import './styleSegundaSessao.css'

// Importar as imagens
import image1 from '../../assets/SegundaSessao/Imagem1.png'

import image2 from '../../assets/SegundaSessao/button-vsl.png'

export default function SegundaSessao() {
    
    return ( 
    <>

    <section id="banner">
        <div className="img-banner">
            
            <div className="content-banner max-container">
                <h1 className='titutlo-pagina'>Produtos</h1>

                <img src={image1} alt="" width="400px" height="300px"/> 

                <p className="text_produto">Encontre inovações para qualquer setor, basta selecionar uma das opções acima.</p>
            </div>
            
            <div className="content-banner second max-container">
                <div className="content">
                    <h1 className='titulo-pagina-segundo-bloco'>Detalhes do produto</h1>
                    <p className="text_caracteristica">Ao selecionar um produto ao lado, vai mostrar as caracteristicas dele aqui.</p>
                </div>

                <div className="content">
                    <h1 className='subtitulo-pagina-produtos'>Vídeo</h1>
                    <div className="btn-vsl"><img src={image2} alt="VSL "
                        title="VSL - não introduzida pelo bloqueio de JS nessa sprint"/>
                    </div>
                    <p className="text_video"> Ver demonstrações simples, rápida e com descrição no vídeo. </p>
                </div>

                <div className="content">
                    <h1 className='titulo-pagina-chatbot'>ChatBot</h1>
                    <button className="button"> Tire suas dúvidas a qualquer momento, sem limite de tempo ou de perguntas!</button>
                </div>
            </div>
        </div>
    </section>


    </>

    )
}
