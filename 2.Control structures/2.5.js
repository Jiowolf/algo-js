const prompt = require('prompt-sync')();

let univers = 0;

while(univers !== 42){
    univers = Number(prompt("quel est votre chiffre préféré? "));
    if(univers !== 42){
        console.log("Are you sure about that?");
    }
}