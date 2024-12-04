const apiUrl = 'http://localhost:8080/blueray';

async function listarAnimes() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Erro: ${response.status}`);
        const animes = await response.json();

        



        const container = document.getElementById("card-container");

        animes.forEach(anime => {
            const card = document.createElement("div");
            card.className = "card";

            console.log("http://localhost:8080"+anime.imagem)
            card.innerHTML = `
            
                <img src="${anime.imagem}" alt="${anime.nome}">
                <h2>${anime.nome}</h2>
                <p>${anime.descricao}</p>
                <div class="price">${anime.preco}</div>
            `;

            card.addEventListener('click', () => { window.location.href = `editar.html?
                &idAnime=${encodeURIComponent(anime.id)}`; });

            container.insertBefore(card, container.firstChild);
        });
    } catch (error) {
        console.error('Erro ao listar pessoas:', error);
    }
}

function decodeToken(token) {
        const payloadBase64 = token.split('.')[1]; // Obtém a segunda parte do token (payload)
        const payloadDecoded = atob(payloadBase64); // Decodifica de Base64 para string
        return JSON.parse(payloadDecoded); // Converte a string JSON para objeto
    };
if (!sessionStorage.getItem('token')) {
    window.location.href = 'login.html';
    
}else{
    const token = sessionStorage.getItem('token');
    const payload = decodeToken(token);

    if (payload.role === 'ADMIN') { 
        document.getElementById('adminButton').style.display = 'flex'; 
    }
    window.onload = listarAnimes;
}

document.getElementById('logoutButton').addEventListener('click', () => {
        sessionStorage.removeItem('token'); // Remove o token
        window.location.href = 'login.html'; // Volta para login
    });
document.getElementById('perfilButton').addEventListener('click', () => {
    window.location.href = 'perfil.html';
});

const adminButton = document.getElementById('adminButton');

// Adiciona o evento de clique
adminButton.addEventListener('click', () => {
    // Substitua a URL abaixo pela página para onde você quer redirecionar
    window.location.href = 'cadastrarAnime.html';
});

const voltaButton = document.getElementById('btn-voltar');

    // Adiciona o evento de clique
    voltaButton.addEventListener('click', () => {
        // Substitua a URL abaixo pela página para onde você quer redirecionar
        window.location.href = 'produtos.html';
    });