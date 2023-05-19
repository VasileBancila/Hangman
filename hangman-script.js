const words = ["MERE", "BANANE", "CAPSUNI", "CIRESE", "CAISE", "PRUNE"];
let word = words[Math.floor(Math.random() * words.length)];
let hiddenWord = [];
let lettersGuessed = [];

for (let i = 0; i < word.length; ++i) {
    hiddenWord[i] = "_";
}

document.getElementById("word").innerHTML = hiddenWord.join(" ");