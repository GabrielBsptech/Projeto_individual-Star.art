const $ = id => document.getElementById(id);

const [telaMenu, telaPergunta, telaResultado] = ["telaMenu", "telaPergunta", "telaResultado"].map($);
const listaQuizzes = $("listaQuizzes");
const alternativas = $("alternativas");
const perguntaEl = $("pergunta");
const tituloQuiz = $("tituloQuiz");
const contador = $("contador");
const feedback = $("feedback");
const feedbackTitulo = $("feedbackTitulo");
const feedbackTexto = $("feedbackTexto");
const botaoConfirmar = $("botaoConfirmar");
const textoResultado = $("textoResultado");
const notaResultado = $("notaResultado");
const botaoRepetir = $("botaoRepetir");
const botaoMenu = $("botaoMenu");

const LETRAS = ["A", "B", "C", "D"];

let quizAtual = 0;
let perguntaAtual = 0;
let escolhida = -1;
let acertos = 0;
let confirmada = false;

function mostrarTela(tela) {
  [telaMenu, telaPergunta, telaResultado].forEach(item => (item.hidden = item !== tela));
}

function criarOpcao(letra, texto, indice) {
  const botao = document.createElement("button");
  botao.className = "opcao";
  botao.dataset.indice = indice;
  botao.innerHTML =
    `<span class="letra">${letra}</span>` +
    `<span class="texto">${texto}</span>` +
    `<span class="marca">✓</span>`;
  return botao;
}

function montarMenu() {
  listaQuizzes.innerHTML = "";
  QUIZZES.forEach((quiz, i) => {
    listaQuizzes.appendChild(criarOpcao(i + 1, `${quiz.nome} - ${quiz.nivel}`, i));
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

  escolhida = -1;
  confirmada = false;
  tituloQuiz.textContent = `${quiz.nome} - Nível ${quiz.nivel}`;
  contador.textContent = `${perguntaAtual + 1} / ${quiz.perguntas.length}`;
  perguntaEl.textContent = pergunta.pergunta;
  feedback.hidden = true;
  botaoConfirmar.textContent = "Confirmar resposta";
  botaoConfirmar.disabled = true;

  alternativas.innerHTML = "";
  pergunta.alternativas.forEach((texto, i) => {
    alternativas.appendChild(criarOpcao(LETRAS[i], texto, i));
  });
}

function selecionarAlternativa(indice) {
  if (confirmada) return;
  escolhida = indice;
  [...alternativas.children].forEach((botao, i) => {
    botao.classList.toggle("selecionada", i === indice);
  });
  botaoConfirmar.disabled = false;
}

function confirmarResposta() {
  const quiz = QUIZZES[quizAtual];

  if (confirmada) {
    perguntaAtual++;
    perguntaAtual < quiz.perguntas.length ? mostrarPergunta() : mostrarResultado();
    return;
  }

  const pergunta = quiz.perguntas[perguntaAtual];
  const botoes = [...alternativas.children];
  confirmada = true;
  botoes[pergunta.correta].classList.add("certa");

  if (escolhida === pergunta.correta) {
    acertos++;
    feedbackTitulo.textContent = "Resposta correta!";
  } else {
    botoes[escolhida].classList.add("errada");
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
  notaResultado.textContent = `${acertos} / ${quiz.perguntas.length}`;
  salvarResultado(quiz);
  mostrarTela(telaResultado);
}

listaQuizzes.addEventListener("click", evento => {
  const botao = evento.target.closest(".opcao");
  if (botao) comecarQuiz(Number(botao.dataset.indice));
});

alternativas.addEventListener("click", evento => {
  const botao = evento.target.closest(".opcao");
  if (botao) selecionarAlternativa(Number(botao.dataset.indice));
});

botaoConfirmar.addEventListener("click", confirmarResposta);
botaoRepetir.addEventListener("click", () => comecarQuiz(quizAtual));
botaoMenu.addEventListener("click", montarMenu);

montarMenu();
