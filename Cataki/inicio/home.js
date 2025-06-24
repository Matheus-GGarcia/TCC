document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-box').value;
    if (query) {
        // Substitua 'sua_URL_de_pesquisa' pela URL de busca da sua aplicação
        window.location.href = 'sua_URL_de_pesquisa?q=' + encodeURIComponent(query);
    }
});

document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("userLoggedIn") === "true") {
    const loginIcon = document.getElementById("login-success");
    if (loginIcon) {
      loginIcon.classList.remove("hidden");
    }
  }
});

