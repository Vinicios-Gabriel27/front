import React from 'react';

const Hero = () => (
  <section className="hero-section">
    <div className="container">
      <h1 className="hero-title">Economia Circular no Campus</h1>
      <p className="hero-subtitle">
        Livros, calculadoras, batas de laboratório... O que já não utiliza pode ser o material perfeito para um caloiro. Ajude a reduzir o desperdício!
      </p>
      
      <div className="hero-stats">
        <div className="stat-card">
          <div className="stat-number">+500</div>
          <div className="stat-label">Itens Doados</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">+1200</div>
          <div className="stat-label">Alunos Conectados</div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;