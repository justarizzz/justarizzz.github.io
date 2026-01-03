let score = 0;
const scoreDisplay = document.getElementById('score');
const clickImage = document.getElementById('click-image');

// Function to handle a click event
function handleClick() {
    score++;
    scoreDisplay.textContent = score;

    // Add visual feedback: make the image shrink briefly
    clickImage.classList.add('clicked');
    
    // Remove the 'clicked' class after a short delay to allow it to return to normal size
    setTimeout(() => {
        clickImage.classList.remove('clicked');
    }, 100); 
}

// Function to reset the game
function resetGame() {
    score = 0;
    scoreDisplay.textContent = score;
}

// Add an event listener to the image
clickImage.addEventListener('click', handleClick);
