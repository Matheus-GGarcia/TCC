document.addEventListener("DOMContentLoaded", () => {
  const nomeInput = document.getElementById("nome");
  const sobrenomeInput = document.getElementById("sobrenome");
  const emailInput = document.getElementById("email");

  const senhaAtualInput = document.getElementById("senhaAtual");
  const novaSenhaInput = document.getElementById("novaSenha");
  const confirmarSenhaInput = document.getElementById("confirmarSenha");

  // Pega usuários do localStorage
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  const usuarioLogado = sessionStorage.getItem("userEmail");

  const user = usuarios.find(u => u.email === usuarioLogado);

  if (!user) {
    alert("Usuário não encontrado. Faça login novamente.");
    window.location.href = "index.html";
    return;
  }

  // Preenche os campos
  nomeInput.value = user.name;
  sobrenomeInput.value = user.surname;
  emailInput.value = user.email;
  document.getElementById("user-name").textContent = user.name;

  // Lógica de envio
  const form = document.getElementById("formPerfil");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validação de senha
    const senhaAtual = senhaAtualInput.value;
    const novaSenha = novaSenhaInput.value;
    const confirmarSenha = confirmarSenhaInput.value;

    if (novaSenha || confirmarSenha) {
      if (senhaAtual !== user.password) {
        alert("Senha atual incorreta.");
        return;
      }

      if (novaSenha !== confirmarSenha) {
        alert("Nova senha e confirmação não conferem.");
        return;
      }

      user.password = novaSenha;
    }

    // Atualiza os dados
    user.name = nomeInput.value.trim();
    user.surname = sobrenomeInput.value.trim();
    user.email = emailInput.value.trim();

    // Salva no localStorage
    const index = usuarios.findIndex(u => u.email === usuarioLogado);
    usuarios[index] = user;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    sessionStorage.setItem("userEmail", user.email);

    alert("Perfil atualizado com sucesso!");
    form.reset();
  });
});

 document.addEventListener("DOMContentLoaded", function () {
  const userEmail = sessionStorage.getItem("userEmail");
  const mensagemUsuario = document.getElementById("mensagemUsuario");

  if (!userEmail) {
    window.location.href = "home.html";
    return;
  }

  const users = JSON.parse(localStorage.getItem("usuarios") || "[]");
  const usuario = users.find(u => u.email === userEmail);

  if (!usuario) {
    window.location.href = "home.html";
    return;
  }

  // Atualiza campos do formulário
  document.getElementById("nome").value = usuario.name || "";
  document.getElementById("sobrenome").value = usuario.sobrenome || "";
  document.getElementById("email").value = usuario.email || "";

  // Saudação personalizada
  mensagemUsuario.innerHTML = `Bem-vindo / ${usuario.name || 'usuário'} `;

  // Logout
  document.getElementById("logoutBtn").addEventListener("click", () => {
    // Remove o ícone de sucesso de login (se existir)
    const loginIcon = document.getElementById("login-success-icon");
    if (loginIcon) {
      loginIcon.remove();
    }

    // Limpa sessão
    sessionStorage.clear();

    // Redireciona para home
    window.location.href = "home.html";
  });
});