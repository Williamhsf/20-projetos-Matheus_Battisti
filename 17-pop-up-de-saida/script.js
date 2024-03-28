const popup = document.querySelector("#popup");
const cancelButton = document.querySelector("#cancel-button");

// remove exibição de pop up ao entrar na pagina
localStorage.removeItem("popupDisplayed");

// detectando movimento
document.addEventListener("mouseout", (event) => {
  // precisa ser gerado 1 vez antes como true
  const popupDisplayed = localStorage.getItem("popupDisplayed");

  // quer dizer que saiu o mouse da tela
  if(!popupDisplayed) {
    // verificando se saiu da página
    if (event.relatedTarget === null) {
      // exibe o popup
      popup.style.display = "block";
    }
  }
});

// fechando popup
cancelButton.addEventListener("click", () => {
  // ao clicar em cancelar imediatemente irá fechar
  popup.style.display = "none";

  localStorage.setItem("popupDisplayed", "true");
});