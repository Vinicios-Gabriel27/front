import React, { useState } from 'react';
import { loginUsuario, registrarUsuario } from '../services/api';

const AuthForm = ({ setAbaAtual, setUsuarioLogado }) => {
  const [isLogin, setIsLogin] = useState(true);
  
  // 1. Adicionamos o 'confirmarSenha' no estado inicial do formulário
  const [form, setForm] = useState({ 
    nome: '', 
    email: '', 
    senha: '', 
    confirmarSenha: '' 
  });
  
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 2. NOVA TRAVA DE SEGURANÇA: Verifica se as senhas batem no cadastro
    if (!isLogin && form.senha !== form.confirmarSenha) {
      alert("As senhas não coincidem! Por favor, digite a mesma senha nos dois campos.");
      return; // Para a execução do código aqui mesmo
    }

    setLoading(true);
    try {
      let resposta;
      if (isLogin) {
        // No login, manda só email e senha
        resposta = await loginUsuario({ email: form.email, senha: form.senha });
      } else {
        // No cadastro, manda nome, email e senha (o backend não precisa do confirmarSenha)
        resposta = await registrarUsuario({ nome: form.nome, email: form.email, senha: form.senha });
      }
      
      localStorage.setItem('token', resposta.token);
      localStorage.setItem('usuario', JSON.stringify(resposta.usuario));
      
      setUsuarioLogado(resposta.usuario);
      alert(resposta.mensagem);
      setAbaAtual('home');
    } catch (error) {
      alert("Erro! Verifique seus dados e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card" style={{ maxWidth: '400px', margin: '60px auto' }}>
      <h2 className="form-title" style={{ textAlign: 'center', marginBottom: '20px' }}>
        {isLogin ? "👋 Bem-vindo de volta!" : "🚀 Crie sua conta"}
      </h2>
      
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label className="form-label">Nome Completo</label>
            <input 
              className="form-input" required 
              value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} 
            />
          </div>
        )}

        <div className="form-group">
          <label className="form-label">E-mail Universitário</label>
          <input 
            type="email" className="form-input" required 
            value={form.email} onChange={e => setForm({...form, email: e.target.value})} 
          />
        </div>

        <div className="form-group">
          <label className="form-label">Senha</label>
          <input 
            type="password" className="form-input" required 
            value={form.senha} onChange={e => setForm({...form, senha: e.target.value})} 
          />
        </div>

        {/* 3. NOVO CAMPO: Só aparece quando o usuário está na tela de cadastro */}
        {!isLogin && (
          <div className="form-group">
            <label className="form-label">Confirmar Senha</label>
            <input 
              type="password" className="form-input" required 
              value={form.confirmarSenha} onChange={e => setForm({...form, confirmarSenha: e.target.value})} 
            />
          </div>
        )}

        <button type="submit" className="btn-salvar" style={{ width: '100%', marginTop: '10px' }} disabled={loading}>
          {loading ? "Aguarde..." : (isLogin ? "Entrar" : "Cadastrar")}
        </button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem' }}>
        {isLogin ? "Ainda não tem conta? " : "Já tem uma conta? "}
        <span 
          style={{ color: 'var(--unifor-blue)', fontWeight: 'bold', cursor: 'pointer' }}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Cadastre-se aqui" : "Faça login"}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;