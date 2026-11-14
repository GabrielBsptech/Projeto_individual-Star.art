const formCadastro = document.querySelector("form");
const botaoCadastro = formCadastro.querySelector("button[type='submit']");

formCadastro.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nomeUsuario").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  botaoCadastro.disabled = true;

  try {
    const resposta = await fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nomeServer: nome,
        emailServer: email,
        senhaServer: senha
      })
    });

    if (!resposta.ok) {
      throw new Error(await resposta.text());
    }

    alert("Cadastro realizado com sucesso!");
    window.location.href = "login_index.html";
  } catch (erro) {
    console.error("Erro ao cadastrar:", erro);
    alert("Erro ao cadastrar, usuario já cadastrado");
  } finally {
    botaoCadastro.disabled = false;
  }
});
