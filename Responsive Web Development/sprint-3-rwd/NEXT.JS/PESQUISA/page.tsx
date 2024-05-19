'use client'
import { useState } from 'react';

/* Importação do CSS*/
import './style.css'


interface FormData {
    name: string;
    emailOrPhone: string;
    rating: string;
    opinion: string;
}

interface Props {
    onSubmit: (formData: FormData) => void;
}

export default function Pesquisa({ onSubmit }: Props) {
    const [rating, setRating] = useState('');
    const [opiniao, setOpinion] = useState('');
    const [nome, setNome] = useState('');
    const [emailOuTelefone, setEmailOuTelefone] = useState('');

    const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRating(event.target.value);
    };

    const handleOpinionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOpinion(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value);
    };

    const handleEmailOrPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailOuTelefone(event.target.value);
    };

    const handleFeedbackFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Mostrar no console minhas informações
        console.log('Dados da reserva:', { nome, rating, opiniao, emailOuTelefone });

        // Exibe um alerta personalizado após o envio do formulário
        alert(nome + ' seu feedback foi recebido com sucesso!\n '+ '\nDados ' + emailOuTelefone + '\nNota: ' + rating + '\nOpinião: ' + opiniao );

        // Limpar o formulário após o envio
        setRating('');
        setOpinion('');
        setNome('');
        setEmailOuTelefone('');
    };

    return (

        <div className='container-form-pesquisa'>

            <div className='box-mensagens-sobre-pesquisa'>

                <div className='box-form-info-pesquisa'>
                    <h1 className='titulo-pagina-pesquisa-satisfacao'>Sua opinião é super importante!</h1>

                    <p className='descritivo-pagina-pesquisa-satisfacao'>Queremos proporcionar a melhor experiência possível para você, nosso cliente valorizado. Sua opinião é crucial para entendermos o que estamos fazendo bem e onde podemos melhorar. Nosso objetivo é atender às suas necessidades de forma excepcional, e você pode nos ajudar a alcançar isso respondendo a nossa rápida pesquisa de satisfação.</p>


                </div>

            </div>

            <div className='box-form-pesquisa'>

                
                <form className="formulario_feedback" name="formulario_feedback" onSubmit={handleFeedbackFormSubmit}>

                    <h1 className='titulo-form-pesquisa'>Pesquisa</h1>
                    
                    <input type="text" value={nome} onChange={handleNameChange} placeholder="Seu nome" required />

                    <input type="text" value={emailOuTelefone} onChange={handleEmailOrPhoneChange} placeholder="E-mail ou telefone" required />
                    

                        <div className="rating-star">
                            <input value="5" name="rate" id="star5" type="radio" onChange={handleRatingChange}/>
                            <label title="text" htmlFor="star5"></label>

                            <input value="4" name="rate" id="star4" type="radio" onChange={handleRatingChange}/>
                            <label title="text" htmlFor="star4"></label>

                            <input value="3" name="rate" id="star3" type="radio" onChange={handleRatingChange}/>
                            <label title="text" htmlFor="star3"></label>

                            <input value="2" name="rate" id="star2" type="radio" onChange={handleRatingChange}/>
                            <label title="text" htmlFor="star2"></label>

                            <input value="1" name="rate" id="star1" type="radio" onChange={handleRatingChange}/>
                            <label title="text" htmlFor="star1"></label>
                        </div>
                    

                    <textarea name="opinion" value={opiniao} onChange={handleOpinionChange} placeholder="Sua opinião..." required></textarea>

                    <div className="btn-group">
                        <button type="submit" className="btn-pesquisa-satisfacao" id="submitBtn">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
