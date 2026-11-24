const hero = document.querySelector(".hero");
const marte = document.querySelector(".marte");
const texto = document.querySelector(".hero-texto");
const fundo = document.querySelector(".estrelas");
const navbar = document.getElementById("navbar");

function animarHero() {
  const distancia = hero.offsetHeight - window.innerHeight;
  const progresso = distancia > 0
    ? Math.min(Math.max(window.scrollY / distancia, 0), 1)
    : 0;

  marte.style.transform = `translateX(${progresso * 12}vw) scale(${1 + progresso * 1.2}) rotate(${progresso * 30}deg)`;
  texto.style.opacity = 1 - progresso * 1.5;
  texto.style.transform = `translateY(${-progresso * 80}px)`;
  fundo.style.transform = `translateY(${progresso * 120}px) scale(${1 + progresso * 0.15})`;
}

function encolherNavbar() {
  navbar.classList.toggle("pequena", window.scrollY > 50);
}

window.addEventListener("scroll", function () {
  animarHero();
  encolherNavbar();
});

const observador = new IntersectionObserver(function (itens) {
  itens.forEach(function (item) {
    if (item.isIntersecting) {
      item.target.classList.add("visivel");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".aparecer").forEach(function (elemento) {
  observador.observe(elemento);
});

animarHero();
encolherNavbar();
