"use client"

/* Importações gerais */
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";


/* Importações de componentes */
// import NavSolution from './NavSolution'
import NavForms from "./NavForms";
import TextReader from "./TextReader";
import  FocusableComponent from '../components/FocusableComponent';

export default function Navbar(){

    /* Abrir o menu quando tiver em tamanho para mobile */
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    
    return(

        <header className="p-4 dark:bg-gray-700 dark:text-white">

            <div className="container flex justify-between h-16 mx-auto">

            <FocusableComponent id="text1" tabIndex={0}>
                
                <Link rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
            
                    <img src={'/assets/Navbar/imagem.svg'} width={100} height={500} alt="Logo da Sales Force"></img>    
                    
                </Link>

            </FocusableComponent>

                <ul className={`items-stretch lg:flex ${menuOpen ? 'block mobile-menu' : 'hidden'}`}>

                    <button onClick={closeMenu} className="lg:hidden close-button">Fechar</button>
                    
                    <li  className="flex items-center px-4 -mb-1 border-b-2 dark:text-[#FFFF] dark:border-[#FFFF] font-bold">
                        
                        <TextReader text="Produto">
                            
                            <Link id="text2" tabIndex={1}  rel="noopener noreferrer" href="/Product" >Produto</Link>

                        </TextReader>

                    </li>

                    <li  className="flex items-center px-4 -mb-1 border-b-2 dark:text-[#FFFF] dark:border-[#FFFF] font-bold">
                        
                        <TextReader text="Projeto">

                            <Link id="text3" tabIndex={2} rel="noopener noreferrer" href="/Project">Projeto</Link>

                        </TextReader>

                    </li>

                    <li  className="flex items-center px-4 -mb-1 border-b-2 dark:text-[#FFFF] dark:border-[#FFFF] font-bold">
                        
                        <TextReader text="CRM">

                            <Link id="text4" tabIndex={3} rel="noopener noreferrer" href="/CRM">CRM</Link>

                        </TextReader>

                    </li>

                    <li  className="flex items-center px-4 -mb-1 border-b-2 dark:text-[#FFFF] dark:border-[#FFFF] font-bold">
                        
                        <TextReader text="Serviços">

                            <Link id="text5" tabIndex={4} rel="noopener noreferrer" href="/Services">Serviços</Link>

                        </TextReader>

                    </li>

                    <li  className="flex">
                        
                        <Link id="text6" tabIndex={5} rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:text-[#FFFF] dark:border-[#FFFF] font-manrope">
                            
                        <NavForms/>
                            
                        </Link>

                    </li>   

                    {/* <li id="text5" tabIndex={4} className="flex">
                        
                        <Link rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:text-[#FFFF] dark:border-[#FFFF] font-manrope"><NavSolution/></Link>
                        
                    </li> */}

                </ul>

                <div className="items-center flex-shrink-0 hidden lg:flex">

                    <TextReader text="Acessar">

                        <Link id="text7" tabIndex={6} href="/Login"><button className="self-center px-8 py-3 rounded font-sen hover:text-[#3EA0E7]">Acessar</button></Link>
                        
                    </TextReader>

                    <TextReader text="Cadastre-se">
                    
                        <Link id="text8" tabIndex={7} href="/Cadastro"><button className="self-center px-4 py-3 font-sen rounded bg-segunda dark:bg-[#3EA0E7] dark:text-gray-50 text-white text-xl hover:bg-primeira">Cadastre-se</button></Link>

                    </TextReader>


                </div>

                <button className="p-4 lg:hidden" onClick={toggleMenu}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>

                </button>
            </div>

        </header>

    );
}