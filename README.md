# 🚀 Vortex — Economia Circular no Campus

O **Vortex** é uma plataforma de marketplace universitário desenvolvida para promover a **economia circular dentro do ambiente acadêmico**.

A plataforma permite que estudantes anunciem materiais que não utilizam mais, possibilitando a compra, venda ou doação de itens como livros, calculadoras, jalecos, eletrônicos e outros materiais acadêmicos.

A proposta é facilitar a reutilização de materiais entre estudantes, reduzir desperdícios e criar uma comunidade de troca dentro do ambiente universitário.

## 🌐 Links do Projeto

**Frontend / PWA:** https://front-gold-eight.vercel.app

**Backend / API REST:** https://vinicios.onrender.com

**Repositório Frontend:** https://github.com/Vinicios-Gabriel27/front

**Repositório Backend:** https://github.com/Vinicios-Gabriel27/backend

## ✨ Funcionalidades

### 👤 Usuários

* Cadastro de usuários
* Login
* Autenticação utilizando JWT
* Persistência da sessão
* Área de perfil do usuário

### 📦 Anúncios

O sistema possui CRUD completo de anúncios:

* Criar anúncio
* Listar anúncios
* Visualizar detalhes
* Editar anúncio
* Excluir anúncio
* Visualizar os próprios anúncios

### 🏷️ Categorias

Os anúncios podem ser filtrados por categoria:

* 📚 Livros
* 💻 Eletrônicos
* 👕 Vestuário

Também existe suporte para anúncios marcados como **Doação**.

### 🔎 Visualização dos anúncios

A página principal apresenta os anúncios em formato de cards contendo imagem, título, categoria e preço ou indicação de doação.

A descrição não é exibida diretamente na página principal. Ao clicar em um anúncio, o usuário pode acessar os detalhes contendo imagem, título, categoria, preço ou doação e descrição completa.

### 📱 Progressive Web App

O Vortex possui recursos de Progressive Web App (PWA), incluindo Web App Manifest, Service Worker, ícones para instalação, interface responsiva e configuração para instalação no dispositivo.

## 🛠️ Tecnologias Utilizadas

### Frontend

* React
* Vite
* JavaScript
* CSS3
* Service Worker
* Progressive Web App (PWA)
* Vercel

### Backend

* Node.js
* Express.js
* JavaScript
* Mongoose
* JSON Web Token (JWT)
* Bcrypt.js
* Render

### Banco de Dados

* MongoDB
* MongoDB Atlas

## 🏗️ Arquitetura do Projeto

O projeto utiliza uma arquitetura separada entre frontend e backend.

Usuário → Frontend React/Vite → API Node.js/Express → MongoDB Atlas.

O frontend é hospedado na Vercel, o backend é hospedado no Render e o banco de dados é hospedado no MongoDB Atlas.

## 🔐 Autenticação

A autenticação da aplicação utiliza JSON Web Token (JWT).

O fluxo de autenticação funciona da seguinte maneira:

Cadastro → Backend → MongoDB → Login → JWT → Frontend → Token armazenado no navegador → Requisições autenticadas.

As operações protegidas utilizam o token para identificar o usuário.

## 📦 CRUD de Anúncios

O sistema implementa as principais operações de gerenciamento de anúncios.

CREATE: criação de um novo anúncio.

READ: listagem e visualização dos anúncios.

UPDATE: edição de anúncios.

DELETE: exclusão de anúncios.

O backend também realiza validações para impedir que um usuário altere ou exclua anúncios pertencentes a outro usuário.

## 📱 Progressive Web App

O frontend possui configuração de Progressive Web App através do arquivo manifest.json, do Service Worker e dos ícones da aplicação.

Os arquivos relacionados ao PWA estão organizados dentro da pasta public, incluindo manifest.json, sw.js, icon-192x192.png e icon-512x512.png.

O manifest define informações como nome da aplicação, nome curto, ícones, cor do tema, cor de fundo, URL inicial e modo de exibição.

O Service Worker é utilizado para adicionar suporte aos recursos de PWA.

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos

Antes de executar o projeto, é necessário ter instalado Node.js, npm e Git.

