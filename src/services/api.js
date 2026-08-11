const API_ANUNCIOS = "https://vinicios.onrender.com/anuncios";
const API_USUARIOS = "https://vinicios.onrender.com/usuarios";

const getHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        "Content-Type": "application/json",
        ...(token && { "Authorization": `Bearer ${token}` })
    };
};

export const registrarUsuario = async (dadosUsuario) => {
    const response = await fetch(`${API_USUARIOS}/registrar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosUsuario),
    });
    if (!response.ok) throw new Error("Erro ao registrar");
    return response.json();
};

export const loginUsuario = async (credenciais) => {
    const response = await fetch(`${API_USUARIOS}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credenciais),
    });
    if (!response.ok) throw new Error("Credenciais inválidas");
    return response.json();
};


export const fetchAnuncios = async (categoria = "") => {
    const url = categoria ? `${API_ANUNCIOS}?categoria=${categoria}` : API_ANUNCIOS;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro ao buscar anúncios");
    return response.json();
};

export const criarAnuncio = async (dadosAnuncio) => {
    const response = await fetch(API_ANUNCIOS, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(dadosAnuncio),
    });
    if (!response.ok) throw new Error("Erro ao criar anúncio");
    return response.json();
};

export const atualizarAnuncio = async (id, dadosAnuncio) => {
    const response = await fetch(`${API_ANUNCIOS}/${id}`, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(dadosAnuncio),
    });
    if (!response.ok) throw new Error("Erro ao atualizar anúncio");
    return response.json();
};

export const deletarAnuncio = async (id) => {
    const response = await fetch(`${API_ANUNCIOS}/${id}`, {
        method: "DELETE",
        headers: getHeaders(),
    });
    if (!response.ok) throw new Error("Erro ao excluir anúncio");
    return response.json();
};

export const listarAnunciosUsuario = async (usuarioId) => {
    const response = await fetch(
        `${API_ANUNCIOS}?usuario=${usuarioId}`
    );

    if (!response.ok) {
        throw new Error("Erro ao buscar anúncios do usuário");
    }

    return response.json();
};