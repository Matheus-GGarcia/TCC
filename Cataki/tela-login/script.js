const adminAccount = {
    email: "admin@exemplo.com",
    password: "admin123"
};

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.loginEmail.value.trim().toLowerCase();
    const password = this.loginPassword.value.trim();
    const users = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const user = users.find(u => u.email === email && u.password === password);
    const messageBox = document.getElementById("message");
    if (!user) {
        messageBox.textContent = "Email ou senha inválidos.";
        return;
    }
    // Checa se é admin comparando com credenciais fixas
    if (email === adminAccount.email && password === adminAccount.password) {
        sessionStorage.setItem("isAdmin", "true");
        window.location.href = "admin.html";
    } else {
        sessionStorage.removeItem("isAdmin");
        sessionStorage.setItem("userEmail", user.email); // <-- ADICIONE AQUI
        messageBox.textContent = `Bem-vindo, ${user.name}!`;

        // Redireciona para a home do usuário
        window.location.href = "home.html";
    }
});


/*Destribuição de paginas*/

const loginLink = document.getElementById("login-link");
const createAccountLink = document.getElementById("create-account-link");
// Função para mostrar o formulário de login e ocultar o de registro
function showLoginForm() {
    registroForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
}
// Função para mostrar o formulário de registro e ocultar o de login
function showRegistroForm() {
    loginForm.classList.add("hidden");
    registroForm.classList.remove("hidden");
}
// Adiciona evento de clique ao link "Faça login aqui"
loginLink.addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    showLoginForm();
});
// Adiciona evento de clique ao link "Crie uma conta aqui"
createAccountLink.addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    showRegistroForm();
});

