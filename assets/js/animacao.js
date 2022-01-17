export default function scrollAnimado(parametro) {
  window.addEventListener("scroll", () => {
    const altura = window.scrollY;

    const animacoes = document.querySelectorAll(parametro);

    animacoes.forEach((animacao) => {
      const animacaoAltura = animacao.offsetTop;
      const animacaoTamanho = animacao.offsetHeight;
      if (altura + window.innerHeight > animacaoAltura) {
        animacao.classList.add("scrolled");
      } else {
        animacao.classList.remove("scrolled");
      }
    });
  });
}
