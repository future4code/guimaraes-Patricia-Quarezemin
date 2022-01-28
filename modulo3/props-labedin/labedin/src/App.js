import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPaty from './Imagens/Paty.jpeg';
import ImagemMbr from './Imagens/MBR.jpeg';
import ImagemLogo from './Imagens/PatyLogo.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemEmail from './Imagens/Email.png';
import ImagemEndereco from './Imagens/Local.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={ImagemPaty}
          nome="Patrícia"
          descricao="Olá, eu sou a Patrícia, mas podem me chamar de Paty. Sou estudante da Labenu e, meu desejo, ao final do curso de desenvolvedora Web, é migrar de carreira e me tornar uma excelente DEV!"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <CardPequeno
        imagem={ImagemEmail}
        descricao='Email: patriciargquarezemin@gmail.com'
      />

      <CardPequeno
        imagem={ImagemEndereco}
        descricao='Rua: Campo Grande, 14'
      />


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={ImagemMbr}
          nome="MBR Construtora - OUT/18 a JUL/21"
          descricao="Trabalhei na área administrativa de uma construtora em Campo Grande/MS, mais especificamente na parte de Recursos Humanos!"
        />

        <CardGrande
          imagem={ImagemLogo}
          nome="Patrícia Quarezemin"
          descricao="Atualmente atuo no mercado imobiliário como intermediadora (corretora de imóveis) com escritório próprio. Atuo na área de vendas e, realizo todas as etapas, desde a apresentação do imóvel ao cliente, até a entrega da matrícula do mesmo com a averbação feita em cartório."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
