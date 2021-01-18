/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

__webpack_require__(0);
__webpack_require__(1);

var normalDeckButton = document.getElementById("normal-deck");
var tacticalDeckButton = document.getElementById("tactical-deck");
normalDeckButton.onclick = function () {
    return startGame(1);
};
tacticalDeckButton.onclick = function () {
    return startGame(2);
};

var nextButton = document.getElementById("next-card");
nextButton.onclick = function () {
    return showCard();
};

var selectedCard = document.getElementById("selectedCard");
var deck = document.getElementById("deck");

var deck1 = [].concat(_toConsumableArray(new Array(12))).map(function (x, i) {
    return { id: i + 1 };
});
var deck2 = [].concat(_toConsumableArray(new Array(12))).map(function (x, i) {
    return { id: i + 1 };
});

var currentDeck = [];
var deckSelected = void 0,
    currentCard = void 0,
    nextCard = null;
var gameStarted = void 0,
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
    var ret = [];
    switch (deckSelected) {
        case 1:
            ret = [].concat(_toConsumableArray(deck1));
            break;
        case 2:
            ret = [].concat(_toConsumableArray(deck2));
            break;
    }
    return ret;
}

function showCard() {
    if (gameStarted && !shuffle) {
        selectedCard.style.display = "initial";
        if (currentDeck.length == 0) {}
        if (currentDeck.length > 0) {
            if (currentCard >= 0) {
                console.log(currentCard);
                var currentItem = getCard(currentDeck[currentCard].id);
                console.log(currentItem.front);
                currentDeck.splice(currentCard, 1);
                selectedCard.setAttribute("src", "" + currentItem.front);
            }

            if (currentDeck.length == 0) {
                deck.style.display = "none";
                shuffleDeck();
            } else {
                var _nextCard = Math.floor(Math.random() * currentDeck.length);
                var nextItem = getCard(currentDeck[_nextCard].id);
                deck.setAttribute("src", "" + nextItem.back);
                currentCard = _nextCard;
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
        var _nextItem = getCard(currentDeck[currentCard].id);
        deck.setAttribute("src", "" + _nextItem.back);
        deck.style.display = "initial";
        deck.style.display = "initial";
        showNextButton();
    }
}

function getCard(i) {
    var path = "./patchwork/decks/" + deckSelected + "/";
    var img = {};
    if (deckSelected == 1) {
        img.back = path + "back.png";
        img.front = path + "f" + i + ".png";
    } else {
        img.back = path + "b" + i + ".png";
        img.front = path + "f" + i + ".png";
    }

    return img;
}

function changeDecks() {
    if (deckSelected == 2) {
        var nextItem = getCard(currentDeck[currentCard].id);
        deck.setAttribute("src", "" + nextItem.back);
    }
}

function shuffleDeck() {
    nextButton.innerText = "Shuffle deck";
    shuffle = true;
}

/***/ })
/******/ ]);
//# sourceMappingURL=patchwork.d86314856ee184184d25.js.map