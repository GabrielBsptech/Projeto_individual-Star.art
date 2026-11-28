var nomeUsuario = sessionStorage.NOME_USUARIO || "Usuário";
var linkDashboard = "dashboard.html";

document.getElementById("greeting").textContent = `Olá, ${nomeUsuario}! Você está no Explorar`;
document.getElementById("linkDashboard").href = linkDashboard;
