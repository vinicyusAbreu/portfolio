import scrollAnimado from "./animacao.js";
(() => {
  const hamburger = document.querySelector("#menu__toggle");
  const menu = document.querySelector(".container-menu-mobile");
  const menuItems = document.querySelectorAll(".menu-mobile li");
  const anoAtual = document.querySelector(".ano-atual");

  let aberto = false;

  function abrirFechar() {
    if (!aberto) {
      menu.classList.add("transicao-carregamento-pagina");
    } else {
      menu.classList.remove("transicao-carregamento-pagina");
      document.querySelector("#menu__toggle").checked = false;
    }
    aberto = !aberto;
  }

  const mudar = () => {
    abrirFechar();
  };

  hamburger.addEventListener("click", mudar);

  menuItems.forEach((item) => {
    item.addEventListener("click", mudar);
  });

  scrollAnimado("[data-anime='scroll']");

  anoAtual.innerHTML = new Date().getFullYear();
})();
