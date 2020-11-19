import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.ibb.co/2YrxZ2F/vulquimar.jpg" 
          nome="Vulquimar Silva" 
          descricao="Olá, eu sou o Vulquimar Silva. Sou um dos alunos aqui da Labenu. Adoro javascript e penso um dia em me tornar um dos melhores Front-End do mundo."
        />

        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://computerworld.com.br/wp-content/uploads/2019/08/algar-tech.jpg" 
          nome="Analista de Sistema | Desenvolvedor" 
          descricao="Front-End (HTML5 - CSS3 - Bootstrap - Javascript - Jquery - React)"
        />

        <CardGrande 
          imagem="https://images.maisbolsas.com.br/content/superior/instituicao/logo/g/universidade-cruzeiro-do-sul.png" 
          nome="Cruzeiro do Sul Virtual" 
          descricao="Cursando Sistemas para Internet" 
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
