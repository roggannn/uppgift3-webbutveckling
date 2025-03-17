const reaktionbox = document.getElementById("reactionbox");


let startTid;
let slutTid;
let isWaiting = true;
let rounds = 0;

reaktionbox.addEventListener('click', () => {
    if (isWaiting) {
        console.log("Caught by isWaiting check");
        
        return;
        
    }
    else if (rounds => 4){
        
    }

    console.log("Kom förbi isWaiting check.");
    slutTid = new Date().getTime();
    const reaction = slutTid - startTid;

    document.getElementById("test2").innerText = "Reaktionstid: " + reaction + " ms";
    console.log("Reaktionstid = " + reaction + " ms");
    localStorage.setItem(rounds + "round", reaction);
    isWaiting = true;
    rounds+=1;
    reaktionbox.textContent = "Väntar på grön...";
    console.log("Väntar nu på grön...");
    reaktionbox.classList.remove("ready");

    setTimeout(start, Math.random() * 7000 + 1000);
    console.log("Timeout.");
})

function start(){
    reaktionbox.onclick = "";
    document.getElementById("test2").innerText = "";
   
    console.log("efter 32")
    reaktionbox.textContent = "Väntar på grön...";
    setTimeout(() => {
        startTid = new Date().getTime();
        reaktionbox.textContent = "Klicka nu!";
        reaktionbox.classList.add("ready");
        isWaiting = false;
    }, Math.random() * 7000 + 1000);
}












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