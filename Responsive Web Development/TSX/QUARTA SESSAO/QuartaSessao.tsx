import React, { useState } from 'react';
import { register } from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

/* IMPORT DO CSS */
import './StyleQuartaSessao.css'

/* IMPORTAR AS IMAGENS */
import imagem1 from '../../assets/TerceiraSessao/ATENDIMENTO_CLIENTE.svg'
import imagem2 from '../../assets/TerceiraSessao/COMMERCE.svg'
import imagem3 from '../../assets/TerceiraSessao/IA.svg'
import imagem4 from '../../assets/TerceiraSessao/MARKETING.svg'
import imagem5 from '../../assets/TerceiraSessao/MULE_SOFT.svg'
import imagem6 from '../../assets/TerceiraSessao/NET_ZERO.svg'
import imagem7 from '../../assets/TerceiraSessao/NUVEM_DADOS.svg'
import imagem8 from '../../assets/TerceiraSessao/PARCEIROS.svg'
import imagem9 from '../../assets/TerceiraSessao/PEQUENAS_EMPRESAS.svg'
import imagem10 from '../../assets/TerceiraSessao/PLATAFORMAS.svg'
import imagem11 from '../../assets/TerceiraSessao/SLACK.svg'
import imagem12 from '../../assets/TerceiraSessao/SUCESSO.svg'
import imagem13 from '../../assets/TerceiraSessao/TABLEAU.svg'
import imagem14 from '../../assets/TerceiraSessao/VENDAS.svg'

