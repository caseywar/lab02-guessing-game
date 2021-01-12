import { compareNumbers } from './utils.js';

const userInput = document.getElementById("user-input");
const guessButton = document.getElementById("guess-button");
const remainingGuesses = document.getElementById("remaining-guesses");
const feedbackSpace = document.getElementById("feedback-space");
// console.log(userInput, guessButton, remainingGuesses, feedbackSpace);

// initialize state
let randomNumber = Math.ceil(Math.random() * 20);
let guessesRemainingLet = 4;
// console.log(guessesRemainingLet, randomNumber);

guessButton.addEventListener('click', () => {
    // console.log('sup');
    guessesRemainingLet--;


});


// set event listeners to update state and DOM