### 💻 Frontend

Clone o repositório:

git clone https://github.com/Vinicios-Gabriel27/front.git

Entre na pasta:

cd front

Instale as dependências:

npm install

Execute o projeto:

npm run dev

O frontend ficará disponível em:

http://localhost:5173

### ⚙️ Backend

Clone o repositório:

git clone https://github.com/Vinicios-Gabriel27/backend.git

Entre na pasta:

cd backend

Instale as dependências:

npm install

Execute o servidor:

npm start

A API publicada está disponível em:

https://vinicios.onrender.com

## 🗄️ Banco de Dados

O projeto utiliza MongoDB Atlas como banco de dados em nuvem.

O backend utiliza Mongoose para realizar a comunicação e modelagem dos dados.

As informações sensíveis de conexão devem ser armazenadas através de variáveis de ambiente.

Exemplo de variáveis utilizadas:

MONGODB_URI=sua_string_de_conexao

JWT_SECRET=sua_chave_secreta

## 🔗 API

A aplicação frontend utiliza a API REST hospedada no Render.

URL base:

https://vinicios.onrender.com

Principais rotas de usuários:

POST /usuarios/registrar

POST /usuarios/login

Principais rotas de anúncios:

GET /anuncios

POST /anuncios

PUT /anuncios/:id

DELETE /anuncios/:id

Também existe suporte para consulta de anúncios relacionados a um usuário.

## 📁 Estrutura do Frontend

front/

public/

favicon.svg

icons.svg

manifest.json

sw.js

icon-192x192.png

icon-512x512.png

src/

components/

Header.jsx

Hero.jsx

ProductGrid.jsx

ProductDetails.jsx

AdForm.jsx

AuthForm.jsx

Perfil.jsx

services/

api.js

App.jsx

App.css

index.css

index.html

package.json

README.md

## 🧪 Testes Realizados

Durante o desenvolvimento foram realizados testes manuais das principais funcionalidades da aplicação.

Cadastro: ✅

Login: ✅

Listagem de anúncios: ✅

Filtro por categoria: ✅

Criação de anúncio: ✅

Visualização de detalhes: ✅

Edição de anúncio: ✅

Exclusão de anúncio: ✅

Perfil do usuário: ✅

Comunicação Frontend → Backend: ✅

Comunicação Backend → MongoDB: ✅

Manifest PWA: ✅

Service Worker: ✅

Ícones PWA: ✅

Deploy do Frontend: ✅

Deploy do Backend: ✅

# 🤖 Diário de Bordo da IA — AI Log

Durante o desenvolvimento do Vortex foram utilizadas ferramentas de Inteligência Artificial Generativa como apoio ao processo de desenvolvimento.

A IA foi utilizada como uma ferramenta de Pair Programming, principalmente para auxiliar na identificação de erros, análise de código, integração entre frontend e backend, implementação de funcionalidades e resolução de problemas encontrados durante o desenvolvimento e deploy.

### Ferramenta utilizada

Google Gemini.

A IA também foi utilizada como apoio durante a análise e implementação de diferentes partes do projeto.

### Integração entre Frontend e Backend

Durante o desenvolvimento foi necessário integrar o frontend React com a API Node.js/Express hospedada no Render.

Um dos problemas encontrados foi um erro 404 Not Found durante uma tentativa de login.

Foi utilizado um prompt técnico semelhante a:

"Como configuro o alinhamento de rotas globais no fetch da API quando meu backend Node.js utiliza um roteador com prefixo app.use('/usuarios') e o frontend está retornando erro 404 de rota inexistente?"

A análise ajudou a verificar a relação entre as rotas definidas no backend e as URLs utilizadas pelo frontend.

Após a correção e os testes, o login passou a funcionar corretamente.

### Integração com MongoDB Atlas

Durante o deploy do backend houve problemas relacionados à conexão da aplicação hospedada com o MongoDB Atlas.

Foi utilizado um prompt semelhante a:

"Estou enfrentando um erro de timeout do Mongoose após fazer o deploy da minha API no Render. Como configurar o acesso de rede do MongoDB Atlas para permitir conexões da aplicação hospedada?"

