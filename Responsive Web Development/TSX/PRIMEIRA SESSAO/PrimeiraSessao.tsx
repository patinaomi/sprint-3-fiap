/* IMPORTAR O CSS */
import './stylePrimeiraSessao.css'


// IMPORTAR AS IMAGENS
import image1 from '../../assets/PrimeiraSessao/banner-img.jpg'
import imagem1 from '../../assets/Navbar/logo2-removebg-preview.png'



export default function PrimeiraSessao() {
    

    return (
        <div className="banner-container">
            <img src={image1} alt="Banner" className="banner-image" />

            <div className="banner-content">
                <div className="logo-banner-content">
                    <img className='logo-tokito' src={imagem1} alt="Logo da Tokito Techs" />
                    <h1 className='titulo-tokito-techs'>Tokito Techs</h1>
                </div>

            
                <h2 className='frase-efeito'>Transformando Ideias em Realidade Digital.</h2>
                
            </div>
        </div>
    );
}