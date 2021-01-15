import { compareNumbers } from './utils.js';
let randomNumber = Math.ceil(Math.random() * 20);
const userInput = document.getElementById('user-input');
const feedbackSpace = document.getElementById('feedback-space');
const guessButton = document.getElementById('guess-button');
const remainingGuesses = document.getElementById('remaining-guesses');
const resetButton = document.getElementById('reset-button');
// console.log(userInput, guessButton, remainingGuesses, feedbackSpace);

// initialize state

let guessTracker = 4;

// console.log(guessesRemainingLet, randomNumber);

guessButton.addEventListener('click', () => {
    // console.log('sup');
    guessTracker--;
    remainingGuesses.textContent = guessTracker;
    gameLogic();
});

resetButton.addEventListener('click', () => {
    resetGame();
} )

function gameLogic(){
    const value = userInput.valueAsNumber;
    const comparisonResults = compareNumbers(value, randomNumber);

    if (comparisonResults === 0) {
        feedbackSpace.textContent = 'YOU GOT IT FAM!!';
    }

    if (comparisonResults === -1) {
        feedbackSpace.textContent = 'Too Low Guess AGAIN';
    }

    if (comparisonResults === 1) {
        feedbackSpace.textContent = 'Too High Guess AGAIN';
    }

    if (guessTracker === 0) {
        feedbackSpace.textContent = 'Sorry, Out of Attempts';
        guessButton.style.visibility = 'hidden';
    }
}

function resetGame(){
    userInput.value = '';
    guessTracker = 4;
    remainingGuesses.textContent = guessTracker;
    feedbackSpace.style.visibility = 'hidden';
    guessButton.style.visibility = 'visible';
}

// set event listeners to update state and DOM