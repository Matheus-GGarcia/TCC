document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("userLoggedIn") === "true") {
    const loginIcon = document.getElementById("login-success");
    if (loginIcon) {
      loginIcon.classList.remove("hidden");
    }
  }
});