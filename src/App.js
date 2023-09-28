import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventView from './pages/EventView';

function App() {
  return (
    <body>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="100" height="100" />

          <p>
            <code></code>
          </p>
          <a
            className="App-link"
            href="/pages/EventView.js"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"></link>

          <header class="jumbotron jumbotron-fluid text-center  text-white">
            <div class="container">
              <h1 class="display-4">Bem-vindo à Plataforma de Eventos</h1>
              <p class="lead">Encontre e participe dos melhores eventos da região.</p>
              <a href="#" class="btn btn-warning btn-lg">Ver Eventos</a>
            </div>
          </header>

          <nav class="navbar navbar-expand-lg navbar-dark ">
            <div class="container">
              <a class="navbar-brand" href="#"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>

          <div class="container my-5">
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-4">

                  <div class="card-body">
                    <h5 class="card-title text-black">Conferência de Tecnologia 2023</h5>
                    <p class="card-text custom-text-style">
                      Uma conferência de tecnologia de última geração que abordará as tendências mais recentes em inteligência artificial, aprendizado de máquina e inovações tecnológicas. Junte-se a nós para aprender com especialistas da indústria.
                    </p>

                    <a href="#" class="btn btn-primary">Detalhes</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4">

                  <div class="card-body">
                    <h5 class="card-title text-black">Feira de Emprego e Carreira</h5>
                    <p class="card-text custom-text-style">Encontre oportunidades de carreira emocionantes em nossa feira de empregos. Conecte-se com recrutadores de empresas líderes e explore uma variedade de opções profissionais.</p>
                    <a href="#" class="btn btn-primary">Detalhes</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4">

                  <div class="card-body">
                    <h5 class="card-title text-black">Exposição de Arte Contemporânea</h5>
                    <p class="card-text custom-text-style">Explore a criatividade contemporânea na arte visual. Nossa exposição apresenta obras de artistas locais e internacionais que desafiam as fronteiras da expressão artística.</p>
                    <a href="#" class="btn btn-primary">Detalhes</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4">

                  <div class="card-body">
                    <h5 class="card-title text-black">Workshop de Fotografia</h5>
                    <p class="card-text custom-text-style">Aprenda as técnicas essenciais de fotografia em nosso workshop interativo. Este é o lugar perfeito para iniciantes e entusiastas da fotografia aprimorarem suas habilidades..</p>
                    <a href="#" class="btn btn-primary">Detalhes</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4">

                  <div class="card-body">
                    <h5 class="card-title text-black">Corrida Beneficente 5K</h5>
                    <p class="card-text custom-text-style">Uma corrida de caridade para arrecadar fundos em prol de uma causa importante. Venha correr, caminhar ou apoiar como voluntário. Cada passo faz a diferença!</p>
                    <a href="#" class="btn btn-primary">Detalhes</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4">

                  <div class="card-body">
                    <h5 class="card-title text-black">Festival de Música ao Ar Livre</h5>
                    <p class="card-text custom-text-style">Desfrute de um dia de música ao vivo, boa comida e diversão ao ar livre no nosso festival de música. Bandas locais e nacionais vão se apresentar em diversos estilos musicais.</p>
                    <a href="#" class="btn btn-primary">Detalhes</a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <footer class="text-white text-center py-3">
            <div class="container">
              <p>&copy; 2023 Plataforma de Eventos</p>
            </div>
          </footer>


          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>




        </header>
      </div>
    </body>
  );
}

export default App;
