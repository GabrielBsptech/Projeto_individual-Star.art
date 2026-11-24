const [telaMenu, telaPergunta, telaResultado] =
  ["telaMenu", "telaPergunta", "telaResultado"].map(id => document.getElementById(id));

const listaQuizzes = document.getElementById("listaQuizzes");
const tituloQuiz = document.getElementById("tituloQuiz");
const contador = document.getElementById("contador");
const textoPergunta = document.getElementById("pergunta");
const divAlternativas = document.getElementById("alternativas");
const feedback = document.getElementById("feedback");
const feedbackTitulo = document.getElementById("feedbackTitulo");
const feedbackTexto = document.getElementById("feedbackTexto");
const botaoConfirmar = document.getElementById("botaoConfirmar");

const textoResultado = document.getElementById("textoResultado");
const notaResultado = document.getElementById("notaResultado");
const botaoRepetir = document.getElementById("botaoRepetir");
const botaoMenu = document.getElementById("botaoMenu");

const LETRAS = ["A", "B", "C", "D"];

let quizAtual = 0;
let perguntaAtual = 0;
let alternativaEscolhida = -1;
let acertos = 0;
let respostaConfirmada = false;

function mostrarTela(tela) {
  [telaMenu, telaPergunta, telaResultado].forEach(item => (item.hidden = item !== tela));
}

function criarOpcao(letra, texto, aoClicar) {
  const botao = document.createElement("button");
  botao.className = "opcao";
  botao.innerHTML =
    `<span class="letra">${letra}</span>` +
    `<span class="texto">${texto}</span>` +
    `<span class="marca">✓</span>`;
  botao.addEventListener("click", aoClicar);
  return botao;
}

function montarMenu() {
  listaQuizzes.innerHTML = "";
  QUIZZES.forEach((quiz, i) => {
    const botao = criarOpcao(i + 1, `${quiz.nome} - ${quiz.nivel}`, () => comecarQuiz(i));
    listaQuizzes.appendChild(botao);
  });
  mostrarTela(telaMenu);
}

function comecarQuiz(indice) {
  quizAtual = indice;
  perguntaAtual = 0;
  acertos = 0;
  mostrarPergunta();
  mostrarTela(telaPergunta);
}

function mostrarPergunta() {
  const quiz = QUIZZES[quizAtual];
  const pergunta = quiz.perguntas[perguntaAtual];

  alternativaEscolhida = -1;
  respostaConfirmada = false;

  tituloQuiz.textContent = `${quiz.nome} - Nível ${quiz.nivel}`;
  contador.textContent = `${perguntaAtual + 1} / ${quiz.perguntas.length}`;
  textoPergunta.textContent = pergunta.pergunta;
  feedback.hidden = true;
  botaoConfirmar.textContent = "Confirmar resposta";
  botaoConfirmar.disabled = true;

  divAlternativas.innerHTML = "";
  pergunta.alternativas.forEach((texto, i) => {
    const botao = criarOpcao(LETRAS[i], texto, () => selecionarAlternativa(i));
    divAlternativas.appendChild(botao);
  });
}

function selecionarAlternativa(indice) {
  if (respostaConfirmada) return;

  alternativaEscolhida = indice;
  divAlternativas.querySelectorAll(".opcao").forEach((botao, posicao) => {
    botao.classList.toggle("selecionada", posicao === indice);
  });
  botaoConfirmar.disabled = false;
}

function confirmarResposta() {
  const quiz = QUIZZES[quizAtual];

  if (respostaConfirmada) {
    perguntaAtual++;
    perguntaAtual < quiz.perguntas.length ? mostrarPergunta() : mostrarResultado();
    return;
  }

  const pergunta = quiz.perguntas[perguntaAtual];
  const botoes = divAlternativas.querySelectorAll(".opcao");
  respostaConfirmada = true;
  botoes[pergunta.correta].classList.add("certa");

  if (alternativaEscolhida === pergunta.correta) {
    acertos++;
    feedbackTitulo.textContent = "Resposta correta!";
  } else {
    botoes[alternativaEscolhida].classList.add("errada");
    feedbackTitulo.textContent = "Resposta incorreta";
  }

  feedbackTexto.textContent = pergunta.explicacao;
  feedback.hidden = false;
  botoes.forEach(botao => (botao.disabled = true));

  botaoConfirmar.textContent =
    perguntaAtual === quiz.perguntas.length - 1 ? "Ver resultado" : "Próxima pergunta";
}

async function salvarResultado(quiz) {
  const idUsuario = sessionStorage.ID_USUARIO;
  if (!idUsuario) return;

  try {
    const resposta = await fetch("/quiz/salvar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idUsuario,
        quiz: quiz.nome,
        acertos,
        total: quiz.perguntas.length
      })
    });

    if (!resposta.ok) throw new Error(await resposta.text());
  } catch (erro) {
    console.error("Erro ao salvar o resultado do quiz:", erro);
  }
}

function mostrarResultado() {
  const quiz = QUIZZES[quizAtual];
  textoResultado.textContent = "Quiz: " + quiz.nome;
  notaResultado.textContent = acertos + " / " + quiz.perguntas.length;
  salvarResultado(quiz);
  mostrarTela(telaResultado);
}

botaoConfirmar.addEventListener("click", confirmarResposta);
botaoRepetir.addEventListener("click", () => comecarQuiz(quizAtual));
botaoMenu.addEventListener("click", montarMenu);

montarMenu();
