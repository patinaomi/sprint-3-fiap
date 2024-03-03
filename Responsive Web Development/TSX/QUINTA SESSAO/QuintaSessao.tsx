import './styleQuintaSessao.css'

import imagem1 from '../../assets/QuintaSessao/icone-engrenagens.png'
import imagem2 from '../../assets/QuintaSessao/cloud-icone.png'
import imagem3 from '../../assets/QuintaSessao/icone-suporte.png'
import imagem4 from '../../assets/QuintaSessao/pesquisa.svg'
import imagem5 from '../../assets/QuintaSessao/ranking-star-solid.svg'
import imagem6 from '../../assets/QuintaSessao/database-solid.svg'


export default function QuintaSessao() {
    
    return ( 
        <div id="info">
        <div className="content-info max-container">
            <h1>Existem diversas melhorias pautadas. Porque não listar algumas,<span> não é mesmo?</span></h1>
        </div>
        
        <div className="content-info--cont max-container">
            
            <div className="content-info-1">
                <img src={imagem1} alt=""/>
                <h3>Layout estilizado</h3>
                <p>Layout diáfano, com enfâse na estética, funcionalidade e acessibilidade. Facilitando a
                    visualização das informações mais relevantes. </p>
            </div>

            <div className="content-info-1">
                <img src={imagem2} alt=""/>
                <h3>Tour guiado interativo</h3>
                <p>Tour pelos produtos oferecidos, para uma melhor experiência e precisão no serviço desejado.</p>
            </div>

            <div className="content-info-1">
                <img src={imagem3} alt=""/>
                <h3>ChatBot</h3>
                <p>Suporte com maior refinamento, tendo mais precisão com menor burocracia. Sanando duvidas
                    pontuais, com maior acertividade e sem necessidade de uma pessoa/consultor.</p>
            </div>

        </div>
        
        <div className="content-info--cont max-container">
            <div className="content-info-1">
                <img src={imagem4} alt=""/>
                <h3>Experiência do cliente</h3>
                <p>Queremos computar toda a experiência do visitante durante o acesso ao site, para sabermos quais os produtos ele pesquisou, quanto tempo ficou pesquisando.</p>
            </div>
            
            <div className="content-info-1">
                <img src={imagem5} alt=""/>
                <h3>Rankeamento</h3>
                <p>De acordo com as análises feitas utilizando IA, vamos inserir pontos ao visitante e assim saber se ele é um possível cliente ou não.</p>
            </div>

            <div className="content-info-1">
                <img src={imagem6} alt=""/>
                <h3>Dados acessiveis</h3>
                <p>Consulta no banco de dados sem precisa entender de código, com os leads mais simples e consultas mais rápidas.</p>
            </div>

        </div>

    </div>

    );
}
