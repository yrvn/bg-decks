require("normalize.css/normalize.css");
require("./../styles/index.scss");

const normalDeckButton = document.getElementById("normal-deck");
const tacticalDeckButton = document.getElementById("tactical-deck");
normalDeckButton.onclick = () => startGame(1);
tacticalDeckButton.onclick = () => startGame(2);

const nextButton = document.getElementById("next-card");
nextButton.onclick = () => showCard();

const selectedCard = document.getElementById("selectedCard");
const deck = document.getElementById("deck");

const deck1 = [...new Array(12)].map((x, i) => {
    return { id: i + 1 };
});
const deck2 = [...new Array(12)].map((x, i) => {
    return { id: i + 1 };
});

let currentDeck = [];
let deckSelected,
    currentCard,
    nextCard = null;
let gameStarted,
    shuffle = false;

function startGame(deckNum) {
    deckSelected = deckNum;
    hideButtons();
    gameStarted = true;
    currentDeck = selectDeck();
    showNextButton();
    currentCard = Math.floor(Math.random() * currentDeck.length);
    changeDecks();
}
function showNextButton() {
    nextButton.style.display = "initial";
    nextButton.innerText = "Draw card";
}

function hideButtons() {
    normalDeckButton.style.display = "none";
    tacticalDeckButton.style.display = "none";
}

function selectDeck() {
    console.log("Select deck");
    let ret = [];
    switch (deckSelected) {
        case 1:
            ret = [...deck1];
            break;
        case 2:
            ret = [...deck2];
            break;
    }
    return ret;
}

function showCard() {
    if (gameStarted && !shuffle) {
        selectedCard.style.display = "initial";
        if (currentDeck.length == 0) {
        }
        if (currentDeck.length > 0) {
            if (currentCard >= 0) {
                console.log(currentCard);
                let currentItem = getCard(currentDeck[currentCard].id);
                console.log(currentItem.front);
                currentDeck.splice(currentCard, 1);
                selectedCard.setAttribute("src", `${currentItem.front}`);
            }

            if (currentDeck.length == 0) {
                deck.style.display = "none";
                shuffleDeck();
            } else {
                let nextCard = Math.floor(Math.random() * currentDeck.length);
                let nextItem = getCard(currentDeck[nextCard].id);
                deck.setAttribute("src", `${nextItem.back}`);
                currentCard = nextCard;
            }
        }
    } else {
        //Shuffleo deck
        shuffle = false;
        console.log("shuffle");
        currentDeck = selectDeck();
        //deck.style.display = "initial";
        currentCard = Math.floor(Math.random() * currentDeck.length);
        selectedCard.style.display = "none";
        let nextItem = getCard(currentDeck[currentCard].id);
        deck.setAttribute("src", `${nextItem.back}`);
        deck.style.display = "initial";
        deck.style.display = "initial";
        showNextButton();
    }
}

function getCard(i) {
    const path = `./patchwork/decks/${deckSelected}/`;
    let img = {};
    if (deckSelected == 1) {
        img.back = `${path}back.png`;
        img.front = `${path}f${i}.png`;
    } else {
        img.back = `${path}b${i}.png`;
        img.front = `${path}f${i}.png`;
    }

    return img;
}

function changeDecks() {
    if (deckSelected == 2) {
        let nextItem = getCard(currentDeck[currentCard].id);
        deck.setAttribute("src", `${nextItem.back}`);
    }
}

function shuffleDeck() {
    nextButton.innerText = "Shuffle deck";
    shuffle = true;
}
