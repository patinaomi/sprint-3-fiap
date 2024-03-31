/* Preciso chamar o use client para simular visão do cliente, sem ele da erro*/
'use client'

/* Importação do CSS */
import './style.css'

/* Demais importações  */
import { useState } from 'react';

/* Importação do json */
import produtos from './produtos.json'

interface Produto {
    id: number;
    nome: string;
    descricao: string;
    vantagens: string[];
    segmento: string;
  }

/* Importação das imagens */ 
import imagem1 from '/public/assets/Produtos/ATENDIMENTO_CLIENTE.svg';
import imagem2 from '/public/assets/Produtos/COMMERCE.svg'
import imagem3 from '/public/assets/Produtos/IA.svg'
import imagem4 from '/public/assets/Produtos/MARKETING.svg'
import imagem5 from '/public/assets/Produtos/MULE_SOFT.svg'
import imagem6 from '/public/assets/Produtos/NET_ZERO.svg'
import imagem7 from '/public/assets/Produtos/NUVEM_DADOS.svg'
import imagem8 from '/public/assets/Produtos/PARCEIROS.svg'
import imagem9 from '/public/assets/Produtos/PEQUENAS_EMPRESAS.svg'
import imagem10 from '/public/assets/Produtos/PLATAFORMAS.svg'
import imagem11 from '/public/assets/Produtos/SLACK.svg'
import imagem12 from '/public/assets/Produtos/SUCESSO.svg'
import imagem13 from '/public/assets/Produtos/TABLEAU.svg'
import imagem14 from '/public/assets/Produtos/VENDAS.svg'
import imagem15 from '/public/assets/Produtos/button-vsl.png'

