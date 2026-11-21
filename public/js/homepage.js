var nomeUsuario = sessionStorage.NOME_USUARIO || "Visitante";
var linkDashboard = "dashboard.html";

document.getElementById("greeting").textContent = "Olá, " + nomeUsuario;
document.getElementById("linkDashboard").href = linkDashboard;
