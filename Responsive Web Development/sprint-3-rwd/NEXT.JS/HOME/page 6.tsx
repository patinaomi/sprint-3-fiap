
/* Importação do CSS */
import './style.css'

/* Imortação das imagens */
import imagem1 from '../../../public/assets/HomePage/banner-img.jpg'
import imagem2 from '../../../public/assets/HomePage/logo2-removebg-preview.png'

export default function HomePage(){
    return (
        
        <div className="container-home-page">

            <div className='logo-banner-content-pricipal'>
                <img className="banner-imagem-principal" src={imagem1.src} alt="Banner"/>
            </div> {/* Fim div logo-banner-content-pricipal */}

            <div className='container-logos-tokito'>

                <div className='texto-logo-tokito-techs'>
                    <h1 className='titulo-tokito-techs'>Tokito Techs</h1>
                </div> {/* Fim div texto-logo-tokito-techs */}
                    
            </div> {/* Fim div container-logos-tokito */}

            <div className='frase-efetio-home-page'>
                <h2 className='frase-efeito'>Transformando Ideias em Realidade Digital.</h2>
            </div> {/* Fim div frase-efetio-home-page */}

        </div> /* Fim div containe-home-page*/

    );
}