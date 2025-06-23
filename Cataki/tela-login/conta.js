 const adminAccount = {
            name: "Admin",
            email: "admin@exemplo.com",
            password: "admin123"
        };

        document.getElementById('registerForm').addEventListener('submit', function(e){
            e.preventDefault();
            const name = this.name.value.trim();
            const email = this.email.value.trim().toLowerCase();
            const password = this.password.value.trim();

            const users = JSON.parse(localStorage.getItem("usuarios") || "[]");

            if(users.some(u => u.email === email)) {
                showMessage("Este email já está cadastrado.", "red");
                return;
            }

            users.push({ name, email, password });
            localStorage.setItem("usuarios", JSON.stringify(users));

            showMessage("Cadastro realizado com sucesso!", "green");
            this.reset();
        });

        function showMessage(text, color = "green") {
            const el = document.getElementById("message");
            el.textContent = text;
            el.style.color = color;
            setTimeout(() => el.textContent = "", 4000);
        }