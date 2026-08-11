import React, { useEffect, useState } from 'react';
import {
  listarAnunciosUsuario,
  deletarAnuncio
} from '../services/api';

const Perfil = ({ usuarioLogado, onEdit }) => {
  const [meusAnuncios, setMeusAnuncios] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarMeusAnuncios = async () => {
    if (!usuarioLogado?.id) {
      setMeusAnuncios([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const dados = await listarAnunciosUsuario(usuarioLogado.id);

      setMeusAnuncios(Array.isArray(dados) ? dados : []);
    } catch (erro) {
      console.error("Erro ao carregar meus anúncios:", erro);
      setMeusAnuncios([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarMeusAnuncios();
  }, [usuarioLogado]);

  const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir seu anúncio?")) {
      return;
    }

    try {
      await deletarAnuncio(id);

      await carregarMeusAnuncios();
    } catch (error) {
      console.error("Erro ao excluir anúncio:", error);
      alert("Erro ao excluir anúncio.");
    }
  };

  return (
    <div
      className="container"
      style={{
        marginTop: '40px',
        marginBottom: '80px'
      }}
    >
      <div
        className="form-card"
        style={{
          maxWidth: '100%',
          margin: '0 0 40px 0',
          padding: '24px'
        }}
      >
        <h2
          className="section-title"
          style={{ margin: '0 0 10px 0' }}
        >
          Meu Perfil
        </h2>

        <p>
          <strong>Nome:</strong> {usuarioLogado?.nome}
        </p>

        <p>
          <strong>E-mail:</strong> {usuarioLogado?.email}
        </p>
      </div>

      <h3 className="section-title">
        Meus Anúncios Cadastrados ({meusAnuncios.length})
      </h3>

      {loading ? (
        <div className="loading-state">
          Carregando seus anúncios... 🔄
        </div>
      ) : meusAnuncios.length === 0 ? (
        <div className="loading-state">
          Você ainda não publicou nenhum anúncio.
        </div>
      ) : (
        <div className="grid-produtos">
          {meusAnuncios.map((item) => (
            <div key={item._id} className="card">

              <img
                src={item.imagem}
                alt={item.titulo}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80';
                }}
              />

              <h3 className="card-title">
                {item.titulo}
              </h3>

              <p className="card-category">
                {item.categoria}
              </p>

              <div className="card-footer">
                {item.doacao ? (
                  <span className="badge-doacao">
                    Doação
                  </span>
                ) : (
                  <span className="card-price">
                    R$ {Number(item.preco || 0).toFixed(2)}
                  </span>
                )}
              </div>

              <div className="card-actions">
                <button
                  className="btn-editar"
                  onClick={() => onEdit(item)}
                >
                  Editar
                </button>

                <button
                  className="btn-excluir"
                  onClick={() => handleDelete(item._id)}
                >
                  Excluir
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Perfil;