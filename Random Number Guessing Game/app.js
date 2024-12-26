
 function* gameStateManager() {
    while (true) {
        
        const targetNumber = Math.floor(Math.random() * 5) + 1;
        let lives = 3;
        
        // Game loop
        while (lives > 0) {
        
            const guess = yield {
                lives,
                message: `Guess a number between 1 and 5!`,
                gameOver: false
            };
            
            // Check guess is correct or wrong
            if (guess === targetNumber) {
                yield {
                    lives,
                    message: `🎉 Congratulations! ${targetNumber} was correct!`,
                    gameOver: true
                };
                break;
            } else {
                lives--;
                if (lives === 0) {
                    yield {
                        lives,
                        message: `😞 Game Over! The number was ${targetNumber}`,
                        gameOver: true
                    };
                }
            }
        }
    }
}


let game = gameStateManager();
let currentState = game.next().value;


function handleGuess(number) {
    currentState = game.next(number).value;
    updateUI();
    
    if (currentState.gameOver) {
        disableButtons();
        document.getElementById('restart').style.display = 'block';
    }
}


function updateUI() {
    document.getElementById('lives').textContent = '❤️'.repeat(currentState.lives);
    document.getElementById('message').textContent = currentState.message;
}


function disableButtons() {
    const buttons = document.querySelectorAll('#buttons button');
    buttons.forEach(button => button.disabled = true);
}

function enableButtons() {
    const buttons = document.querySelectorAll('#buttons button');
    buttons.forEach(button => button.disabled = false);
}

// Restart the game when clicked on play again
function restartGame() {
    game = gameStateManager();
    currentState = game.next().value;
    enableButtons();
    updateUI();
    document.getElementById('restart').style.display = 'none';
}