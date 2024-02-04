// selecionando todos os itens, criando variaveis
const galleryItems = document.querySelectorAll(".gallery-item");

// fazendo a iteracao
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

// forEach eh quando vc percorre por ele.. 
// eh como se vc recebesse um array quando seleciono varios elementos
galleryItems.forEach((item) => {
  //criando um evento para ativar a imagem
  item.addEventListener("click", () => {
    //console.log("clicou");
    const imageUrl = item.querySelector(".gallery-image").getAttribute("data-src");

    lightboxImage.setAttribute("src", imageUrl);
    lightbox.style.display = "flex";
  });
});
    
// criar um evento para usar este botao de fechar
lightboxClose.addEventListener("click", () => {
lightbox.style.display = "none";
});