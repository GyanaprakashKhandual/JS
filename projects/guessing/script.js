const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guessess');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const newGameBtn = document.querySelector('#newGameBtn');

const alertModal = document.querySelector('#alertModal');
const alertOk = document.querySelector('#alertOk');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

// Custom Alert Function
const showAlert = (title, message) => {
    document.querySelector('#alertTitle').textContent = title;
    document.querySelector('#alertMessage').textContent = message;
    alertModal.classList.add('show');
};

alertOk.addEventListener('click', () => {
    alertModal.classList.remove('show');
    userInput.focus();
});

alertModal.addEventListener('click', (e) => {
    if (e.target === alertModal) {
        alertModal.classList.remove('show');
        userInput.focus();
    }
});

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

const validateGuess = (guess) => {
    if (isNaN(guess)) {
        showAlert('Invalid Input', 'Please enter a valid number');
    }
    else if (guess < 1) {
        showAlert('Invalid Range', 'Please enter a number greater than 1');
    }
    else if (guess > 100) {
        showAlert('Invalid Range', 'Please enter a number less than 100');
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! The number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
        numGuess++;
    }
};

const checkGuess = (guess) => {
    if (guess === randomNumber) {
        displayMessage(`Congratulations! You guessed the number in ${numGuess - 1} attempts!`);
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage('Your guess is too low!');
    }
    else {
        displayMessage('Your guess is too high!');
    }
};

const displayMessage = (message) => {
    lowOrHi.innerHTML = `<strong>${message}</strong>`;
};

const displayGuess = (guess) => {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    remaining.innerHTML = `Guesses Remaining: ${11 - numGuess}`;
};

const endGame = () => {
    userInput.disabled = true;
    submit.disabled = true;
    newGameBtn.classList.add('show');
    playGame = false;
};

const newGame = () => {
    location.reload();
};

newGameBtn.addEventListener('click', newGame);