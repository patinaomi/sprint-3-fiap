/* Preciso chamar o use client para simular visão do cliente, sem ele da erro*/
'use client'

/* Importar imagem */
import imagem from '../../../public/assets/FormularioContato/undraw_shopping_re_3wst.svg'
import imagem2 from '../../../public/assets/FormularioContato/salesforce-logo.svg'

/* Importar o CSS */
import './style.css'

/* Importar UseState*/
import { useState } from 'react'


export default function FormularioContato() {

    /* Ao preencher o formulário de cadastro, será baixado o arquivo para manipulação em Python */

    const [formContato, setFormContato ] = useState({
        nome: '',
        email:'',
        telefone:'',
        segmento:'',
        cargo:'',
        tamanhoEmpresa:'',
        produto:'',
        regiao:'',
        idioma:''
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormContato({
            ...formContato,
            [name]: value
        });
    };

    /* Para salvar as informações em csv */
    const saveDataToCSV = (formContato: any) => {
        /* Verificar as informações antes de baixar */
        console.log(formContato);
    
        const csvContent = "Nome,Sobrenome,Email,Telefone,Senha,ConfirmacaoSenha,Genero,Empresa\n" +
            `${formContato.nome},${formContato.email},${formContato.telefone},${formContato.segmento},${formContato.cargo},${formContato.tamanhoEmpresa},${formContato.produto},${formContato.regiao}, ${formContato.idioma}\n`;
    
        const link = document.createElement('a');
        link.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
        link.download = 'form_data_formulario_contato.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    

    const handleSubmit = (e:any) => {
        e.preventDefault();

        /* Chama a função para salvar os dados em CSV*/
        saveDataToCSV(formContato);
    };

    return (
        <div className="container-formulario-contato">
            
            <div className="form-image-contato">

                <div className='primeira-imagem-form-contato'>
                    <img className='imagem-form-contato' src={imagem2.src} alt="Logo da Sales Force" />
                </div> {/* Fim div primeira-imagem-form-contato */}

                <div className='segunda-imagem-form-contato'>
                    <img className='imagem2-form-contato' src={imagem.src} alt="Imagem ilustrativa" />
                </div> {/* Fim div segunda-imagem-form-contato */}

            </div> {/* Fim div form-image-contato */}
            
            <div className="form-content-contato">
                
                <form className='formulario-contato' action="#" onSubmit={handleSubmit}>
                    
                    <div className="form-header-contato">
                        
                        <div className="title-form-contato">
                            <h1 className='titulo-principal-form-contato'>Contato</h1>
                        </div> {/* Fim div title-form-contato*/}

                        <div className="chat-button-form-contato">
                                <button className='botao-login'>Contato Chat</button>
                        </div> {/* Fim div chat-button-form-contato */}

                    </div> {/* Fim div form-header-contato */}
                    
                    <div className="box-info-pessoais-form-contato">
                        
                        <div className="input-box-form-contato">
                            
                            <label className='form-label-contato' htmlFor="nome">Nome completo</label>
                            
                            <input className='input-form-contato' id="nome" type="text" name="nome" placeholder="Digite seu nome" required value={formContato.nome} onChange={handleChange} />

                        </div> {/* Fim div input-box-form-contato */}

                        <div className="input-box-form-contato">
                            
                            <label className='label-form-contato' htmlFor="email">Email</label>
                            
                            <input className='input-form-contato' id="email" type="mail" name="email" placeholder="Digite o e-mail" required value={formContato.email} onChange={handleChange}/>

                        </div> {/* Fim div input-box-form-contato */}

                        <div className="input-box-form-contato">
                            
                            <label className='label-form-contato' htmlFor="telefone">Telefone</label>
                            
                            <input className='input-form-contato' id="telefone" type="tel" name="telefone" placeholder="(xx) xxxx-xxxx" required value={formContato.telefone} onChange={handleChange} />

                        </div> {/* Fim div input-box-form-contato */}

                        <div className="input-box-form-contato">
                            
                            <label className='label-form-contato' htmlFor="segmento">Segmento</label>
                            
                            <input className='input-form-contato' id="segmento" type="text" name="segmento" placeholder="Digite o Segmento" required value={formContato.segmento} onChange={handleChange} />

                        </div> {/* Fim div input-box-form-contato */}

                        <div className="input-box-form-contato">
                            
                            <label className='label-form-contato' htmlFor="cargo">Cargo</label>
                            
                            <input className='input-form-contato' id="cargo" type="text" name="cargo" placeholder="Digite seu cargo" required value={formContato.cargo} onChange={handleChange} />

                        </div> {/* Fim div input-box-form-contato */}

                        <div className="input-box-form-contato">
                            
                            <label className='label-form-contato' htmlFor="outros">Região</label>
                            
                            <input className='input-form-contato' id="regiao" type="text" name="regiao" placeholder="Digite sua Regiao" required value={formContato.regiao} onChange={handleChange} />

                        </div> {/* Fim div input-box-form-contato */}

                    </div> {/* Fim div input-group-content-person-contact */}

                    <div className="box-tamanho-empresa-form-contato">
                        
                        <div className="titulo-tamanho-empresa-contato">
                            <label className='form-label-contato' htmlFor="tamanhoEmpresa">Tamanho da empresa
                            </label>
                        </div>  {/* Fim div titulo-tamanho-empresa-contato */}

                        <div className="grupo-tamanho-empresa-form-contato">
                            
                            <div className="tamanho-empresa-input">
                                
                                <input className='input-tamanho-empresa' id="pequena" type="radio" name="pequena" value="pequena" onChange={handleChange} />
                                
                                <label className='label-tamanho-empresa' htmlFor="pequeno">Pequena</label>

                            </div> {/* Fim div tamanho-empresa-input */}

                            <div className="tamanho-empresa-input">
                                
                                <input className='input-tamanho-empresa' id="media" type="radio" name="media" value="media" onChange={handleChange} />
                                
                                <label className='label-tamanho-empresa' htmlFor="media">Média</label>

                            </div> {/* Fim div tamanho-empresa-input */}

                            <div className="tamanho-empresa-input">
                                
                                <input className='input-tamanho-empresa' id="grande" type="radio" name="grande" value="grande" onChange={handleChange} />
                                
                                <label className='label-tamanho-empresa' htmlFor="grande">Grande</label>

                            </div> {/* Fim div tamanho-empresa-input */}

                            <div className="tamanho-empresa-input">
                                
                                <input className='input-tamanho-empresa' id="multinacional" type="radio" name="multinacional" value="multinacional" onChange={handleChange} />
                                
                                <label className='label-tamanho-empresa' htmlFor="multinacional">Multinacional</label>

                            </div> {/* Fim div tamanho-empresa-input */}

                        </div> {/* Fim div grupo-tamanho-empresa */}

                    </div> {/* Fim div box-tamanho-empresa */}

                    <div className="box-produto-form-contato">
                        
                        <div className="titulo-tamanho-empresa-contato">
                            <label className='form-label-contato' htmlFor="tamanhoEmpresa">Produto
                            </label>
                        </div>  {/* Fim div titulo-tamanho-empresa-contato */}

                        <div className="grupo-produto-form-contato">

                            <div className="produto-form-contato-input">
                                
                                <input className='input-produto-form-contato' id="ia" type="radio" name="ia" value="ia" onChange={handleChange} />
                                
                                <label className='label-produto-form-contato' htmlFor="ia">IA</label>

                            </div>  {/* Fim div input-produto-form-contato */}

                            <div className="produto-form-contato-input">
                                
                                <input className='input-produto-form-contato' id="marketing" type="radio" name="marketing" value="marketing" onChange={handleChange} />
                                
                                <label className='label-produto-form-contato' htmlFor="marketing">Marketing</label>

                            </div> {/* Fim div input-produto-form-contato */}

                            <div className="produto-form-contato-input">
                                
                                <input className='input-produto-form-contato' id="commerce" type="radio" name="commerce" value="commerce" onChange={handleChange} />
                                
                                <label className='label-produto-form-contato' htmlFor="commerce">Commerce</label>

                            </div> {/* Fim div input-produto-form-contato */}

                            <div className="produto-form-contato-input">
                                
                                <input className='input-produto-form-contato' id="nuvem-dados" type="radio" name="nuvem-dados" value="nuvem-dados" onChange={handleChange} />
                                
                                <label className='label-produto-form-contato' htmlFor="nuvem-dados">Nuvem Dados</label>

                            </div> {/* Fim div input-produto-form-contato */}

                            <div className="produto-form-contato-input">
                                
                                <input className='input-produto-form-contato' id="mule-soft" type="radio" name="mule-soft" value="mule-soft" onChange={handleChange} />
                                
                                <label className='label-produto-form-contato' htmlFor="mule-soft">Mule Soft</label>

                            </div> {/* Fim div input-produto-form-contato */}

                            <div className="produto-form-contato-input">
                                
                                <input className='input-produto-form-contato' id="slack" type="radio" name="slack" value="slack" onChange={handleChange} />
                                
                                <label className='label-produto-form-contato' htmlFor="slack">Slack</label>

                            </div> {/* Fim div input-produto-form-contato */}

                            <div className="produto-form-contato-input">
                                
                                <input className='input-produto-form-contato' id="tableau" type="radio" name="tableau" value="tableau" onChange={handleChange} />
                                
                                <label className='label-produto-form-contato' htmlFor="tableau">Tableau</label>

                            </div> {/* Fim div input-produto-form-contato */}

                            <div className="produto-form-contato-input">
                                
                                <input className='input-produto-form-contato' id="net-zero" type="radio" name="net-zero" value="net-zero" onChange={handleChange} />
                                
                                <label className='label-produto-form-contato' htmlFor="net-zero">Net Zero</label>

                            </div> {/* Fim div input-produto-form-contato */}

                            <div className="produto-form-contato-input">
                                
                                <input className='input-produto-form-contato' id="vendas" type="radio" name="vendas" value="vendas" onChange={handleChange} />
                                
                                <label className='label-produto-form-contato' htmlFor="vendas">Vendas</label>

                            </div> {/* Fim div input-produto-form-contato */}

                            <div className="produto-form-contato-input">
                                
                                <input className='input-produto-form-contato' id="pequenas-empresas" type="radio" name="pequenas-empresas" value="pequenas-empresas" onChange={handleChange} />
                                
                                <label className='label-produto-form-contato' htmlFor="pequenas-empresas">Pequenas Empresas</label>

                            </div> {/* Fim div input-produto-form-contato */}

                        </div> {/* Fim da div empresa-group */}

                    </div> {/* Fim da div empresa-input */}

                    <div className="box-idioma-contato">
                        
                        <div className="titulo-tamanho-empresa-contato">
                            <label className='form-label-contato' htmlFor="tamanhoEmpresa">Idioma de contato
                            </label>
                        </div>  {/* Fim div titulo-tamanho-empresa-contato */}

                        <div className="grupo-idioma-form-contato">
                            
                            <div className="idioma-contato-input">
                                
                                <input className='input-idioma-contato' id="pequena" type="radio" name="pequena" value="pequena" onChange={handleChange} />
                                
                                <label className='label-idioma-contato' htmlFor="pequeno">Português</label>

                            </div> {/* Fim div tamanho-empresa-input */}

                            <div className="idioma-contato-input">
                                
                                <input className='input-idioma-contato' id="media" type="radio" name="media" value="media" onChange={handleChange} />
                                
                                <label className='label-idioma-contato' htmlFor="media">Inglês</label>

                            </div> {/* Fim div tamanho-empresa-input */}

                            <div className="idioma-contato-input">
                                
                                <input className='input-idioma-contato' id="grande" type="radio" name="grande" value="grande" onChange={handleChange} />
                                
                                <label className='label-idioma-contato' htmlFor="grande">Espanhol</label>

                            </div> {/* Fim div tamanho-empresa-input */}

                            <div className="idioma-contato-input">
                                
                                <input className='input-idioma-contato' id="multinacional" type="radio" name="multinacional" value="multinacional" onChange={handleChange} />
                                
                                <label className='label-idioma-contato' htmlFor="multinacional">Frances</label>

                            </div> {/* Fim div tamanho-empresa-input */}

                        </div> {/* Fim div grupo-tamanho-empresa */}

                    </div> {/* Fim div box-tamanho-empresa */}

                    <div className="continue-button-form-contato">
                        <button className='botao-continuar' type="submit">Enviar</button>
                    </div> {/* Fim da div continue-button */}
                </form>
            </div> {/* Fim da div form */}
        </div> /* Fim da div container-cadastro*/ 
    );
}
