import React from 'react';

function ProductDetails({ anuncio, onVoltar }) {
  return (
    <div className="container detalhes-container">

      <button
        className="btn-voltar"
        onClick={onVoltar}
      >
        ← Voltar aos anúncios
      </button>

      <div className="detalhes-card">

        <div className="detalhes-imagem-container">
          <img
            className="detalhes-imagem"
            src={anuncio.imagem}
            alt={anuncio.titulo}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80';
            }}
          />
        </div>

        <div className="detalhes-conteudo">

          <p className="detalhes-categoria">
            {anuncio.categoria}
          </p>

          <h1 className="detalhes-titulo">
            {anuncio.titulo}
          </h1>

          <div className="detalhes-preco">
            {anuncio.doacao ? (
              <span className="badge-doacao">
                Doação
              </span>
            ) : (
              <span>
                R$ {Number(anuncio.preco || 0).toFixed(2)}
              </span>
            )}
          </div>

          <div className="detalhes-separador"></div>

          <h2>Descrição</h2>

          <p className="detalhes-descricao">
            {anuncio.descricao || 'Este anúncio não possui descrição.'}
          </p>

        </div>

      </div>
    </div>
  );
}

export default ProductDetails;


//terminei