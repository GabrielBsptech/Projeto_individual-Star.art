const formLogin = document.querySelector("form");
const botaoLogin = formLogin.querySelector("button[type='submit']");
const loading = document.getElementById("loading");

formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;

  if (!email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  if (loading) loading.hidden = false;
  botaoLogin.disabled = true;

  try {
    const resposta = await fetch("/usuarios/autenticar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        emailServer: email,
        senhaServer: senha
      })
    });

    if (resposta.status === 403) {
      alert("Email e/ou senha inválidos");
      return;
    }

    if (!resposta.ok) {
      throw new Error(await resposta.text());
    }

    const dados = resposta.status === 204 ? {} : await resposta.json();

    sessionStorage.ID_USUARIO = dados.id;
    sessionStorage.NOME_USUARIO = dados.nome;
    sessionStorage.EMAIL_USUARIO = dados.email;

    window.location.href = "dashboard.html";
  } catch (erro) {
    console.error("Erro ao entrar:", erro);
    alert("Erro ao entrar: " + erro.message);
  } finally {
    if (loading) loading.hidden = true;
    botaoLogin.disabled = false;
  }
});
