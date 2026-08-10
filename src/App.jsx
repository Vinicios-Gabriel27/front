import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AdForm from './components/AdForm';
import AuthForm from './components/AuthForm';
import Perfil from './components/Perfil'; // <-- NOVO
import './App.css';

function App() {
  const [abaAtual, setAbaAtual] = useState('home');
  const [anuncioEditando, setAnuncioEditando] = useState(null);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem('usuario');
    if (usuarioSalvo) {
      setUsuarioLogado(JSON.parse(usuarioSalvo));
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('Service Worker registrado!'))
        .catch(err => console.error('Erro no SW:', err));
    }
  }, []);

  const handleEditar = (anuncio) => {
    setAnuncioEditando(anuncio);
    setAbaAtual('form');
  };

  const handleNovoAnuncio = (aba) => {
    if (aba === 'form') setAnuncioEditando(null);
    setAbaAtual(aba);
  };

  return (
    <div>
      <Header 
        setAbaAtual={handleNovoAnuncio} 
        usuarioLogado={usuarioLogado} 
        setUsuarioLogado={setUsuarioLogado} 
      />
      
      {abaAtual === 'home' && (
        <>
          <Hero />
          <ProductGrid /> 
        </>
      )}

      {abaAtual === 'perfil' && usuarioLogado && (
        <Perfil usuarioLogado={usuarioLogado} onEdit={handleEditar} />
      )}

      {abaAtual === 'form' && (
        <AdForm setAbaAtual={setAbaAtual} anuncioEditando={anuncioEditando} />
      )}

      {abaAtual === 'auth' && (
        <AuthForm setAbaAtual={setAbaAtual} setUsuarioLogado={setUsuarioLogado} />
      )}
    </div>
  );
}

export default App;