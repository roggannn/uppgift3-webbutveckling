const reaktionbox = document.getElementById("reactionbox");
const reaktionstid = document.getElementById("reactiontext");

let startTid;
let slutTid;
let isWaiting = true;

reaktionbox.addEventListener('click', () => {
    if (isWaiting) {
        return;
    }

    slutTid = new Date().getTime();
    const reaction = slutTid - startTid;

    reaktionstid.textContent = "Din reaktionstid är: " + reaction + " ms";

    
    isWaiting = true;
    reaktionstid.textContent = "Väntar på grön...";
})

/*
const reactionButton = document.getElementById("reactionButton");
const reactionTimeDisplay = document.getElementById("reactionTime");
let startTime, endTime;
let isWaiting = true;

reactionButton.addEventListener('click', () => {
    if (isWaiting) {
        // If the game is waiting for the user to click, ignore the click
        return;
    }
    
    // Calculate reaction time
    endTime = new Date().getTime();
    const reactionTime = endTime - startTime;
    
    // Display reaction time
    reactionTimeDisplay.textContent = `Your reaction time is: ${reactionTime} ms`;
    
    // Reset the game
    isWaiting = true;
    reactionButton.textContent = "Wait for it...";
    reactionButton.classList.remove("ready");
    
    // Restart the game after a delay
    setTimeout(startGame, Math.random() * 3000 + 1000); // Random delay between 1-4 seconds
});

// Function to start the game
function startGame() {
    reactionTimeDisplay.textContent = "";
    
    // Change the button text and color after a random delay
    setTimeout(() => {
        startTime = new Date().getTime(); // Record start time
        reactionButton.textContent = "Click Now!";
        reactionButton.classList.add("ready");
        isWaiting = false;
    }, Math.random() * 3000 + 1000); // Random delay between 1-4 seconds
}

// Start the game initially
startGame();
*/