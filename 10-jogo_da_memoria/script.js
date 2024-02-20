// definir uma matriz com o formato das cartas,
// usando os pares de cartas
const cards = [1, 1, 2, 2, 3, 3, 4, 4];

// Crie um objeto para armazenar as imagens correspondentes para cada carta
async function generateImagePairs() {
  const imagePairs = {};

  // percorrer em cada um dos pares
  for(let i = 0; i < cards.length; i++) {

    if(!imagePairs[cards[i]]) {
      const id = Math.floor(Math.random() * 1000) + 1;
      const url = `https://picsum.photos/id/${id}/200/300`
      imagePairs[cards[i]] = [url, url];
    }
  }
  // console.log(imagePairs);
  return imagePairs;
}

// Embaralhe a matriz de cartas
function shuffleCards(cards) {
  cards.sort(() => Math.random() - 0.5);
}

// precisamos ter algum parametro
let flippedCards = 0; //quantas viraram
let firstCard, secondCard; // dar o match
let attempts = 0;

// enquanto isso esperamos
// Selecionando cartas e atribuindo um número da matriz a cada carta
async function createCards() {
  const imagePairs = await generateImagePairs();
  shuffleCards(cards);
  // console.log(cards);

  // inserindo um container em cada um dos cards
  const cardsList = document.querySelector(".container");
  for(let i = 0; i < cards.length; i++) {
    const card = document.createElement("div");
    const cardBack = document.createElement("div");
    const cardFront = document.createElement("div");

    // add classes de cada cartão
    card.classList.add("card");
    cardBack.classList.add("back");
    cardFront.classList.add("front");

    // img de tras do card
    cardBack.style.backgroundImage = `url('img/card-back.png')`;

    // add img da parte da frente
    const cardNumber = cards[i]; //indice do cartão atual
    const cardImage = imagePairs[cardNumber].pop();

    cardFront.style.backgroundImage = `url(${cardImage})`;

    card.setAttribute("data-card", cardNumber); // numerando o card

    // add frente e verso
    card.appendChild(cardBack);
    card.appendChild(cardFront);

    card.addEventListener("click", flipCard);
    cardsList.appendChild(card);
  }
}

// fazer o cartao virar clicando nele
function flipCard() {
  if(flippedCards < 2 && !this.classList.contains("flip")) {
    flippedCards++;
    this.classList.add("flip");

    if(flippedCards === 1) {
      firstCard = this;
    } else {
      secondCard = this;
      attempts++;
      updateAttempts();
      checkForMatch();
    }
  }
}

function updateAttempts() {
  const attemptsElement = document.querySelector(".attempts");
  attemptsElement.textContent = `Tentativas: ${attempts}`;
}

// Verifique se as cartas viradas são iguais
function checkForMatch() {
  const isMatch = 
    firstCard.getAttribute("data-card") ===
    secondCard.getAttribute("data-card")
    // desabilitar e virar as cartas
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  if (document.querySelectorAll(".card:not(.flip)").length === 0) {
    // congratulations
    showCongratulations();
  }

  resetBoard();
}

// Reinicia o tabuleiro
function resetBoard() {
  [flippedCards, firstCard, secondCard] = [0, null, null];
}

// Desvira as cartas se não forem iguais
function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1000);
}

function showCongratulations() {
  const congratulationsContainer = document.querySelector(".congratulations-container");
  const congratulationsElement = document.createElement("p");
  congratulationsElement.classList.add("congratulations");
  congratulationsElement.textContent = `Parabéns! Você venceu em ${attempts} tentativas!`;
  congratulationsContainer.appendChild(congratulationsElement);
}

createCards();