import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Bem-vindo à nosso site</h1>
          <p>Seja bem-vindo e matricula-se já.</p>
          <Link to="/listagem" className="btn-primary">Alunos Listados</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Atividade diagnóstica</h2>
          <p>Uma atividade desse tipo tem o intuito de testar os participantes, no caso, os estudantes, tornando possível que o docente saiba quais são suas limitações referentes ao conhecimento da matéria.</p>
        </div>
        <div className="feature">
          <h2>Importância</h2>
          <p>Com a realização de exercícios deste tipo, o professor consegue ter mais liberdade em seus ensinamentos, pois tem total ciência de que seus alunos tem ou não domínio necessário para o respectivo conteúdo.</p>
        </div>
        <div className="feature">
          <h2>SESI SENAI, Florianópolis, Santa Catarina.</h2>
          <p>20:04, 02/08/2024</p>
        </div>
      </section>

      <section className="cta">
        <h2>Análise e Desenvolvimento de Sistemas</h2>
        <p>Euller Ramos dos Santos.</p>
      </section>
    </div>
  );
};

export default Home;
