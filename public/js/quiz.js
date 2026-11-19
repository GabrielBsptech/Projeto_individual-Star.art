// =====================================================
// 1. AS PERGUNTAS
// "correta" é a posição da resposta certa: 0 = A, 1 = B, 2 = C, 3 = D
// =====================================================
var quizzes = [
  {
    nome: "Sistema Solar",
    nivel: "Básico",
    perguntas: [
      {
        pergunta: "Qual é o maior planeta do Sistema Solar?",
        alternativas: ["Saturno", "Júpiter", "Netuno", "Terra"],
        correta: 1,
        explicacao: "Júpiter é o maior planeta, com tamanho para caber mais de mil Terras dentro dele."
      },
      {
        pergunta: "Qual planeta é conhecido como planeta vermelho?",
        alternativas: ["Vênus", "Mercúrio", "Marte", "Urano"],
        correta: 2,
        explicacao: "Marte tem essa cor por causa do óxido de ferro (ferrugem) no solo."
      },
      {
        pergunta: "Qual planeta tem os anéis mais visíveis?",
        alternativas: ["Saturno", "Marte", "Mercúrio", "Vênus"],
        correta: 0,
        explicacao: "Os anéis de Saturno são formados por gelo e rocha e podem ser vistos até com telescópios pequenos."
      },
      {
        pergunta: "Quantos planetas existem no Sistema Solar?",
        alternativas: ["7", "8", "9", "10"],
        correta: 1,
        explicacao: "São 8 planetas. Plutão hoje é considerado um planeta anão."
      },
      {
        pergunta: "Qual é a estrela do Sistema Solar?",
        alternativas: ["Lua", "Sirius", "Sol", "Polaris"],
        correta: 2,
        explicacao: "O Sol é a estrela que está no centro do Sistema Solar."
      }
    ]
  },

  {
    nome: "Exoplanetas",
    nivel: "Intermediário",
    perguntas: [
      {
        pergunta: "O que define um exoplaneta?",
        alternativas: [
          "Um planeta que orbita uma estrela fora do Sistema Solar",
          "Um planeta que orbita o Sol, mas é muito distante",
          "Uma estrela que não possui sistema planetário",
          "Um satélite natural de outro planeta"
        ],
        correta: 0,
        explicacao: "Exoplaneta é qualquer planeta que gira em volta de outra estrela que não seja o Sol."
      },
      {
        pergunta: "Qual método detecta planetas pela queda de brilho da estrela?",
        alternativas: ["Paralaxe", "Trânsito", "Redshift", "Eclipse lunar"],
        correta: 1,
        explicacao: "No método do trânsito, o planeta passa na frente da estrela e o brilho dela diminui um pouquinho."
      },
      {
        pergunta: "O que é a zona habitável de uma estrela?",
        alternativas: [
          "A região mais quente da estrela",
          "A região onde só existem gases",
          "A região onde a temperatura permite água líquida",
          "A região dentro de um buraco negro"
        ],
        correta: 2,
        explicacao: "Nessa região nem faz muito calor, nem muito frio, então a água pode ficar líquida."
      },
      {
        pergunta: "Qual telescópio da NASA se dedicou a caçar exoplanetas?",
        alternativas: ["Hubble", "Voyager", "Chandra", "Kepler"],
        correta: 3,
        explicacao: "O telescópio Kepler descobriu milhares de exoplanetas observando a queda de brilho das estrelas."
      },
      {
        pergunta: "Qual é a estrela mais próxima do Sol?",
        alternativas: ["Sirius", "Betelgeuse", "Próxima Centauri", "Polaris"],
        correta: 2,
        explicacao: "Próxima Centauri fica a pouco mais de 4 anos-luz de nós e tem pelo menos um planeta."
      }
    ]
  },

  {
    nome: "Buracos Negros",
    nivel: "Intermediário",
    perguntas: [
      {
        pergunta: "O que é o horizonte de eventos?",
        alternativas: [
          "A parte mais brilhante do buraco negro",
          "O limite a partir do qual nada consegue voltar",
          "O anel de poeira em volta da estrela",
          "O centro do buraco negro"
        ],
        correta: 1,
        explicacao: "Depois do horizonte de eventos a gravidade é tão forte que nem a luz consegue sair."
      },
      {
        pergunta: "Como se forma um buraco negro estelar?",
        alternativas: [
          "Pelo colapso de uma estrela muito grande no fim da vida",
          "Pela junção de dois planetas",
          "Pelo apagar de um cometa",
          "Pelo choque de uma lua com um asteroide"
        ],
        correta: 0,
        explicacao: "Quando uma estrela muito massiva acaba o combustível, ela desmorona sobre si mesma."
      },
      {
        pergunta: "O que existe no centro da Via Láctea?",
        alternativas: [
          "Uma estrela gigante",
          "Um planeta enorme",
          "Um grande aglomerado de gás frio",
          "Um buraco negro supermassivo"
        ],
        correta: 3,
        explicacao: "No centro da nossa galáxia está o Sagitário A*, um buraco negro supermassivo."
      },
      {
        pergunta: "A luz consegue escapar de um buraco negro?",
        alternativas: [
          "Sim, sempre",
          "Só a luz vermelha",
          "Não, depois do horizonte de eventos nem a luz escapa",
          "Só nos buracos negros pequenos"
        ],
        correta: 2,
        explicacao: "Por isso o buraco negro é \"negro\": ele não emite nem devolve luz."
      },
      {
        pergunta: "Qual projeto registrou a primeira imagem de um buraco negro?",
        alternativas: ["Kepler", "Event Horizon Telescope", "James Webb", "Voyager"],
        correta: 1,
        explicacao: "Em 2019, o Event Horizon Telescope divulgou a imagem do buraco negro da galáxia M87."
      }
    ]
  },

  {
    nome: "Galáxias",
    nivel: "Avançado",
    perguntas: [
      {
        pergunta: "Qual é a nossa galáxia?",
        alternativas: ["Andrômeda", "Sombreiro", "Via Láctea", "Girassol"],
        correta: 2,
        explicacao: "Nosso Sistema Solar fica dentro da Via Láctea, em um dos braços da espiral."
      },
      {
        pergunta: "Qual é a grande galáxia espiral mais próxima da Via Láctea?",
        alternativas: ["Sombreiro", "Andrômeda", "Girassol", "Olho Negro"],
        correta: 1,
        explicacao: "Andrômeda fica a cerca de 2,5 milhões de anos-luz e vai se chocar com a Via Láctea daqui a bilhões de anos."
      },
      {
        pergunta: "Quais são os principais tipos de galáxias?",
        alternativas: [
          "Espirais, elípticas e irregulares",
          "Quadradas, redondas e triangulares",
          "Quentes, frias e mornas",
          "Azuis, verdes e amarelas"
        ],
        correta: 0,
        explicacao: "As galáxias são classificadas pelo formato: espirais, elípticas e irregulares."
      },
      {
        pergunta: "O que mantém as estrelas unidas em uma galáxia?",
        alternativas: ["Magnetismo", "Calor", "Luz", "Gravidade"],
        correta: 3,
        explicacao: "A gravidade prende as estrelas, o gás e a poeira em volta do centro da galáxia."
      },
      {
        pergunta: "O que é a matéria escura?",
        alternativas: [
          "Uma nuvem de poeira preta",
          "Uma matéria que não emite luz, mas tem efeito gravitacional",
          "Um tipo de buraco negro pequeno",
          "A sombra de um planeta"
        ],
        correta: 1,
        explicacao: "Não conseguimos ver a matéria escura, mas percebemos a gravidade dela nas galáxias."
      }
    ]
  }
];

