/* Importar imagem */
import imagem from './assets/undraw_shopping_re_3wst.svg'

/* Importar o CSS */
import './style.css'

export default function Cadastro() {
    return (
        <div className="container-cadastro">
            
            <div className="form-image">
                <img className='imagem-pagina-cadastro' src={imagem} alt="" style={{ width: '100%', height: 'auto' }} />
            </div> {/* Fim da div form-image */}
            
            <div className="form">
                <form action="#">
                    
                    <div className="form-header">
                        
                        <div className="title">
                            <h1>Cadastre-se</h1>
                        </div> {/* Fim da div title*/}

                        <div className="login-button">
                            <button><a href="#">Entrar</a></button>
                        </div> {/* Fim da div login-button */}

                    </div> {/* Fim da div form-header */}
                    
                    <div className="input-group">
                        
                        <div className="input-box">
                            <label htmlFor="firstname">Primeiro Nome</label>
                            <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required />
                        </div> {/* Fim da div input-box */}

                        <div className="input-box">
                            <label htmlFor="lastname">Sobrenome</label>
                            <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome" required />
                        </div> {/* Fim da div input-box */}

                        <div className="input-box">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required />
                        </div> {/* Fim da div input-box */}

                        <div className="input-box">
                            <label htmlFor="number">Celular</label>
                            <input id="number" type="tel" name="number" placeholder="(xx) xxxx-xxxx" required />
                        </div> {/* Fim da div input-box */}

                        <div className="input-box">
                            <label htmlFor="password">Senha</label>
                            <input id="password" type="password" name="password" placeholder="Digite sua senha" required />
                        </div> {/* Fim da div input-box */}

                        <div className="input-box">
                            <label htmlFor="confirmPassword">Confirme sua Senha</label>
                            <input id="confirmPassword" type="password" name="confirmPassword" placeholder="Digite sua senha novamente" required />
                        </div> {/* Fim da div input-box */}

                    </div> {/* Fim da div input-group */}

                    <div className="gender-inputs">
                        
                        <div className="gender-title">
                            <h6>Gênero</h6>
                        </div>  {/* Fim da div gender-title */}

                        <div className="gender-group">
                            
                            <div className="gender-input">
                                <input id="female" type="radio" name="gender" />
                                <label htmlFor="female">Feminino</label>
                            </div> {/* Fim da div gender-input */}

                            <div className="gender-input">
                                <input id="male" type="radio" name="gender" />
                                <label htmlFor="male">Masculino</label>
                            </div> {/* Fim da div gender-input */}

                            <div className="gender-input">
                                <input id="others" type="radio" name="gender" />
                                <label htmlFor="others">Outros</label>
                            </div> {/* Fim da div gender-input */}

                            <div className="gender-input">
                                <input id="none" type="radio" name="gender" />
                                <label htmlFor="none">Prefiro não dizer</label>
                            </div> {/* Fim da div gender-input */}

                        </div> {/* Fim da div gender-group */}

                    </div> {/* Fim da div gender-inputs */}

                    <div className="opcoes-inputs">
                        
                        <div className="empresa-title">
                            <h6>Sobre empresa</h6>
                        </div> {/* Fim da div empresa-title */}

                        <div className="empresa-group">

                            <div className="empresa-input">
                                <input id="funcionario" type="radio" name="funcionario" />
                                <label htmlFor="funcionario">Funcionário</label>
                            </div>  {/* Fim da div empresa-input */}

                            <div className="empresa-input">
                                <input id="proprietario" type="radio" name="proprietario" />
                                <label htmlFor="proprietario">Proprietário</label>
                            </div> {/* Fim da div empresa-input */}

                            <div className="empresa-input">
                                <input id="filiado" type="radio" name="filiado" />
                                <label htmlFor="filiado">Filiado</label>
                            </div> {/* Fim da div empresa-input */}

                            <div className="empresa-input">
                                <input id="estudante" type="radio" name="estudante" />
                                <label htmlFor="estudante">Estudante</label>
                            </div> {/* Fim da div empresa-input */}

                        </div> {/* Fim da div empresa-group */}

                    </div> {/* Fim da div empresa-input */}


                    <div className="continue-button">
                        <button><a href="#">Continuar</a></button>
                    </div> {/* Fim da div continue-button */}
                </form>
            </div> {/* Fim da div form */}
        </div> /* Fim da div container-cadastro*/ 
    );
}
