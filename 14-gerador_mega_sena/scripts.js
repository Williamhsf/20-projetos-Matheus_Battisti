const numbers = document.querySelectorAll(".number");
const generateBtn = document.querySelector("#generate");

function generateNumbers() {
  // quantidade de numero minimo e maximo
  const max = 60;
  const min = 1;

  // array para armazenar esses numeros
  const result = [];

  // gerando 6 numeros aleatorios
  while (result.length < 6) {
    // gera um número aleatório
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    if(!result.includes(number)) {
      // verifica se o numero ja foi gerado
      result.push(number); // adiciona ao array
    }
  }

  // exibe os numeros gerados na tela
  for (let i=0; i < numbers.length; i++) {
    // atribui o número ao elemento span correspondente
    numbers[i].textContent = result[i];
  } 
}

generateBtn.addEventListener("click", generateNumbers);