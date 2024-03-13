// Importação Geral
import Link from "next/link"

// Importação da imagem logo Tokito Techs
import Image from "next/image";
import Logo from  './Assets/logo2-removebg-preview.png';

// Importação do CSS
import './style.css'

/* Importar icones */
/* npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons */
/* npm install @fortawesome/free-solid-svg-icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

/* Criação da função principal  que irá retornar o componente */

export default function Menu() {

    return (

        <header>
            <div className="container-menu">
                
                <div className="container-primario">
                    <div className="logo-tokito-techs">
                        <Image className="imagem-tokito-techs" src={ Logo } alt="Logo Tokito Techs" />
                    </div> {/* Fim div logo-tokito-techs */}

                    <div className="logo-sales-force">
                        <h1 className="texto-logo-salesforce"><li className="opcoes-menu-navegacao-ul-li"><Link className="titulo-opcoes-menu" href="/">SalesForce</Link></li></h1>
                    </div> {/* Fim div logo-sales-force */}

                </div> {/* Fim div container-primario */}

                <div className="container-secundario">    
                    <div className="opcoes-menu">
                        <nav className="opcoes-menu-navegacao">
                            <ul className="opcoes-menu-navegacao-ul">
                                {/*<li className="opcoes-menu-navegacao-ul-li"><Link className="titulo-opcoes-menu" href="/">Home</Link></li>*/}
                                <li className="opcoes-menu-navegacao-ul-li"><Link href="/Produtos">Produtos</Link></li>
                                <li className="opcoes-menu-navegacao-ul-li"><Link href="/FormularioVocacional">Formulário</Link></li>
                                {/*<li className="opcoes-menu-navegacao-ul-li"><Link href="/Projeto">Projeto</Link></li>*/}
                                {/*<li className="opcoes-menu-navegacao-ul-li"><Link href="/Empresa">Empresa</Link></li>*/}
                                <li className="opcoes-menu-navegacao-ul-li"><Link href="/FormularioContato">Contato</Link></li>
                                <li className="opcoes-menu-navegacao-ul-li"><Link href="/Pesquisa">Satisfação</Link></li>
                                {/*<li className="opcoes-menu-navegacao-ul-li"><Link href="/Equipe">Equipe</Link></li>*/}
                            </ul>
                        </nav>
                    </div> {/* Fim div opcoes-menu */}
                </div> {/* Fim div container-secundario */}

                <div className="container-terciario">
                    <div className="conteudo-pesquisa-menu">
                        <div className="conteudo-pesquisa">
                            
                            <div className="sign-pesquisa">
                                <input placeholder="pesquisar.." className="input-pesquisa-menu" name="text" type="text" id="barra-pesquisa" />
                            </div>

                            <div className="text-pesquisa">
                                <button className="icon-botao-menu" id="icone-pesquisa">
                                    
                                    <svg className="imagem-botao-pesquisa" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px"
                                    width="25px">
                                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#fff"
                                            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z">
                                        </path>

                                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#fff"
                                            d="M22 22L20 20">

                                        </path>
                                    </svg>
                                </button>
                            </div>
                            

                        </div> {/* Fim div conteudo-pesquisa */}
                    </div> {/* Fim div conteudo-pesquisa-menu */}
                


                    <div className="botoes-opcoes-menu">
                        
                        <button className="Btn">
                            
                            <div className="sign">
                                <FontAwesomeIcon className="fa-solid" icon={faGlobe} />
                            </div> {/* Fim div icone-idioma */}

                            <div className="text">
                                <a href="#">Idioma</a>
                            </div> {/* Fim div texto-idioma */}

                        </button>

                        <button className="Btn">
                            
                            <div className="sign">
                                <FontAwesomeIcon className="fa-solid" icon={faMoon} />
                            </div> {/* Fim div icone-mode*/}

                            <div className="text">
                                <a href="#">Mode</a>
                            </div> {/* Fim div texto-mode */}

                        </button>

                        <button className="Btn">
                            
                            <div className="sign">
                                <FontAwesomeIcon className="fa-solid" icon={faRobot} />
                            </div> {/* Fim div icone-chat */}

                            <div className="text">
                                <a href="#">Chat</a>
                            </div> {/* Fim div texto-chat */}

                        </button>

                        <button className="Btn">
                            
                            <div className="sign">
                                <svg viewBox="0 0 512 512">
                                    <path
                                        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z">
                                    </path>
                                </svg>
                            </div> {/* Fim div sign */}

                            <div className="text">
                                <Link href="/Login">Sign in</Link>
                            </div> {/* Fim div text-sign */}

                        </button>

                    </div> {/* Fim div botoes-opcoes-menu */}
                </div> {/* Fim div cotainer-terciario */}

                <div className="menu-hamburguer">
                    <FontAwesomeIcon className="fa-solid" id="menu-hamburguer" icon={faBars} />
                </div> {/* Fim div menu-hamburguer */}
            
            </div> {/* Fim div container */}
        </header>

    );
}