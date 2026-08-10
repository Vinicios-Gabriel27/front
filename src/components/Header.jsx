import React from 'react';

const Header = ({ setAbaAtual, usuarioLogado, setUsuarioLogado }) => {
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    setUsuarioLogado(null);
    setAbaAtual('home');
  };

  return (
    <header className="header-nav">
      <div className="container header-content">
        <div className="logo-title" onClick={() => setAbaAtual('home')}>
          Vortex
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {usuarioLogado ? (
            <>
              <button 
                className="btn-voltar" 
                onClick={() => setAbaAtual('perfil')}
                style={{ fontWeight: 'bold' }}
              >
                Meu Perfil ({usuarioLogado.nome.split(' ')[0]})
              </button>
              <button className="btn-anunciar" onClick={() => setAbaAtual('form')}>
                + Desapegar
              </button>
              <button className="btn-voltar" onClick={handleLogout} style={{ border: 'none', padding: '8px' }}>
                Sair
              </button>
            </>
          ) : (
            <button className="btn-anunciar" onClick={() => setAbaAtual('auth')}>
              Entrar / Cadastrar
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;