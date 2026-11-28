const nomeUsuario = sessionStorage.NOME_USUARIO;
const idUsuario = sessionStorage.ID_USUARIO;

const MODULOS = ["Sistema Solar", "Exoplanetas", "Buracos Negros", "Galáxias"];

document.getElementById("greeting").textContent = `Olá, ${nomeUsuario || "Usuário"}! Bem-vindo á dashboard`;

function montarModulos(resumos) {
  const porNome = Object.fromEntries(resumos.map(r => [r.quiz, r]));
  const nomes = [...new Set([...MODULOS, ...resumos.map(r => r.quiz)])];

  return nomes.map((nome, i) => {
    const resumo = porNome[nome];
    return {
      id: String(i + 1).padStart(2, "0"),
      nome,
      tentativas: resumo ? Number(resumo.tentativas) : 0,
      media: resumo ? Number(resumo.media) : null
    };
  });
}

function renderizarEstatisticas(modulos) {
  const iniciados = modulos.filter(m => m.tentativas > 0);
  const total = modulos.reduce((soma, m) => soma + m.tentativas, 0);
  const media = iniciados.length
    ? Math.round(iniciados.reduce((soma, m) => soma + m.media, 0) / iniciados.length)
    : 0;

  document.getElementById("statStudied").textContent = `${iniciados.length}/${modulos.length}`;
  document.getElementById("statAttempts").textContent = total;
  document.getElementById("statAverage").textContent = `${media}%`;
}

function statusModulo(modulo) {
  if (modulo.tentativas === 0) return { texto: "Não iniciado", classe: "nao-iniciado" };
  if (modulo.media >= 80) return { texto: "Dominado", classe: "dominado" };
  return { texto: "Em andamento", classe: "andamento" };
}

function renderizarModulos(modulos) {
  const lista = document.getElementById("modulesList");
  lista.innerHTML = "";

  modulos.forEach(modulo => {
    const status = statusModulo(modulo);
    const tentativas = `${modulo.tentativas} tentativa${modulo.tentativas > 1 ? "s" : ""}`;
    const elemento = document.createElement("div");
    elemento.className = "module";
    elemento.innerHTML = `
      <div class="row">
        <span class="module-name">${modulo.id} ${modulo.nome}</span>
        <span class="badge ${status.classe}">${status.texto}</span>
      </div>
      <span class="module-meta">${modulo.tentativas > 0 ? tentativas : "Sem tentativas ainda"}</span>`;
    lista.appendChild(elemento);
  });

  const proximo = modulos.find(m => m.tentativas === 0);
  const botao = document.getElementById("btnStart");

  botao.hidden = !proximo;
  if (proximo) {
    botao.textContent = `Começar ${proximo.nome} ↗`;
    botao.onclick = () => (window.location.href = "quiz.html");
  }
}

function renderizarGrafico(modulos) {
  Chart.defaults.font.family = "Inter, system-ui, sans-serif";
  Chart.defaults.color = "#b5b5b5";

  new Chart(document.getElementById("chartModules"), {
    type: "bar",
    data: {
      labels: modulos.map(m => m.nome),
      datasets: [{
        label: "Média de aproveitamento",
        data: modulos.map(m => m.media),
        backgroundColor: "#3b82f6",
        borderRadius: 4,
        barPercentage: 0.3,
        categoryPercentage: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: 0,
          max: 100,
          ticks: { stepSize: 25, callback: v => `${v}%`, font: { size: 14, weight: "600" } },
          grid: { color: "#2d2d2d" },
          border: { display: false }
        },
        x: {
          ticks: { font: { size: 14, weight: "600" } },
          grid: { display: false },
          border: { color: "#2d2d2d" }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => (ctx.parsed.y == null ? "Sem avaliação" : `${ctx.parsed.y}%`)
          }
        }
      }
    }
  });
}

async function carregarDashboard() {
  let resumos = [];

  try {
    const resposta = await fetch(`/quiz/dashboard/${idUsuario}`);
    if (resposta.ok) resumos = await resposta.json();
  } catch (erro) {
    console.error("Erro ao carregar os dados do quiz:", erro);
  }

  const modulos = montarModulos(resumos);
  renderizarEstatisticas(modulos);
  renderizarModulos(modulos);
  renderizarGrafico(modulos);
}

carregarDashboard();
