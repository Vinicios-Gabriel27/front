import React, { useState, useEffect } from 'react';
import { criarAnuncio, atualizarAnuncio } from '../services/api';

const AdForm = ({ setAbaAtual, anuncioEditando }) => {
  const [form, setForm] = useState({ 
    titulo: '', 
    descricao: '', 
    categoria: '', 
    preco: 0, 
    doacao: false, 
    imagem: '' 
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (anuncioEditando) {
      setForm(anuncioEditando);
    }
  }, [anuncioEditando]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (anuncioEditando) {
        await atualizarAnuncio(anuncioEditando._id, form);
        alert('Anúncio atualizado com sucesso!');
      } else {
        await criarAnuncio(form);
        alert('Anúncio criado com sucesso!');
      }
      setAbaAtual('home');
    } catch (error) {
      alert('Erro ao salvar anúncio. Verifique se o Backend está rodando.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      <div className="form-header">
        <h2 className="form-title">
          {anuncioEditando ? "Editar Anúncio" : "Novo Desapego"}
        </h2>
        <button type="button" className="btn-voltar" onClick={() => setAbaAtual('home')}>
          ← Voltar
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Tipo de Anúncio</label>
          <div className="type-selector">
            <button
              type="button"
              className={`type-btn ${!form.doacao ? 'active-venda' : ''}`}
              onClick={() => setForm({ ...form, doacao: false })}
            >
              Venda
            </button>
            <button
              type="button"
              className={`type-btn ${form.doacao ? 'active-doacao' : ''}`}
              onClick={() => setForm({ ...form, doacao: true, preco: 0 })}
            >
              Doação (Grátis)
            </button>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="titulo">Título do Anúncio *</label>
          <input
            id="titulo"
            className="form-input"
            placeholder="Ex: Livro de Cálculo I - James Stewart"
            value={form.titulo}
            required
            onChange={e => setForm({ ...form, titulo: e.target.value })}
          />
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: 1, minWidth: '200px' }}>
            <label className="form-label" htmlFor="categoria">Categoria *</label>
            <select
              id="categoria"
              className="form-select"
              value={form.categoria}
              required
              onChange={e => setForm({ ...form, categoria: e.target.value })}
            >
              <option value="">Selecione uma Categoria</option>
              <option value="Livros">Livros</option>
              <option value="Eletrônicos">Eletrônicos</option>
              <option value="Vestuário">Vestuário (Jalecos, etc)</option>
            </select>
          </div>

          {!form.doacao && (
            <div className="form-group" style={{ flex: 1, minWidth: '150px' }}>
              <label className="form-label" htmlFor="preco">Preço (R$) *</label>
              <input
                id="preco"
                type="number"
                step="0.01"
                min="0"
                className="form-input"
                placeholder="0.00"
                value={form.preco}
                required
                onChange={e => setForm({ ...form, preco: Number(e.target.value) })}
              />
            </div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="descricao">Descrição detalhada *</label>
          <textarea
            id="descricao"
            className="form-textarea"
            placeholder="Descreva o estado de conservação, semestre de uso, detalhes relevantes..."
            value={form.descricao}
            required
            onChange={e => setForm({ ...form, descricao: e.target.value })}
            rows="4"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="imagem">URL da Imagem *</label>
          <input
            id="imagem"
            className="form-input"
            placeholder="https://exemplo.com/imagem-do-produto.jpg"
            value={form.imagem}
            required
            onChange={e => setForm({ ...form, imagem: e.target.value })}
          />
          
          <div className="image-preview-box">
            {form.imagem ? (
              <img 
                src={form.imagem} 
                alt="Pré-visualização"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }} 
              />
            ) : null}
            <span 
              className="image-preview-placeholder" 
              style={{ display: form.imagem ? 'none' : 'block' }}
            >
              Insira o link da imagem acima para ver a pré-visualização
            </span>
          </div>
        </div>

        <div className="form-actions">
          <button 
            type="button" 
            className="btn-cancelar" 
            onClick={() => setAbaAtual('home')}
          >
            Cancelar
          </button>
          
          <button 
            type="submit" 
            className="btn-salvar"
            disabled={loading}
          >
            {loading ? "Salvando..." : (anuncioEditando ? "Salvar Alterações" : "Publicar Anúncio")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdForm;