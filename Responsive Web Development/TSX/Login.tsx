
import './styleLogin.css'

export default function LoginForm() {
    return (
        <main>
            <div className="container" id="container">
                {/* PREPARAÇÃO PARA USO DO JAVASCRIPT */}
                {/* 
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Crie sua Conta</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>ou use seu email para se registrar</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Increva-se</button>
                    </form>
                </div>
                */}
                
                {/* SEGUNDA FORMA DO LOGIN */}
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Entre com</h1>
                        <div className="social-container">
                            <a href="#" className="social">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                                   
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                                </svg>
                            </a>
                            <a href="#" className="social">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
                                    
                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                                </svg>
                            </a>
                            <a href="#" className="social">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                    
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                                </svg>
                            </a>
                        </div>
                        <span>ou use sua conta</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Esqueceu sua senha?</a>
                        <button>Entrar</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        {/* UTILIZAREI NO FUTURO 
                        <div className="overlay-panel overlay-left">
                            <h1>Bem vindo, novamente!</h1>
                            <p>Para se manter conectado por favor entre com suas infomações pessoais</p>
                            <button className="ghost" id="signIn">Entrar</button>
                        </div> 
                        */}
                        <div className="overlay-panel overlay-right">
                            <h1>Bem vindo!</h1>
                            <p>Insira seus dados pessoais e venha conosco</p>
                            <button className="ghost" id="signUp">Inscreva-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

