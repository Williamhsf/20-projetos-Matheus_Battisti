const botaoVerificar = document.querySelector("#botao-verificar");
const palavraInput = document.querySelector("#palavra");
const resultado = document.querySelector("#resultado");

// verificar se é ou não palindromo
function verificarPalindromo() {
  // o que for digitado vai passar por aqui
  const palavra = palavraInput.value;
  
  // pega a palavra separa as letras 
  // inverte a palavra e dá um join para unir
  const palavraInvertida = palavra.split("").reverse().join("")
  
  if (palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
    resultado.textContent = `A palavra "${palavra}" é um palindromo.`
  } else {
    resultado.textContent = `A palavra "${palavra}" não é um palindromo.`
  }
}

botaoVerificar.addEventListener("click", verificarPalindromo);

// enviar teclando "Enter"
palavraInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    verificarPalindromo();
  }
});