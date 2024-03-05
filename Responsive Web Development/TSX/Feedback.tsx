import './styleFeedback.css'
export default function FeedbackSection() {
    return (
        <div id="feedback" className="feedback">
            <div className="container">

                <div>
                <h1 className="titulo-feedback">Sua opinião é extremamente</h1>
                <h1 className='subtitulo-feedback'>importante <span className='span-titulo-feedback'> para nós.</span></h1>
                </div>
            <div className='container-feedback'>

            <div className="box-frase-feedback">
                
                <h1 className='titulo-frase-feedback'>Sobre o Feedback</h1>
                
                <p className="feedbacks_textos">A sua opinião é fundamental para nós! Colabore conosco respondendo à nossa pesquisa de satisfação.</p>
                
                <span className='frase-efeito-feedback'>Sua participação é essencial!</span>
                
                <p className="feedbacks_textos">A pesquisa é rápida e simples: selecione o número de estrelas, onde 1 representa 'muito ruim' e 5 'excelente'.</p>
                
                <p className="feedbacks_textos">Se possível, deixe um comentário com elogios, sugestões ou críticas para que possamos nos aprimorar e oferecer um serviço ainda melhor.</p>
                
                
            </div>



                <div className="row">
                    <div className="container-resposta-feedback">
                        <h1 className="titulo-box-feedback">faça sua avaliação agora mesmo</h1>
                        
                        <form className="formulario_feedback">
                            <div className="rating">
                                <input type="number" name="rating" id="rating" hidden required />
                                <i className='bx bx-star star' id="star-0"></i>
                                <i className='bx bx-star star' id="star-1"></i>
                                <i className='bx bx-star star' id="star-2"></i>
                                <i className='bx bx-star star' id="star-3"></i>
                                <i className='bx bx-star star' id="star-4"></i>
                            </div>

                            <textarea name="opinion" placeholder="Deixe uma sugestão, elogio, criticas ou algum comentário que possa nos ajudar..." required></textarea>
                            
                            <div className="btn-group">
                                <button type="submit" className="btn btn-primary" id="submitBtn">Enviar</button>
                                <button className="btn cancel">Cancelar</button>
                            </div>
                        </form>
                    
                    </div>

                </div>

                

            </div>

                
            </div>
        </div>
    );
}

