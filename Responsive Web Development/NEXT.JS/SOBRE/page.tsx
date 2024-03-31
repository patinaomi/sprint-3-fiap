
import './style.css'

/* Importação das imagens */
import imagem1 from '../../../public/assets/Sobre/instagram.png'
import imagem2 from '../../../public/assets/Sobre/facebook.png'
import imagem3 from '../../../public/assets/Sobre/chat.png'

export default function Sobre(){
    return (
        <div className="container-sobre" id='sobreEmpresa'>

            <div className="container-texto-sobre">

            <h1 className='titulo-sobre'>O que é a Salesforce?</h1>
            <p className='frase-sobre'>A Salesforce é uma empresa de softwares que foca na solução de gerenciamento de relacionamento para aproximar empresas e pessoas. É uma plataforma de CRM integrada que oferece a todos os departamentos uma visão única e compartilhada de cada cliente.</p>

            </div>

            <div className="container-atividade-sobre">
                <h1 className='titulo-sobre'>O que a Salesforce faz?</h1>
                <p className='frase-sobre'>Utilizando o Salesforce Customer 360, nossa plataforma de CRM integrada, sua empresa oferece experiências personalizadas para seus clientes. Nossa solução fornece produtos poderosos e conectados para melhorar seu marketing, vendas, commerce, atendimento ao cliente, TI e muito mais.</p>
            </div>

            <div className='redes-sociais-sobre'>
                <h3 className='titulo-sobre-redes-sociais'>Saiba mais o que estamos fazendo pelas Redes sociais</h3>

                <div className='container-icones-sobre'>

                    <img className='imagem-redes-sociais-sobre' src={imagem1.src} alt="Imagem do instagram" />
                    <img className='imagem-redes-sociais-sobre' src={imagem2.src} alt="Imagem do instagram" />
                    <img className='imagem-redes-sociais-sobre' src={imagem3.src} alt="Imagem do instagram" />

                </div>

            </div>

            <div>

            </div>

        </div>
    );
}