export default function QuartaSessao() {


    /* CONFIGURAÇÃO PARA FAZER AS ALTERAÇÕES NO CARROSEL */

    const imagens = [
        {id:'1', imagem: imagem1, title: 'Atendimento ao cliente', texto: 'Revolucione a maneira como as equipes de atendimento entregam valor a cada contato com o cliente — desde a experiência do cliente ao engajamento, processos, automação e operações. Potencialize o valor de vida útil do cliente, reduza custos e maximize a eficiência, reinventando o atendimento com o Service Cloud - da central de atendimento ao atendimento em campo.'},
        {id:'2', imagem: imagem2, title: 'Commerce', texto: 'Amplie seu comércio integrado com confiança na plataforma mais completa. Simplifique tudo, da configuração da sua loja digital até a promoção de vendas, em qualquer ponto de contato com o cliente, utilizando IA nativa e automação. Tudo isso com o poder do melhor CRM de IA.'},
        {id:'3', imagem: imagem3, title: 'IA - Inteligência Artificial', texto: 'A IA da Salesforce oferece inteligência artificial confiável e extensível, com base na estrutura da nossa plataforma Einstein 1. Utilize a nossa IA nos dados de seus clientes para criar experiências de IA personalizadas, preditivas e generativas para atender a todas as suas necessidades de negócio com segurança. Leve a IA conversacional a qualquer fluxo de trabalho, usuário, departamento e indústria com o Einstein.'},
        {id:'4', imagem: imagem4, title: 'Marketing', texto: 'Desde a compreensão de seus dados até o impulsionamento do engajamento em cada canal, fortaleça todos os aspetos de sua estratégia de marketing com nosso conjunto completo de soluções de software de marketing digital.'},
        {id:'5', imagem: imagem5, title: 'MuleSoft', texto: 'Com a MuleSoft, integre dados de qualquer sistema e automatize tarefas complexas para fornecer experiências do cliente conectadas mais rapidamente.'},
        {id:'6', imagem: imagem6, title: 'Net Zero', texto: 'Você está preparado para os mandatos de relatórios ESG? A Net Zero Cloud pode ajudá-lo a cumprir os regulamentos CSRD, regulamentações da Califórnia e quaisquer novos requisitos. A Net Zero Cloud integra dados ambientais, sociais e de governança e mergulha fundo em carbono, resíduos e água para toda a sua cadeia de valor.'},
        {id:'7', imagem: imagem7, title: 'Nuvem de Dados', texto: 'Ative todos dados dos seus clientes nos diversos apps da Salesforce com o Data Cloud. Capacite as equipes a envolver os clientes, em cada ponto de contato, com insights relevantes e dados contextuais no fluxo do trabalho.'},
        {id:'8', imagem: imagem8, title: 'Parceiros', texto: 'Inove e cresça mais rápido com o ecossistema de parceiros número 1 em IA + Dados + CRM. Alcance o sucesso com aplicativos e especialistas parceiros confiáveis.'},
        {id:'9', imagem: imagem9, title: 'Pequenas Empresas', texto: 'Com o Sales Cloud para Pequenas Empresas, você pode gerir sua operação de forma inteligente e flexível. Inove, conquiste mais leads, aumente as vendas e melhore a experiência dos clientes conforme sua empresa cresce.'},
        {id:'10', imagem: imagem10, title: 'Plataforma', texto: 'Crie apps, acelere a automação e alcance o sucesso imediato. Automatize processos, crie apps melhores e proteja dados em todo o Customer 360.'},
        {id:'11', imagem: imagem11, title: 'Slack', texto: 'O Slack consolida pessoas, conhecimento e seus aplicativos favoritos, tudo junto, no espaço de trabalho que todos já usam. Capacite as equipes a acelerar processos e entregar resultados de excelência, com automação fácil, IA confiável e transparência no trabalho em equipe. Produtividade é o sobrenome do Slack'},
        {id:'12', imagem: imagem12, title: 'Sucesso', texto: 'Maximize o seu ROI com os serviços e parceiros certos para você. Obtenha o máximo de valor do seu investimento no Salesforce. Com recursos de autoatendimento, orientação proativa personalizada, especialistas em Salesforce e uma rede de parceiros, estamos aqui para guiá-lo ao sucesso na era da IA.'},
        {id:'13', imagem: imagem13, title: 'Tableau', texto: 'Tome decisões acompanhando a velocidade de mudanças para proporcionar sucesso imediaton. Descubra as conexões entre dados, insights e melhores resultados de negócios com a análise completa.'},
        {id:'14', imagem: imagem14, title: 'Vendas', texto: 'Venda mais rápido, mais inteligente e com mais eficiência, graças à combinação de IA + Dados + CRM. Impulsione a produtividade e expanda de uma maneira completamente inovadora, com o CRM com IA para vendas Nº 1 do mercado.'},
    ]

    /* CONFIGURAÇÃO PARA COLETAR O FEEDBACK DO CLIENTE SOBRE OS PRODUTOS */
    const [ameiCount, setAmeiCount] = useState(0);
    const [curtiCount, setCurtiCount] = useState(0);
    const [naoCurtiCount, setNaoCurtiCount] = useState(0);

    const handleAmeiClick = () => {
        setAmeiCount(ameiCount + 1);
    };

    const handleCurtiClick = () => {
        setCurtiCount(curtiCount + 1);
    };

    const handleNaoCurtiClick = () => {
        setNaoCurtiCount(naoCurtiCount + 1);
    };
    
    return ( 
        <div id="intro">

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                <h1 className='titulo-pagina-carrosel'> Conheça ainda mais sobre os nossos produtos </h1>

            </div>

            <div>
                <Swiper
                    slidesPerView={1}
                    pagination={{clickable:true}}
                    navigation
            
                >

                {imagens.map( (item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.imagem} alt="Foto da IA" className='slide-item' />
                        <h1 className='titulo-carrosel'>{item.title}</h1>
                        <p className="texto_carrosel">{item.texto}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            
            <div className='frase-feedback'>
            <h2> Curtiu o nosso conteúdo? Clica em AMEI, esse feedback vai nos ajudar a melhorar nossos conteúdos e serviços. </h2>
            </div>
            
            <div className="like">
                <i id="amei" className="fa-solid fa-heart" onClick={handleAmeiClick}> Amei</i>
                    <span className='contagem' id="ameiCount">{ameiCount}</span>
                <i id="curti" className="fa-regular fa-thumbs-up" onClick={handleCurtiClick}> Curti </i>
                    <span className='contagem' id="curtiCount">{curtiCount}</span>
                <i id="nao_curti" className="fa-solid fa-thumbs-down" onClick={handleNaoCurtiClick}> Nao Curti </i>
                    <span className='contagem' id="naoCurtiCount">{naoCurtiCount}</span>
            </div>
        </div>
    );
}