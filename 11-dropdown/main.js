const backToTopBtn = document.querySelector("#back-to-top");

// capturando o evento de scroll da tela
window.addEventListener("scroll", () => {
  // um fallback para navegadores mais antigos
  // se não der pra usar um usa o outro
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if(scrollTop > 500){
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
})

// evento de comportamento do botão, no caso ao clicar 
// ele irá retornar para o inicio
backToTopBtn.addEventListener("click", (e) => {
  e.preventDefault(); // não ocorrer o evento padrão

  // usando o metodo scrollTo para scrolar para o topo
  window.scrollTo({
    top: 0,
  //comportamento suave 
  behavior: "smooth",
  });
});





