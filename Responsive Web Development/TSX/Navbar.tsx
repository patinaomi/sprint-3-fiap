

export default function Navbar() {
    return (

        <header id="content-top">
            <div className="content-top--div max-container">
                <div className="nav-wrapper">

                 
                    <div className="nav-wrapper--logo">
                        <a href="index.html" className="top-nav--logo">Sales<span>force</span></a>
                    </div> 

                    <nav className="nav-items">
                        <ul className="nav-items-list">
                            <li className="nav-items-list--1"><a href="produto.html">Produtos</a></li>
                            <li className="nav-items-list--1"><a href="empresa.html">Empresa</a></li>
                            <li className="nav-items-list--1"><a href="#">Industria</a></li>
                            <li className="nav-items-list--1"><a href="#">Contato</a></li>
                            <li className="nav-items-list--1"><a href="equipe.html">Equipe</a></li>
                        </ul>
                    </nav>
                    
                    <div className="nav-util">
                        <div className="input-wrapper">
                            <button className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px"
                                    width="25px">
                                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff"
                                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z">
                                    </path>
                                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff"
                                        d="M22 22L20 20">

                                    </path>
                                </svg>
                            </button>
                            <input placeholder="pesquisar.." className="input" name="text" type="text"/>
                        </div>

                        

                        <button className="Btn">
                            <div className="sign idioma">
                                <i className="fa-solid fa-globe"></i>
                            </div>
                            <div className="text">
                                <a href="#">Idioma</a>
                            </div> 
                        </button>

                        <button className="Btn">
                            <div className="sign mode">
                                <i className="fa-solid fa-moon"></i>
                            </div> 

                            <div className="text">
                                <a href="#">Mode</a>
                            </div> 
                        </button>

                        <button className="Btn">
                            <div className="sign">
                                <svg viewBox="0 0 512 512">
                                    <path
                                        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z">
                                    </path>
                                </svg>
                            </div>

                            <div className="text">
                                <a href="login.html">Login
                                </a>
                            </div>
                        </button>
                    </div> 
                </div> 
            </div> 
        </header>
    )
}

