const words = ["apple", "bananas", "strawberries", "cherries", "apricots", "plums"]; //string of words
let word = words[Math.floor(Math.random() * words.length)]; //choosing a random word
let hiddenWord = [];
let lives = 7;

window.onload = function() { //mark the chosen word with an underline and display it
    for (let i = 0; i < word.length; ++i) { 
        hiddenWord[i] = "_";
    }   
    document.getElementById("word").innerHTML = hiddenWord.join(" ");
}

function messageDisplay(status) { //we display the corresponding message
    let message = document.getElementById("message");
    message.innerText = "";
    if (status === "notLetter") {
        message.innerText = "Enter a letter!";
    } else if (status === "win") {
        message.innerText = "You win!";
    } else {
        message.innerText = `You lose! The word was "${word}".`;
    }
}

function reload() { //start new game
    location.reload();
}

function disabled() { //we disable the input and the send button
    document.getElementById("letter").disabled = true;
    document.getElementById("sendBtn").disabled = true;
}

function guessLetters () { //we check if the entered character is a letter and if it is found in the word
    let letter = document.getElementById("letter").value.toLowerCase();
    document.getElementById("letter").value = "";
    message.innerText = "";
    if (!/[a-z]/.test(letter)) {
        messageDisplay("notLetter");
        return;
    }
    let correctLetter = false; 
    for (let i = 0; i < word.length; ++i) {
        if (word[i] === letter) {
            hiddenWord[i] = letter;
            correctLetter = true;
        }
    }
    if (correctLetter) { //if the letter is found in the word, we add it
        document.getElementById("word").innerHTML = hiddenWord.join(" ");
        if (!hiddenWord.includes("_")) {
            messageDisplay("win");
            disabled();
        }
    } else { //if the letter is not found in the word, we subtract the number of lives
        lives--;
        document.getElementById("lives").innerHTML = `Lives: ${lives}`;
        if (lives === 0) {
            messageDisplay("lose");
            disabled();
        }
    }
}