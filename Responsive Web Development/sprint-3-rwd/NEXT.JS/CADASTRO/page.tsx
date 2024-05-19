/* Preciso chamar o use client para simular visão do cliente, sem ele da erro*/
'use client'

/* Importar imagem */
import imagem from '../../../public/assets/Cadastro/undraw_shopping_re_3wst.svg'
import imagem2 from '../../../public/assets/Cadastro/salesforce-logo.svg'

/* Importar o CSS */
import './style.css'

/* Importar UseState*/
import { useState } from 'react'

/* Importação do LINK para direcionar para outra página */
import Link from 'next/link';

export default function Cadastro() {

    /* Ao preencher o formulário de cadastro, será baixado o arquivo para manipulação em Python */

    const [InformacoesFormulario, setInformacoesFormulario ] = useState({
        nome: '',
        sobrenome:'',
        email:'',
        telefone:'',
        senha:'',
        confirmacaoSenha:'',
        genero:'',
        empresa:'',
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setInformacoesFormulario({
            ...InformacoesFormulario,
            [name]: value
        });
    };

    /* Para salvar as informações em csv */
    const saveDataToCSV = (InformacoesFormulario: any) => {
        /* Verificar as informações antes de baixar */
        console.log(InformacoesFormulario);
    
        const csvContent = "Nome,Sobrenome,Email,Telefone,Senha,ConfirmacaoSenha,Genero,Empresa\n" +
            `${InformacoesFormulario.nome},${InformacoesFormulario.sobrenome},${InformacoesFormulario.email},${InformacoesFormulario.telefone},${InformacoesFormulario.senha},${InformacoesFormulario.confirmacaoSenha},${InformacoesFormulario.genero},${InformacoesFormulario.empresa}\n`;
    
        const link = document.createElement('a');
        link.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
        link.download = 'form_data.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    

    const handleSubmit = (e:any) => {
        e.preventDefault();

        /* Chama a função para salvar os dados em CSV*/
        saveDataToCSV(InformacoesFormulario);
    };

    return (
        <div className="container-cadastro">
            
            <div className="form-image-cadastro">

                <div>
                    <img className='imagem-pagina-cadastro-sales' src={imagem2.src} alt="Logo do Tokito Tech" />
                </div>

                <div>
                    <img className='imagem-pagina-cadastro' src={imagem.src} alt="Logo da Sales Force" />
                </div>

            </div> {/* Fim da div form-image */}
            
            <div className="form-cadastro">
                <form className='formulario-cadastro' action="#" onSubmit={handleSubmit}>
                    
                    <div className="form-header-cadastro">
                        
                        <div className="title-pagina-cadastro">
                            <h1>Cadastre-se</h1>
                        </div> {/* Fim da div title*/}

                        <div className="login-button-pagina-cadastro">
                            <Link href="/Login">
                                <button className='botao-login'>Entrar</button>
                            </Link>
                        </div> {/* Fim da div login-button */}

                    </div> {/* Fim da div form-header */}
                    
                    <div className="box-info-pessoais-cadastro">
                        
                        <div className="input-box">
                            <label htmlFor="nome">Primeiro Nome</label>
                            <input id="nome" type="text" name="nome" placeholder="Digite seu primeiro nome" required value={InformacoesFormulario.nome} onChange={handleChange} />
                        </div> {/* Fim da div input-box */}

                        <div className="input-box">
                            <label className='titulos-inputs' htmlFor="sobrenome">Sobrenome</label>
                            <input id="sobrenome" type="text" name="sobrenome" placeholder="Digite seu sobrenome" required value={InformacoesFormulario.sobrenome} onChange={handleChange}/>
                        </div> {/* Fim da div input-box */}

                        <div className="input-box">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required value={InformacoesFormulario.email} onChange={handleChange} />
                        </div> {/* Fim da div input-box */}

                        <div className="input-box">
                            <label htmlFor="telefone">Celular</label>
                            <input id="telefone" type="tel" name="telefone" placeholder="(xx) xxxx-xxxx" required value={InformacoesFormulario.telefone} onChange={handleChange} />
                        </div> {/* Fim da div input-box */}

                        <div className="input-box">
                            <label htmlFor="senha">Senha</label>
                            <input id="senha" type="password" name="senha" placeholder="Digite sua senha" required value={InformacoesFormulario.senha} onChange={handleChange} />
                        </div> {/* Fim da div input-box */}

                        <div className="input-box">
                            <label htmlFor="confirmacaoSenha">Confirme sua Senha</label>
                            <input id="confirmacaoSenha" type="password" name="confirmacaoSenha" placeholder="Digite sua senha novamente" required value={InformacoesFormulario.confirmacaoSenha} onChange={handleChange} />
                        </div> {/* Fim da div input-box */}

                    </div> {/* Fim da div input-group */}

                    <div className="genero-inputs">
                        
                        <div className="genero-titulo">
                            <h6>Gênero</h6>
                        </div>  {/* Fim da div gender-title */}

                        <div className="genero-group">
                            
                            <div className="genero-input">
                                <input id="feminino" type="radio" name="genero" value="Feminino" onChange={handleChange} />
                                <label htmlFor="feminino">Feminino</label>
                            </div> {/* Fim da div gender-input */}

                            <div className="genero-input">
                                <input id="masculino" type="radio" name="genero" value="Masculino" onChange={handleChange} />
                                <label htmlFor="masculino">Masculino</label>
                            </div> {/* Fim da div gender-input */}

                            <div className="genero-input">
                                <input id="outros" type="radio" name="genero" value="Outros" onChange={handleChange} />
                                <label htmlFor="outros">Outros</label>
                            </div> {/* Fim da div gender-input */}

                            <div className="genero-input">
                                <input id="semDefinicao" type="radio" name="genero" value="Sem denificao" onChange={handleChange} />
                                <label htmlFor="semDefinicao">Prefiro não dizer</label>
                            </div> {/* Fim da div gender-input */}

                        </div> {/* Fim da div gender-group */}

                    </div> {/* Fim da div gender-inputs */}

                    <div className="opcoes-inputs">
                        
                        <div className="empresa-titulo">
                            <h6>Sobre empresa</h6>
                        </div> {/* Fim da div empresa-title */}

                        <div className="empresa-group">

                            <div className="empresa-input">
                                <input id="funcionario" type="radio" name="empresa" value="Funcionario" onChange={handleChange} />
                                <label htmlFor="funcionario">Funcionário</label>
                            </div>  {/* Fim da div empresa-input */}

                            <div className="empresa-input">
                                <input id="proprietario" type="radio" name="empresa" value="Proprietario" onChange={handleChange} />
                                <label htmlFor="proprietario">Proprietário</label>
                            </div> {/* Fim da div empresa-input */}

                            <div className="empresa-input">
                                <input id="filiado" type="radio" name="empresa" value="Filiado" onChange={handleChange} />
                                <label htmlFor="filiado">Filiado</label>
                            </div> {/* Fim da div empresa-input */}

                            <div className="empresa-input">
                                <input id="estudante" type="radio" name="empresa" value="Estudante" onChange={handleChange} />
                                <label htmlFor="estudante">Estudante</label>
                            </div> {/* Fim da div empresa-input */}

                        </div> {/* Fim da div empresa-group */}

                    </div> {/* Fim da div empresa-input */}


                    <div className="continue-button">
                        <button className='botao-continuar' type="submit">Continuar</button>
                    </div> {/* Fim da div continue-button */}
                </form>
            </div> {/* Fim da div form */}
        </div> /* Fim da div container-cadastro*/ 
    );
}
