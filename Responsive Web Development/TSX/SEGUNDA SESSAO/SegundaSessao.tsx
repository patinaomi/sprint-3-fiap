/* IMPORT CSS*/
import './StyleSegundaSessao.css'

/* DEMAIS IMPORTAÇÕES */
import { useState } from 'react';

// IMPORTAR AS IMAGENS
import imagem1 from '../../assets/TerceiraSessao/ATENDIMENTO_CLIENTE.svg';
import imagem2 from '../../assets/TerceiraSessao/COMMERCE.svg'
import imagem3 from '../../assets/TerceiraSessao/IA.svg'
import imagem4 from '../../assets/TerceiraSessao/MARKETING.svg'
import imagem5 from '../../assets/TerceiraSessao/MULE_SOFT.svg'
import imagem6 from '../../assets/TerceiraSessao/NET_ZERO.svg'
import imagem7 from '../../assets/TerceiraSessao/NUVEM_DADOS.svg'
import imagem8 from '../../assets/TerceiraSessao/PARCEIROS.svg'
import imagem9 from '../../assets/TerceiraSessao/PEQUENAS_EMPRESAS.svg'
import imagem10 from '../../assets/TerceiraSessao/PLATAFORMAS.svg'
import imagem11 from '../../assets/TerceiraSessao/SLACK.svg'
import imagem12 from '../../assets/TerceiraSessao/SUCESSO.svg'
import imagem13 from '../../assets/TerceiraSessao/TABLEAU.svg'
import imagem14 from '../../assets/TerceiraSessao/VENDAS.svg'

import imagem15 from '../../assets/SegundaSessao/button-vsl.png'

export default function SegundaSessao() {
    
    const [selectedOption, setSelectedOption] = useState('produto');

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return ( 
    <div className='container-fluid'>
    
        

            <div className='container-titulos'>
                <div className='box-primeiro-titulo'>
                    <h1 className='título-produtos-selecao'> Produtos </h1>
                    <h2 className='subtitulo-produtos-selecao'>Selecione um produto e conheça  as vantagens para o seu negócio:</h2>
                </div>

                <div className='box-segndo-titulo'>
                    <h1 className='titulo-descricao-produto'> descricao do produto </h1>
            
                    <h2 className='subtitulo-descricao-produto'>"Esclareça suas dúvidas da maneira que preferir, seja por texto, vídeo ou interagindo com o Tokito BOT, nosso assistente virtual."</h2>
                </div>
            </div>
            
            <div className='container-secundario'>
                <div className='container-fluid-imagens'>

                    <div className="circle-container">
                        <img src={imagem1} alt="Imagem 1" className="circle-image" />
                        <img src={imagem2} alt="Imagem 2" className="circle-image" />
                        <img src={imagem3} alt="Imagem 3" className="circle-image" />
                        <img src={imagem4} alt="Imagem 4" className="circle-image" />
                        <img src={imagem5} alt="Imagem 5" className="circle-image" />
                        <div className="empty-space"></div>
                        <div className="empty-space"></div>
                        <img src={imagem6} alt="Imagem 6" className="circle-image" />
                        <img src={imagem7} alt="Imagem 7" className="circle-image" />
                        <div className="empty-space"></div>
                        <div className="empty-space"></div>
                        <img src={imagem8} alt="Imagem 8" className="circle-image" />
                        <img src={imagem9} alt="Imagem 9" className="circle-image" />
                        <div className="empty-space"></div>
                        <div className="empty-space"></div>
                        <img src={imagem10} alt="Imagem 10" className="circle-image" />
                        <img src={imagem11} alt="Imagem 11" className="circle-image" />
                        <img src={imagem12} alt="Imagem 12" className="circle-image" />
                        <img src={imagem13} alt="Imagem 13" className="circle-image" />
                        <img src={imagem14} alt="Imagem 14" className="circle-image" />
                    </div>
                </div>

            <div className="content-banner second max-container">

                <div className="menu">
                    <span className={selectedOption === 'produto' ? 'active' : ''} onClick={() => handleOptionClick('produto')}>Produto</span>
                    <span className={selectedOption === 'video' ? 'active' : ''} onClick={() => handleOptionClick('video')}>Vídeo</span>
                    <span className={selectedOption === 'chatbot' ? 'active' : ''} onClick={() => handleOptionClick('chatbot')}>ChatBot</span>
                </div>

                <div className="content-box">
                    {selectedOption === 'produto' && (
                        <>
                            <h1 className='titulo-pagina'>Detalhes do produto</h1>
                            <p className="text_caracteristica">Ao selecionar um produto ao lado, vai mostrar as características dele aqui.</p>
                            <p className="text_caracteristica">Descriação do produto</p>
                            <p className="text_caracteristica">Vantagens</p>
                            <p className="text_caracteristica">Segmento onde será empresa pode aplicar</p>
                            <p className="text_caracteristica">Orçamento</p>
                        </>
                    )}
                    {selectedOption === 'video' && (
                        <>
                            <h1 className='titulo-pagina-video'>Vídeo explicativo</h1>
                            <div className="btn-vsl"><img src={imagem15} alt="VSL" title="VSL - não introduzida pelo bloqueio de JS nessa sprint" /></div>
                            <p className="text_caracteristica">Ver demonstrações simples, rápida e com descrição no vídeo.</p>
                            <p className="text_caracteristica">Aqui teremos o vídeo acima e abaixo a descrição correspondente, para aqueles que não puderem assistir, não tiverem a capacidade de ouvir ou não puderem clicar para reproduzir o vídeo.</p>
                        </>
                    )}
                    {selectedOption === 'chatbot' && (
                        <>
                            <h1 className='titulo-pagina-chatbot'>ChatBot independente</h1>
                            <button className="button">Tire suas dúvidas a qualquer momento, sem limite de tempo ou de perguntas!</button>

                            <div className='container-chatbot'>
                                <div>
                                    <h1 className='texto-box-chat'>Caixa de conversa com o bot</h1>
                                </div>
                            </div>


                            <p className="text_caracteristica">Vai abrir a caixa de conversa com o chatbot, será necessário logar sendo criando a conta ou usando uma existente. Aqui vamos mapear a experiência e questionamentos para cada produto e visitante.</p>
                        </>
                    )}
            </div>
            </div>
    </div>

    </div>

    );
}