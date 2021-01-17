console.log("hello");

const normalDeckButton = document.getElementById("normal-deck");
const tacticalDeckButton = document.getElementById("tactical-deck");
normalDeckButton.onclick = () => startGame(1);
tacticalDeckButton.onclick = () => startGame(2);

const nextButton = document.getElementById("next-card");
nextButton.onclick = () => showCard();

const image = document.querySelector("img");
const deck = document.getElementById("deck");

const currentCard = document.getElementById("currentCard");
const deck1 = [...new Array(12)].map((x, i) => {
  return { id: `deck1-${i + 1}` };
});
const deck2 = [...new Array(12)].map((x, i) => {
  return { id: `deck2-${i + 1}` };
});

let currentDeck = [];
let deckSelected = null;
let gameStarted = false;

function startGame(deckNum) {
  hideButtons();
  gameStarted = true;
  selectDeck(deckNum);
  showNextButton();
}
function showNextButton() {
  nextButton.style.display = "block";
}

function hideButtons() {
  normalDeckButton.style.display = "none";
  tacticalDeckButton.style.display = "none";
}

function selectDeck(num) {
  if (!num) break;
  switch (num) {
    case 1:
      deckSelected = [...deck1];
      break;
    case 2:
      deckSelected = [...deck2];
      break;
  }
}

function showCard() {
  if (gameStarted) {
    console.log(currentDeck.length);
    if (currentDeck.length == 0) {
      console.log("shuffle");
      console.log(deck1);
      currentDeck = [...deck1];
      deck.style.display = "initial";
    }
    if (currentDeck.length > 0) {
      let randomIndex = Math.floor(Math.random() * currentDeck.length);
      console.log(currentDeck[randomIndex].id);
      image.setAttribute("src", `img/${currentDeck[randomIndex].id}.png`);

      currentDeck.splice(randomIndex, 1);
      if (currentDeck == 0) {
        deck.style.display = "none";
      }
    }
  }
}
