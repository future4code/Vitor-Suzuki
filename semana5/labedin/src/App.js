import React from 'react';
import './App.css';
import ImagemButton from './components/ImagemButton/ImagemButton';
import EmailEndereco from './components/CardPequeno/CardPequeno';
import CardGrande from './components/CardGrande/CardGrande';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.6435-9/33498512_1487932681318845_8677401854386110464_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=84a396&_nc_eui2=AeHomkwwyQT7Ci9UKpJ5XR2VuBGITvTx6u64EYhO9PHq7uItd4yPmLC86gpanureksrUppFVx8jviKLyHG2vcuP1&_nc_ohc=CgmUZqcy--AAX_dDZih&_nc_ht=scontent.fcgh9-1.fna&oh=bae7161ebabc2f9ee03ada37c36f5cbd&oe=60B80598"
          nome="Vitor Suzuki"
          descricao="Oi, eu sou Vitor Suzuki. Desenvolvedor Full Stack Web, músico e editor de vídeo nas horas vagas. Já passei por faculdades como ESPM e Cásper Líbero fazendo Publicidade e Propaganda e FMU fazendo Educação Física."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <EmailEndereco
          email="E-mail:"
          descricao="vitor.szk@outlook.com"
          endereco="Endereço:"
          descricao2="Rua dos Bobos, Número 0"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
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
