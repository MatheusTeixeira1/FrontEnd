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

    document.querySelectorAll('.logoutButton').forEach(button => {
        button.addEventListener('click', () => {
            alert("Saindo");
            sessionStorage.removeItem('token');
            window.location.href = '../login/login.html';
        });
    });




    document.getElementById('brandLogoContainer').addEventListener('click', () => {
        window.location.href = "produtos.html";
    });

}

document.addEventListener('DOMContentLoaded', () => {
    if (!sessionStorage.getItem('token')) {
        // window.location.href = 'login.html';
        setupNavigation();
    } else {
    }
});