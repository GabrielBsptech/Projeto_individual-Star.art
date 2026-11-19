    var nomeUsuario = "Gabriel";

    var linkFoto = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

    var linkDashboard = "dashboard.html";

    var paginaLogin = "login.html";

    document.getElementById("saudacao").textContent = "Olá, " + nomeUsuario;
    document.getElementById("fotoPerfil").src = linkFoto;
    document.getElementById("linkDashboard").href = linkDashboard;

    document.getElementById("botaoSair").addEventListener("click", function () {
      var certeza = confirm("Deseja realmente sair?");
      if (certeza) {
        window.location.href = paginaLogin;
      }
    });