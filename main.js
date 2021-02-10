//Arary Visualizer

// HTML Variables
let outputEl = document.getElementById("output");
let Rbtn = document.getElementById("Random");
let Abtn = document.getElementById("All");

// Global Variable
let nicknames = ["Lightning", "The Rock", "Ace", "Fangs", "Nightnmare", "I-Desevre-A-Raise", "The Chief", "Darth", "Prime Time", "Bones", "DJ"];


function allNicknames () {
    let f = document.getElementById("First").value;
    let l = document.getElementById("Last").value;
    let outputStr = "";
    for (let i = 0; i < nicknames.length; i++) {
        outputStr += `<p>${f} "${nicknames[i]}" ${l}<p>`
    }
    outputEl.innerHTML = outputStr
}

function randomNickname () {
    let f = document.getElementById("First").value;
    let l = document.getElementById("Last").value;
    let outputStr = "";
    let c = Math.floor(Math.random() * nicknames.length);
    outputStr += `<p>${f} "${nicknames[c]}" ${l}<p>`
    outputEl.innerHTML = outputStr
}

// Key Event Stuff
Abtn.addEventListener("click", allNicknames);
Rbtn.addEventListener("click", randomNickname);
