import React, { useEffect, useState } from 'react';
import { fetchAnuncios } from '../services/api';

const ProductGrid = () => {
  const [anuncios, setAnuncios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriaAtiva, setCategoriaAtiva] = useState('');

  const carregarAnuncios = () => {
    setLoading(true);
    fetchAnuncios(categoriaAtiva)
      .then(dados => {
        setAnuncios(dados);
        setLoading(false);
      })
      .catch(erro => {
        console.error(erro);
        setLoading(false);
      });
  };

  useEffect(() => {
    carregarAnuncios();
  }, [categoriaAtiva]);

  const categorias = ["Livros", "Eletrônicos", "Vestuário"];

  return (
    <div className="container">
      <h2 className="section-title">Últimos Anúncios</h2>

      <div className="filtros-container">
        <button 
          className={`btn-filtro ${categoriaAtiva === '' ? 'ativo' : ''}`}
          onClick={() => setCategoriaAtiva('')}
        >
          Todos
        </button>
        {categorias.map(cat => (
          <button 
            key={cat}
            className={`btn-filtro ${categoriaAtiva === cat ? 'ativo' : ''}`}
            onClick={() => setCategoriaAtiva(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {loading ? (
        <div className="loading-state">Carregando anúncios da comunidade... 🔄</div>
      ) : anuncios.length === 0 ? (
        <div className="loading-state">Nenhum anúncio encontrado nesta categoria.</div>
      ) : (
        <div className="grid-produtos">
          {Array.isArray(anuncios) && anuncios.map(item => (
            <div key={item._id} className="card">
              <img 
                src={item.imagem} 
                alt={item.titulo} 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80';
                }}
              />
              
              <h3 className="card-title">{item.titulo}</h3>
              <p className="card-category">{item.categoria}</p>
              
              <div className="card-footer">
                {item.doacao ? (
                  <span className="badge-doacao">Doação</span>
                ) : (
                  <span className="card-price">R$ {item.preco.toFixed(2)}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;