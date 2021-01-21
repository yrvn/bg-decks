require("normalize.css/normalize.css");
require("./../styles/index.scss");

const shortButton = document.getElementById("game-short");
const mediumButton = document.getElementById("game-medium");
const longButton = document.getElementById("game-long");
const newButton = document.getElementById("new-game");

shortButton.onclick = () => startGame(1);
mediumButton.onclick = () => startGame(2);
longButton.onclick = () => startGame(3);
newButton.onclick = () => startGame(0);

const startGame = (duration) => {
    console.log(duration);
}