/**
 * Elementos principais do DOM usados para gerenciar o popup e navegação.
 */
const containerOpenPopUpMenu = document.getElementById("containerOppenPopUpMenu");
const svgArrow = containerOpenPopUpMenu.querySelector("svg");
const svgPath = svgArrow.querySelector("path");
const backgroundPopUpMenu = document.getElementById("backgorundPopUpMenu");
const popupMenu = document.getElementById("popupMenu");
const body = document.getElementById("body");

/**
 * Inicializa os eventos principais relacionados ao popup.
 */
function setupPopUpMenu() {
    // Adiciona evento para abrir/fechar popup ao clicar no botão principal.
    containerOpenPopUpMenu.addEventListener("click", togglePopUp);

    // Adiciona evento para fechar popup ao clicar no fundo.
    backgroundPopUpMenu.addEventListener("click", togglePopUp);
}

/**
 * Gerencia a exibição do popup e os estilos relacionados.
 */
function togglePopUp() {
    const isOpen = popupMenu.style.opacity === "1";

    // Atualiza transformações e cores do ícone.
    svgArrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(90deg)";
    svgPath.setAttribute("fill", isOpen ? "#ccc" : "orange");

    // Controla visibilidade e estilos do menu popup.
    popupMenu.style.opacity = isOpen ? "0" : "1";
    popupMenu.style.height = isOpen ? "0" : "fit-content";
    popupMenu.style.padding = isOpen ? "0" : "32px 0";

    // Gerencia o scroll do corpo da página.
    body.style.overflowY = isOpen ? "scroll" : "hidden";

    // Controla visibilidade e camada do fundo do popup.
    backgroundPopUpMenu.style.opacity = isOpen ? "0" : "1";
    backgroundPopUpMenu.style.zIndex = isOpen ? "-999" : "999";
}

/**
 * Configura os eventos de navegação do site.
 */
function setupNavigation() {
    /**
     * Configura os eventos de navegação do site.
     */
    document.querySelectorAll('.profileButton').forEach(button => {
        button.addEventListener('click', () => {
            alert("Perfil");
            window.location.href = "profile.html";
        });
    });

    document.querySelectorAll('.favoritesButton').forEach(button => {
        button.addEventListener('click', () => {
            alert("Favoritos");
            window.location.href = "favorites.html";
        });
    });

    document.querySelectorAll('.backToTop').forEach(button => {
        button.addEventListener('click', () => {
            alert("Voltando para o topo");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    document.querySelectorAll('.adminButton').forEach(button => {
        button.addEventListener('click', () => {
            alert("Botão do Adm");
            window.location.href = '../adm/registerAnime.html';
        });
    });

    /**
     * Configura os botões de logout para remover o token e redirecionar.
     */
    document.querySelectorAll('.logoutButton').forEach(button => {
        button.addEventListener('click', () => {
            alert("Saindo");
            sessionStorage.removeItem('token');
            window.location.href = '../login/login.html';
        });
    });

    /**
     * Redireciona para a página principal ao clicar no logotipo.
     */
    document.getElementById('brandLogoContainer')?.addEventListener('click', () => {
        window.location.href = "#";
    });
}

/**
 * Configura eventos e validações iniciais ao carregar o DOM.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Redireciona para login se o token não estiver presente.
    if (!sessionStorage.getItem('token')) {
        //window.location.href = '../login/login.html';
        setupNavigation();
    } else {
    }
    setupPopUpMenu();
});
