// selecionando o form
const form = document.querySelector("form");

// selecionando cada um dos inputs
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const errorMessages = document.querySelectorAll(".error-message");


form.addEventListener("submit", (event) => {
  // faz com que o evento nao  envie de forma tradicional
  event.preventDefault();
  resetErrors();
  validateInputs();
})

// limpar ou resetar erros
function resetErrors() {
  errorMessages.forEach((errorMessage) => {
    errorMessage.innerText = "";
  });

  // removendo a borda de erro
  nome.parentElement.classList.remove("error");
  email.parentElement.classList.remove("error");
  assunto.parentElement.classList.remove("error");
  mensagem.parentElement.classList.remove("error");
}

// percorrer entre os inputs e ver se encontra algum erro
function validateInputs() {
  const nomeValue = nome.value.trim();
  const emailValue = email.value.trim();
  const assuntoValue = assunto.value.trim();
  const mensagemValue = mensagem.value.trim();

  // verificar se o nome esta vazio caso esteja dispara o erro 
  if(nomeValue === "") {
    // erro
    setError(nome, "Nome nao pode ficar em branco");
  }

  // validacoes de cada um deles
  if(emailValue === "") {
    setError(email, "E-mail não pode ficar em branco");
  } else if(!isValidEmail(emailValue)) {
    setError(email, "E-mail invalido");
  }

  if(assuntoValue === "") {
    setError(assunto, "assunto nao pode ficar em branco");
  }

  if(mensagemValue === "") {
    setError(mensagem, "Mensagem não pode ficar em branco");
  }

}

// espera um input e uma mensagem de erro.. pois podem haver varios
function setError(input, errorMessage) {
  // selecionar a mensagem de erro mais proximo do imput que foi enviado
  const errorMessageElement = input.nextElementSibling; // elemento irmao
  errorMessageElement.innerText = errorMessage;
  input.parentElement.classList.add("error"); // coloca uma classe nos inputs
}

// validacao com regex do email
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}