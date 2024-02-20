// definir uma matriz com o formato das cartas,
// usando os pares de cartas
const cards = [1, 1, 2, 2, 3, 3, 4, 4];

// função assincrona pq é uma requisição api
async function generateImagePairs() {
  const imagePairs = {};

  // percorrer em cada um dos pares
  for(let i = 0; i < cards.length; i++) {
    if(!imagePairs[cards[i]]) {
      const id = Math.floor(Math.random() * 1000) + 1;
      const url = `https://picsum.photos/id/${id}/300/400`;
      imagePairs[cards[i]] = [url, url];
    }
  }
  console.log(imagePairs);
  return imagePairs;
}

// embaralhando a array
function shuffleCards(cards) {
  cards.sort(() => Math.random() - 0.5);
}

// enquanto isso esperamos
async function createCards() {
  const imagePairs = await generateImagePairs();
  shuffleCards(cards);
  // console.log(cards);
}

createCards();