// =====================================================
// 2. PEGANDO OS ELEMENTOS DA PÁGINA
// =====================================================
var telaMenu = document.getElementById("telaMenu");
var telaPergunta = document.getElementById("telaPergunta");
var telaResultado = document.getElementById("telaResultado");

var listaQuizzes = document.getElementById("listaQuizzes");
var tituloQuiz = document.getElementById("tituloQuiz");
var contador = document.getElementById("contador");
var textoPergunta = document.getElementById("pergunta");
var divAlternativas = document.getElementById("alternativas");
var feedback = document.getElementById("feedback");
var feedbackTitulo = document.getElementById("feedbackTitulo");
var feedbackTexto = document.getElementById("feedbackTexto");
var botaoConfirmar = document.getElementById("botaoConfirmar");

var textoResultado = document.getElementById("textoResultado");
var notaResultado = document.getElementById("notaResultado");
var botaoRepetir = document.getElementById("botaoRepetir");
var botaoMenu = document.getElementById("botaoMenu");

// =====================================================
// 3. VARIÁVEIS QUE GUARDAM O ESTADO
// =====================================================
var quizAtual = 0;       // qual quiz foi escolhido
var perguntaAtual = 0;   // em qual pergunta estamos
var escolhida = -1;      // alternativa marcada (-1 = nenhuma)
var acertos = 0;
var jaConfirmou = false;

var letras = ["A", "B", "C", "D"];

// =====================================================
// 4. MOSTRAR UMA TELA E ESCONDER AS OUTRAS
// =====================================================
function mostrarTela(tela) {
  telaMenu.hidden = true;
  telaPergunta.hidden = true;
  telaResultado.hidden = true;
  tela.hidden = false;
}

