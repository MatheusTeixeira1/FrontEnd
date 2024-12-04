const apiUrl = 'http://localhost:8080/blueray';

/**
 * Função para criar e adicionar cards ao DOM.
 * @param {Array} animes - Lista de animes a serem exibidos.
 */
function renderAnimes(animes) {
    const cards = document.getElementById('cards');
    cards.innerHTML = ''; // Limpa os resultados anteriores

    animes.forEach(anime => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="cardFrontPart">
                <img src="${anime.imagem}" alt="${anime.nome}">
                <h3>${anime.nome}</h3>
                <span>R$: ${anime.preco}</span>
            </div>
            <div class="cardBackPart">
                <p>${anime.descricao}</p>
                <button>VER MAIS</button>
            </div>
        `;
        card.addEventListener('click', () => {
            window.location.href = `editar.html?idAnime=${encodeURIComponent(anime.id)}`;
        });
        cards.appendChild(card);
    });
}

/**
 * Função para realizar o fetch de dados e tratar a resposta.
 * @param {string} url - URL da API a ser chamada.
 * @returns {Array} - Dados recebidos da API.
 */
async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro: ${response.status}`);
    return response.json();
}

/**
 * Função para listar todos os animes.
 */
async function listarAnimes() {
    try {
        const animes = await fetchData(apiUrl);
        renderAnimes(animes);
    } catch (error) {
        console.error('Erro ao listar animes:', error);
    }
}

/**
 * Função para decodificar um token JWT.
 * @param {string} token - Token JWT.
 * @returns {Object} - Payload decodificado.
 */
function decodeToken(token) {
    const payloadBase64 = token.split('.')[1];
    const payloadDecoded = atob(payloadBase64);
    return JSON.parse(payloadDecoded);
}

/**
 * Função para configurar a interface do administrador.
 */
function setupAdminInterface() {
    const token = sessionStorage.getItem('token');
    const payload = decodeToken(token);

    if (payload.role === 'ADMIN') {
        document.getElementById('adminButton').style.display = 'flex';
    }
}

/**
 * Função para configurar os botões de navegação.
 */
function setupNavigation() {
    document.getElementById('profileButton').addEventListener('click', () => {
        window.location.href = "profile.html";
    });

    document.getElementById('favoriteButton').addEventListener('click', () => {
        window.location.href = "";
    });

    document.getElementById('adminButton').addEventListener('click', () => {
        window.location.href = "";
    });
    document.getElementById('logoutButton2').addEventListener('click', () => {
        sessionStorage.removeItem('token');
        window.location.href = 'login.html';    
    })
    document.getElementById('logoutButton').addEventListener('click', () => {
        sessionStorage.removeItem('token');
        window.location.href = 'login.html';
    });

    document.getElementById('brandLogoContainer').addEventListener('click', () => {
        window.location.href = "produtos.html";
    });

}

/**
 * Função para buscar animes por nome.
 */
document.getElementById('formSearchBlueray').addEventListener('submit', async (e) => {
    e.preventDefault();
    const animeName = document.getElementById('inputSearchBlueray').value;

    try {
        const animes = await fetchData(`${apiUrl}/name/${encodeURIComponent(animeName)}`);
        const heading = document.querySelector('#containerCards h2');
        if (heading) heading.textContent = 'Resultados da pesquisa:';

        const paragraph = document.querySelector('#containerCards p');
        if (paragraph) paragraph.remove();

        renderAnimes(animes);
    } catch (error) {
        console.error('Erro:', error);
        alert(error.message.includes('404') ? 'Nenhum resultado encontrado.' : 'Erro ao realizar a busca.');
    }
});

/**
 * Inicialização da página.
 */
document.addEventListener('DOMContentLoaded', () => {
    if (!sessionStorage.getItem('token')) {
        window.location.href = 'login.html';
    } else {
        setupAdminInterface();
        setupNavigation();
        listarAnimes();
    }
});
