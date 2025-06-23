  if(sessionStorage.getItem("isAdmin") !== "true") {
            alert("Acesso negado. Por favor, faça login como administrador.");
            window.location.href = "login.html";
        }

        const tbody = document.querySelector("#userTable tbody");

        function loadUsers() {
            const users = JSON.parse(localStorage.getItem("usuarios") || "[]");
            tbody.innerHTML = "";
            users.forEach((user, i) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td><button data-index="${i}">Remover</button></td>
                `;
                tbody.appendChild(tr);
            });
        }

        function removeUser (index) {
            const users = JSON.parse(localStorage.getItem("usuarios") || "[]");
            users.splice(index, 1);
            localStorage.setItem("usuarios", JSON.stringify(users));
            loadUsers();
        }

        tbody.addEventListener("click", e => {
            if(e.target.tagName === "BUTTON") {
                const index = e.target.getAttribute("data-index");
                removeUser (index);
            }
        });

        document.getElementById("logoutBtn").addEventListener("click", () => {
            sessionStorage.removeItem("isAdmin");
            window.location.href = "login.html";
        });