// =====================================================
// 5. MENU: cria um botão para cada quiz
// =====================================================
function montarMenu() {
  listaQuizzes.innerHTML = "";

  for (var i = 0; i < quizzes.length; i++) {
    var botao = document.createElement("button");
    botao.className = "opcao";
    botao.innerHTML =
      '<span class="letra">' + (i + 1) + '</span>' +
      '<span class="texto">' + quizzes[i].nome + ' - ' + quizzes[i].nivel + '</span>';

    botao.addEventListener("click", criarClique(i));
    listaQuizzes.appendChild(botao);
  }

  mostrarTela(telaMenu);
}

function criarClique(numero) {
  return function () {
    comecarQuiz(numero);
  };
}

// =====================================================
// 6. COMEÇAR UM QUIZ
// =====================================================
function comecarQuiz(numero) {
  quizAtual = numero;
  perguntaAtual = 0;
  acertos = 0;
  mostrarPergunta();
  mostrarTela(telaPergunta);
}

// =====================================================
// 7. MOSTRAR A PERGUNTA ATUAL
// =====================================================
function mostrarPergunta() {
  var quiz = quizzes[quizAtual];
  var p = quiz.perguntas[perguntaAtual];

  escolhida = -1;
  jaConfirmou = false;

  tituloQuiz.textContent = quiz.nome + " - Nível " + quiz.nivel;
  contador.textContent = "0" + (perguntaAtual + 1) + " / 0" + quiz.perguntas.length;
  textoPergunta.textContent = p.pergunta;

  feedback.hidden = true;
  botaoConfirmar.textContent = "Confirmar resposta";
  botaoConfirmar.disabled = true;

  // cria as 4 alternativas
  divAlternativas.innerHTML = "";
  for (var i = 0; i < p.alternativas.length; i++) {
    var botao = document.createElement("button");
    botao.className = "opcao";
    botao.innerHTML =
      '<span class="letra">' + letras[i] + '</span>' +
      '<span class="texto">' + p.alternativas[i] + '</span>' +
      '<span class="marca">✓</span>';

    botao.addEventListener("click", criarEscolha(i));
    divAlternativas.appendChild(botao);
  }
}

// =====================================================
// 8. ESCOLHER UMA ALTERNATIVA
// =====================================================
function criarEscolha(numero) {
  return function () {
    if (jaConfirmou) {
      return; // depois de confirmar, não dá mais para trocar
    }

    escolhida = numero;

    var botoes = divAlternativas.querySelectorAll(".opcao");
    for (var i = 0; i < botoes.length; i++) {
      botoes[i].classList.remove("selecionada");
    }
    botoes[numero].classList.add("selecionada");

    botaoConfirmar.disabled = false;
  };
}

// =====================================================
// 9. BOTÃO CONFIRMAR / PRÓXIMA
// =====================================================
botaoConfirmar.addEventListener("click", function () {
  var quiz = quizzes[quizAtual];

  // segundo clique: vai para a próxima pergunta (ou para o resultado)
  if (jaConfirmou) {
    perguntaAtual++;

    if (perguntaAtual < quiz.perguntas.length) {
      mostrarPergunta();
    } else {
      mostrarResultado();
    }
    return;
  }

  // primeiro clique: confere a resposta
  var p = quiz.perguntas[perguntaAtual];
  var botoes = divAlternativas.querySelectorAll(".opcao");
  jaConfirmou = true;

  // pinta a certa de verde
  botoes[p.correta].classList.add("certa");

  if (escolhida === p.correta) {
    acertos++;
    feedbackTitulo.textContent = "Resposta correta!";
  } else {
    botoes[escolhida].classList.add("errada");
    feedbackTitulo.textContent = "Resposta incorreta";
  }

  feedbackTexto.textContent = p.explicacao;
  feedback.hidden = false;

  // trava as alternativas
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].disabled = true;
  }

  // muda o texto do botão
  if (perguntaAtual === quiz.perguntas.length - 1) {
    botaoConfirmar.textContent = "Ver resultado";
  } else {
    botaoConfirmar.textContent = "Próxima pergunta";
  }
});

// =====================================================
// 10. RESULTADO FINAL
// =====================================================
function mostrarResultado() {
  var quiz = quizzes[quizAtual];
  var total = quiz.perguntas.length;

  textoResultado.textContent = "Quiz: " + quiz.nome;
  notaResultado.textContent = acertos + " / " + total;

  // AQUI você pode enviar o resultado para o banco de dados.
  // Exemplo (quando tiver a rota no servidor):
  //
  // fetch("/quiz/salvar", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     idUsuario: sessionStorage.ID_USUARIO,
  //     quiz: quiz.nome,
  //     acertos: acertos,
  //     total: total
  //   })
  // });

  mostrarTela(telaResultado);
}

botaoRepetir.addEventListener("click", function () {
  comecarQuiz(quizAtual);
});

botaoMenu.addEventListener("click", montarMenu);

// =====================================================
// 11. INICIAR A PÁGINA
// =====================================================
montarMenu();