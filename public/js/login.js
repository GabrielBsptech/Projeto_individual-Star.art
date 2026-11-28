const formLogin = document.getElementById("formLogin");
const botaoLogin = formLogin.querySelector("button[type='submit']");
const loading = document.getElementById("loading");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");

// mostra (ou limpa, se a mensagem for vazia) a frase de erro
function mostrarErro(input, idErro, mensagem) {
  const erro = document.getElementById(idErro);
  erro.textContent = mensagem;
  erro.classList.toggle("mostrar", !!mensagem);
  if (input) input.classList.toggle("invalido", !!mensagem);
}

function limparErros() {
  mostrarErro(inputEmail, "erroEmail", "");
  mostrarErro(inputSenha, "erroSenha", "");
  mostrarErro(null, "erroGeral", "");
}

// some com o erro assim que a pessoa volta a digitar
inputEmail.addEventListener("input", () => {
  mostrarErro(inputEmail, "erroEmail", "");
  mostrarErro(null, "erroGeral", "");
});

inputSenha.addEventListener("input", () => {
  mostrarErro(inputSenha, "erroSenha", "");
  mostrarErro(null, "erroGeral", "");
});

formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();
  limparErros();

  const email = inputEmail.value.trim();
  const senha = inputSenha.value;
  let valido = true;

  if (!email) {
    alert(inputEmail, "erroEmail", "Digite seu email.");
  } else if (!email.includes("@")) {
    alert(inputEmail, "erroEmail", "Digite um email válido.");
  }

  if (!senha) {
    alert(inputSenha, "erroSenha", "Digite sua senha.");

  }

  if (!valido) return;

  if (loading) loading.hidden = false;
  botaoLogin.disabled = true;

  try {
    const resposta = await fetch("/usuarios/autenticar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emailServer: email, senhaServer: senha })
    });

    if (resposta.status === 403) {
      mostrarErro(inputSenha, "erroSenha", "Email e/ou senha inválidos.");
      return;
    }

    if (!resposta.ok) throw new Error(await resposta.text());

    const dados = resposta.status === 204 ? {} : await resposta.json();

    sessionStorage.ID_USUARIO = dados.id;
    sessionStorage.NOME_USUARIO = dados.nome;
    sessionStorage.EMAIL_USUARIO = dados.email;

    window.location.href = "homepage.html";
  } catch (erro) {
    console.error("Erro ao entrar:", erro);
    mostrarErro(null, "erroGeral", "Não foi possível entrar. Tente novamente.");
  } finally {
    if (loading) loading.hidden = true;
    botaoLogin.disabled = false;
  }
});