export default function Produto() {

    const [selectedOption, setSelectedOption] = useState('produto');

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    // State para armazenar o produto selecionado
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

    const handleSelecionarProduto = (id: string) => {
        const produtoId = Number(id);
        const produto = produtos.find((p: Produto) => p.id === produtoId);
        setProdutoSelecionado(produto || null);
      };
      


    return(
        <div className='container-produtos' id='produtos'>

            <h1 className='titulo-principal-pagina-produtos'>Sobre nossos produtos</h1>
    
            <div className='container-titulos-produtos'>
                
                <div className='box-primeiro-titulo'>
                    <h1 className='título-produtos-selecao'> Produtos </h1>
                    <p className='subtitulo-produtos-selecao'>Selecione um produto e conheça  as vantagens para o seu negócio</p>
                </div> {/* Fim da div box-primeiro-titulo*/}

                <div className='box-segundo-titulo'>
                    
                    <h1 className='título-produtos-selecao'>descrição do produto</h1>
            
                    <p className='subtitulo-produtos-selecao'>"Esclareça suas dúvidas da maneira que preferir, seja por texto, vídeo ou interagindo com o Tokito BOT, nosso assistente virtual."</p>

                </div> {/* Fim da div box-segndo-titulo*/}

            </div> {/* Fim da div container-titulos*/}
            
            <div className='container-secundario'>
                
                <div className='container-fluid-imagens'>

                    <div className="circle-container">
                        <img src={imagem1.src} alt="Imagem 1" className="circle-image" onClick={() => handleSelecionarProduto("1")} />
                        <img src={imagem2.src} alt="Imagem 2" className="circle-image" onClick={() => handleSelecionarProduto("2")} />
                        <img src={imagem3.src} alt="Imagem 3" className="circle-image" onClick={() => handleSelecionarProduto("3")} />
                        <img src={imagem4.src} alt="Imagem 4" className="circle-image" onClick={() => handleSelecionarProduto("4")} />
                        <img src={imagem5.src} alt="Imagem 5" className="circle-image" onClick={() => handleSelecionarProduto("5")} />
                        <div className="empty-space"></div>
                        <div className="empty-space"></div>
                        <img src={imagem6.src} alt="Imagem 6" className="circle-image" onClick={() => handleSelecionarProduto("6")} />
                        <img src={imagem7.src} alt="Imagem 7" className="circle-image" onClick={() => handleSelecionarProduto("7")} />
                        <div className="empty-space"></div>
                        <div className="empty-space"></div>
                        <img src={imagem8.src} alt="Imagem 8" className="circle-image" onClick={() => handleSelecionarProduto("8")} />
                        <img src={imagem9.src} alt="Imagem 9" className="circle-image" onClick={() => handleSelecionarProduto("9")} />
                        <div className="empty-space"></div>
                        <div className="empty-space"></div>
                        <img src={imagem10.src} alt="Imagem 10" className="circle-image" onClick={() => handleSelecionarProduto("10")} />
                        <img src={imagem11.src} alt="Imagem 11" className="circle-image" onClick={() => handleSelecionarProduto("11")} />
                        <img src={imagem12.src} alt="Imagem 12" className="circle-image" onClick={() => handleSelecionarProduto("12")} />
                        <img src={imagem13.src} alt="Imagem 13" className="circle-image" onClick={() => handleSelecionarProduto("13")} />
                        <img src={imagem14.src} alt="Imagem 14" className="circle-image" onClick={() => handleSelecionarProduto("14")} />
                    </div>  {/* Fim da div circle-container*/}

                </div> {/* Fim da div container-fluid-imagens*/}

                <div className="container-lado-direito">

                    <div className="menu-box-produtos">
                        <span className={selectedOption === 'produto' ? 'active' : ''} onClick={() => handleOptionClick('produto')}>Produto</span>
                        <span className={selectedOption === 'video' ? 'active' : ''} onClick={() => handleOptionClick('video')}>Vídeo</span>
                        <span className={selectedOption === 'chatbot' ? 'active' : ''} onClick={() => handleOptionClick('chatbot')}>ChatBot</span>
                    </div>  {/* Fim da div menu*/}

                    <div className="content-box-produtos">
                        {selectedOption === 'produto' && (
                            <div className='container-descricao-produto'>

                                
                                <h1 className='titulo-pagina-produtos-box'>Detalhes do produto</h1>

                                {produtoSelecionado ? (
                                    <div className='detalhes-produto'>
                                        <div className='box-titulos-descricao-produto'>
                                            <h1 className='titulo-produto-nome'>Produto:</h1>
                                            <h2 className='titulo-nome-produto'>{produtoSelecionado.nome}</h2>
                                        
                                        </div>

                                        <h3 
                                        className="titulo-texto-caracteristica-produtos">Descriação do produto:</h3>
                                            <p className="texto_caracteristica_produtos">{produtoSelecionado.descricao}</p>
                                
                                <h3  className="titulo-texto-caracteristica-produtos">Vantagens:</h3>
                                    <ul>
                                        {produtoSelecionado.vantagens.map((vantagem, index) => (
                                        <li className="texto_caracteristica_produtos" key={index}>{vantagem}</li>
                                    ))}
                                    </ul>

                                <h3 className="titulo-texto-caracteristica-produtos">Segmento onde a empresa pode aplicar este produto:</h3>
                                <p className="texto_caracteristica_produtos">{produtoSelecionado.segmento}</p>
                                </div>
                                ) : (
                                    <p className="texto_caracteristica_produtos">Selecione um produto para ver os detalhes.</p>
                                  )}

                                <div className='botao-contato-produto'>
                                    <button className='botao-contato-sobre-produto'>
                                        Entre em contato
                                    </button>
                                </div>
                            </div>
                        )}
                        {selectedOption === 'video' && (
                            <div className='container-video-produto'>
                                <h1 className='titulo-pagina-video'>Vídeo explicativo</h1>
                                <div className="btn-vsl"><img src={imagem15.src} alt="VSL" title="VSL - não introduzida pelo bloqueio de JS nessa sprint" /></div>
                                <p className="texto_caracteristica_produtos_videos">Ver demonstrações simples, rápida e com descrição no vídeo.</p>
                                <p className="texto_caracteristica_produtos_videos">Aqui teremos o vídeo acima e abaixo a descrição correspondente, para aqueles que não puderem assistir, não tiverem a capacidade de ouvir ou não puderem clicar para reproduzir o vídeo.</p>
                            </div>
                        )}
                        {selectedOption === 'chatbot' && (
                            <div className='container-chatbot-produto'>
                                <h1 className='titulo-pagina-chatbot'>ChatBot independente</h1>
                                <button className="button-chat-bot">Tire suas dúvidas a qualquer momento, sem limite de tempo ou de perguntas!</button>

                                <div className='container-chatbot'>
                                    <div>
                                        <h1 className='texto-box-chat'>Caixa de conversa com o bot</h1>
                                    </div>
                                </div>  {/* Fim da div container-chatbot*/}


                                <p className="text_caracteristica">Vai abrir a caixa de conversa com o chatbot, será necessário logar sendo criando a conta ou usando uma existente. Aqui vamos mapear a experiência e questionamentos para cada produto e visitante.</p>
                            </div>
                        )}
                    </div> {/* Fim da div content-box*/}

                </div> {/* Fim da div content-banner second max-container*/}

            </div> {/* Fim da div container-secundario*/}

        </div>  // Fim da div container-fluid
    );
}