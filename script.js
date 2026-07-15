let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#subt");
const guessField = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let previousGuesses = [];
let guessCount = 10;
let gameOver = false;

submit.addEventListener("click", function (e) {
    e.preventDefault();

    // Restart game
    if (gameOver) {
        resetGame();
        return;
    }

    let guess = Number(guessField.value);

    // Validate input
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }

    // Store guess
    previousGuesses.push(guess);
    guesses.innerHTML = previousGuesses.join(", ");

    // Decrease remaining guesses
    guessCount--;
    lastResult.innerHTML = guessCount;

    // Correct guess
    if (guess === randomNumber) {
        lowOrHi.innerHTML = "🎉 Congratulations! You guessed it!";
        endGame();
        return;
    }

    // Hint
    else if (guess < randomNumber) {
        lowOrHi.innerHTML = "📉 Too Low!";
    }
    else {
        lowOrHi.innerHTML = "📈 Too High!";
    }

    // Game over
    if (guessCount === 0) {
        lowOrHi.innerHTML = `❌ Game Over! The number was ${randomNumber}`;
        endGame();
    }

    guessField.value = "";
});

function endGame() {
    gameOver = true;

    guessField.disabled = true;

    submit.value = "Play Again";
}

function resetGame() {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    previousGuesses = [];
    guessCount = 10;
    gameOver = false;

    guesses.innerHTML = "";
    lastResult.innerHTML = "10";
    lowOrHi.innerHTML = "";

    guessField.value = "";
    guessField.disabled = false;

    submit.value = "Submit Guess";
}