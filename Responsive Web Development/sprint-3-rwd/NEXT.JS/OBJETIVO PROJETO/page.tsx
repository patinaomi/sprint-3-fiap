import './style.css'

/* Importar meu arquivo json e utilizar os dados */

import cardData from './dados-objetivo-projeto.json';

export default function ObjetivosProjeto() {
    
    return ( 
        
        <div className='container-objetivo-projeto'>
            
            <div className="content-info-objetivo-projeto">
                
                <h1 className='titulo-pagina-objetivo-projetos'>Existem diversas melhorias pautadas</h1>

                <h2 className='titulo-pagina-objetivo-projetos'>Porque não listar algumas,</h2>

                <span className='frase-efeito-objetivo-projeto'> não é mesmo?</span>

            </div>
        
            <div className="content-cards-objetivo-projeto">
                
                {cardData.map((card, index) => (

                <div className="content-card-objetivo-projeto" key={index}>
                    <img className='imagem-cards-objetivo-projeto' src={card.imagem} alt={`Imagem do card ${index}`} />
                    <h3 className='titulos-cards-objetivo-projeto'>{card.titulo}</h3>
                    <p className='descricao-cards-objetivo-projeto'>{card.descricao}</p>
                </div>
                ))}
            </div>

        </div>

    );
}