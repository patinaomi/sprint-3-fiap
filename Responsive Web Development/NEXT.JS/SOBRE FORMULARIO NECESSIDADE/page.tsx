/* Importar imagem */
import imagem from '../../../public/assets/FormularioContato/undraw_shopping_re_3wst.svg'
import imagem2 from '../../../public/assets/FormularioContato/salesforce-logo.svg'

import Link from 'next/link';
import './style.css'

/* Função principal */
export default function SobreFormularioNecessidade() {

    return (

    <div className="sobre-form-necessidade">

        <div className='info-sobre-form-necessidade'>

            <div className='sobre-formulario-necessidade'>
                
                <h1 className='titulo-pagina-formulario-necessidade'>Sobre esse formulário</h1>
                
                <p className='frase-formulario-necessidade'>Se você não conhece sobre o que é CRM ou as melhores soluções para sua empresa, responda o questionário abaixo para te conhecermos melhor e te direcionar com as melhores soluções. Teremos uma IA e um time comprometido para entender suas necessidades e preocupações.</p>
                
                <button className='botao-form-necessidade'><Link href="/FormularioVocacional">Preencha agora</Link></button>

            </div> {/* Fim da div sobre-formulario */}

            <div className='segunda-imagem-form-necessidade'>
                <img className='imagem2-form-necessidade' src={imagem.src} alt="Imagem ilustrativa" />
            </div> {/* Fim div segunda-imagem-form-contato */}

        </div>


    </div> // Fim div form-image-contato

    );
}