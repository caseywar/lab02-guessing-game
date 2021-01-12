import { compareNumbers } from './utils.js';

const userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess-button');
const remainingGuesses = document.getElementById('remaining-guesses');
const feedbackSpace = document.getElementById('feedback-space');
// console.log(userInput, guessButton, remainingGuesses, feedbackSpace);

// initialize state
let randomNumber = Math.ceil(Math.random() * 20);
let guessTracker = 4;

// console.log(guessesRemainingLet, randomNumber);

guessButton.addEventListener('click', () => {
    // console.log('sup');
    guessTracker--;
    remainingGuesses.textContent = guessTracker;

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
        guessButton.style.display = 'none'
    }

});


// set event listeners to update state and DOM