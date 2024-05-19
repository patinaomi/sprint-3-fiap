"use client"

// Importação Geral
import Link from "next/link"
import React, { useState, useEffect, useRef } from 'react';

/* Instalação do icone */

//npm install react-icons
import { RiMenuLine } from 'react-icons/ri'; // Importe o ícone de hambúrguer

// Importação do CSS
import './style.css'

/* Criação da função principal  que irá retornar o componente */

export default function Menu() {

    // Estado para controlar a visibilidade das opções de configuração - Precisa abrir um novo box de opções em baixo do meu menu
    const [configOpen, setConfigOpen] = useState(false); // Para configurações
    const [configOpenForm, setConfigOpenForm] = useState(false); // Para os formulários
    const [configOpenMenu, setconfigOpenMenu] = useState(false); // Para o menu hamburguer
    

    // Para fazer o menu sumir quando eu clicar ou encostar na opção desejada

    const formRef = useRef<HTMLUListElement | null>(null);
    const configRef = useRef<HTMLUListElement | null>(null);
    const configMenuRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event:any) {
            if (formRef.current && !formRef.current.contains(event.target)) {
                setConfigOpenForm(false);
            }
            if (configRef.current && !configRef.current.contains(event.target)) {
                setConfigOpen(false);
            }
            if (configMenuRef.current && !configMenuRef.current.contains(event.target)) {
                setconfigOpenMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Função para alternar a visibilidade das opções de configuração - Aqui precisa abrir idioma, tema e outras configurações.
    const toggleConfig = () => {
        setConfigOpen(!configOpen);
    };

    const toggleForm = () => {
        setConfigOpenForm(!configOpenForm);
    };

    const toggleMenu = () => {
        setconfigOpenMenu(!configOpenMenu);
    };


    return (

        <header className="header">

            <div className="container-menu">
                
                <div className="container-primario-menu">

                    <div className="logo-sales-force">
                        <h1 className="texto-logo-salesforce"><li className="opcoes-menu-navegacao-ul-li"><Link className="titulo-opcoes-menu" href="/">SalesForce</Link></li></h1>
                    </div> {/* Fim div logo-sales-force */}

                </div> {/* Fim div container-primario */}

                <div className="container-secundario-menu">    
                    
                    <div className="opcoes-menu">

                        <nav className="opcoes-menu-navegacao">
                            <ul className="opcoes-menu-navegacao-ul">
                                <li className="opcoes-menu-navegacao-ul-li"><Link className="titulo-opcoes-menu" href="/">Home</Link></li>
                                <li className="opcoes-menu-navegacao-ul-li"><Link href="#sobreEmpresa">Empresa</Link></li>
                                <li className="opcoes-menu-navegacao-ul-li"><Link href="#produtos">Produtos</Link></li>
                                
                                <li className="opcoes-menu-navegacao-ul-li">
                                    <a className="titulo-opcoes-menu" onClick={toggleForm}>Formulários</a>
                                    {configOpenForm && (
                                    <ul ref={formRef} className="config-dropdown">
                                        <li><Link href="/FormularioContato">Contato</Link></li>
                                        <li><Link href="/Cadastro">Cadastro</Link></li>
                                        <li><Link href="/Pesquisa">Pesquisa de satisfação</Link></li>
                                        <li><Link href="/SobreFormularioNecessidade">Necessidade</Link></li>
                                    </ul>
                                    )}
                                </li>

                                <li className="opcoes-menu-navegacao-ul-li"><Link href="#projetos">Projeto</Link></li>
                                
                                <li className="opcoes-menu-navegacao-ul-li">
                                <a className="titulo-opcoes-menu" onClick={toggleConfig}>Configurações</a>
                                {configOpen && (
                                <ul ref={configRef} className="config-dropdown">
                                    <li><a href="#">Idioma</a></li>
                                    <li><a href="#">Tema</a></li>
                                </ul>
                                )}
                                </li>
                            

                                
                            </ul>
                        </nav>

                    </div> {/* Fim div opcoes-menu */}
                    
                </div> {/* Fim div container-secundario */}
                                    
                <div className="container-login-principal-menu">
                    <button className="btn-login-principal-menu"><Link className="nome-menu-botao" href="/Login">Login</Link></button>                
                </div>

                <div className="div-menu-hamburguer">
                    
                    <button className="menu-hamburguer-button" onClick={toggleMenu}>
                        <h1 className="titulo-menu-hamburguer">Menu</h1>
                    </button>
                
                {configOpenMenu && (
                    <ul ref={configMenuRef} className="menu-hamburguer">
                        <li><a href="/">Home</a></li>
                        <li><a href="#sobreEmpresa">Empresa</a></li>
                        <li><a href="#produtos">Produtos</a></li>
                        <a className="titulo-opcoes-menu-form" onClick={toggleForm}>Formulários</a>
                                    {configOpenForm && (
                                    <ul ref={formRef} className="config-dropdown">
                                        <li><Link href="/FormularioContato">Contato</Link></li>
                                        <li><Link href="/Cadastro">Cadastro</Link></li>
                                        <li><Link href="/Pesquisa">Pesquisa de satisfação</Link></li>
                                        <li><Link href="/SobreFormularioNecessidade">Necessidade</Link></li>
                                    </ul>
                                    )}
                        <li><Link href="/Login">Login</Link></li>
                    </ul>

                    )}
                </div> {/* Fim div menu-hamburguer */}
            
            </div> {/* Fim div container */}
    
        </header>

    );
}