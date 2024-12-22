 // Generator function to manage game state
 function* gameStateManager() {
    while (true) {
        // Generate new target number and reset lives
        const targetNumber = Math.floor(Math.random() * 5) + 1;
        let lives = 3;
        
        // Game loop
        while (lives > 0) {
            // Yield current game state and wait for next guess
            const guess = yield {
                lives,
                message: `Guess a number between 1 and 5!`,
                gameOver: false
            };
            
            // Check guess
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

// Initialize game
let game = gameStateManager();
let currentState = game.next().value;

// Handle player's guess
function handleGuess(number) {
    currentState = game.next(number).value;
    updateUI();
    
    if (currentState.gameOver) {
        disableButtons();
        document.getElementById('restart').style.display = 'block';
    }
}

// Update the UI based on current state
function updateUI() {
    document.getElementById('lives').textContent = '❤️'.repeat(currentState.lives);
    document.getElementById('message').textContent = currentState.message;
}

// Disable number buttons
function disableButtons() {
    const buttons = document.querySelectorAll('#buttons button');
    buttons.forEach(button => button.disabled = true);
}

// Enable number buttons
function enableButtons() {
    const buttons = document.querySelectorAll('#buttons button');
    buttons.forEach(button => button.disabled = false);
}

// Restart the game
function restartGame() {
    game = gameStateManager();
    currentState = game.next().value;
    enableButtons();
    updateUI();
    document.getElementById('restart').style.display = 'none';
}