A investigação ajudou a identificar a configuração de acesso de rede do MongoDB Atlas como parte importante do problema.

Após os ajustes necessários, a API conseguiu estabelecer conexão com o banco de dados.

### Deploy do Backend

Durante a publicação da API no Render foram analisados problemas relacionados ao ambiente de produção que não estavam presentes no ambiente local.

A IA foi utilizada para auxiliar na interpretação dos logs do servidor, identificação de diferenças entre o ambiente local e o ambiente de produção e configuração da aplicação.

O resultado foi a disponibilização da API em:

https://vinicios.onrender.com

### Service Worker e PWA

Durante a implementação do Progressive Web App foram encontrados problemas relacionados ao reconhecimento do Manifest e ao Service Worker.

A IA foi utilizada para entender como registrar o Service Worker, como conectar o manifest.json ao index.html, como configurar os ícones do PWA, como verificar o Manifest através do DevTools e como verificar o registro do Service Worker.

Durante os testes foram utilizadas as ferramentas Chrome DevTools, Application, Manifest e Service Workers.

Após os ajustes, o Manifest passou a ser reconhecido corretamente e os ícones do PWA foram configurados.

### Interface dos Anúncios

A IA também foi utilizada como apoio na melhoria da experiência de usuário.

Uma das alterações realizadas foi separar a visualização dos anúncios em duas etapas.

Na página principal, os cards passaram a apresentar apenas imagem, título, categoria e preço ou indicação de doação.

Ao clicar em um anúncio, o usuário pode acessar a página de detalhes contendo imagem, título, categoria, preço ou doação e descrição.

Essa alteração teve como objetivo deixar a página principal mais limpa e semelhante à experiência de um marketplace.

### Resolução de problemas com imagens

Durante os testes foram identificadas URLs de imagens inválidas ou de exemplo.

A IA foi utilizada para auxiliar na identificação dos erros apresentados pelo navegador, como 400 Bad Request, ERR_UNKNOWN_URL_SCHEME e Failed to fetch.

Foi identificado que esses erros estavam relacionados principalmente às URLs de imagens armazenadas nos anúncios de teste, e não ao funcionamento do CRUD ou do banco de dados.

## 🧠 Reflexão sobre o uso da IA

A Inteligência Artificial foi utilizada como uma ferramenta de apoio durante o desenvolvimento.

As respostas geradas pela IA não foram utilizadas de forma automática. As sugestões foram analisadas, adaptadas ao projeto e testadas no ambiente de desenvolvimento.

O processo utilizado foi:

Problema → Investigação → Consulta à IA → Análise da solução → Implementação → Teste → Correção → Validação.

A utilização da IA foi especialmente útil para interpretar mensagens de erro, sugerir soluções, explicar conceitos, auxiliar na integração entre tecnologias, melhorar a estrutura do código, identificar problemas de configuração e auxiliar na implementação do PWA.

A validação final das funcionalidades foi realizada através de testes manuais da aplicação.

## 🎯 Objetivo do Projeto

O Vortex busca aplicar conceitos de desenvolvimento web moderno para solucionar um problema real dentro do ambiente universitário.

A plataforma incentiva a reutilização de materiais, a redução de desperdício, a economia entre estudantes, o compartilhamento de recursos e a facilidade de negociação dentro da comunidade acadêmica.

## 📌 Resultado

Ao final do desenvolvimento, o Vortex possui frontend desenvolvido em React, API REST desenvolvida em Node.js e Express, banco de dados MongoDB Atlas, sistema de autenticação, CRUD completo de anúncios, filtro por categorias, perfil de usuário, visualização detalhada de anúncios, Progressive Web App, Service Worker, deploy do frontend, deploy do backend e integração completa entre as camadas da aplicação.

## 👨‍💻 Autor

**Vinícios Gabriel de Castro Barbosa**

Projeto desenvolvido como parte de um desafio técnico acadêmico da Universidade de Fortaleza (Unifor).

## 📄 Licença

Projeto desenvolvido para fins acadêmicos.
