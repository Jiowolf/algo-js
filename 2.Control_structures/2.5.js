const prompt = require('prompt-sync')();

let univers = "";

while(univers !== "42"){
    univers = prompt("quel est votre chiffre préféré? ");
    if(univers !== "42"){
        console.log("Are you sure about that?");
    }
}