const prompt = require('prompt-sync')();

let n = Number (prompt("Entrez un chiffre "));
let loop = 0
let sum = 0

while(loop !== n){
    loop++
    let add = Number (prompt("Entrez un nouveau chiffre "));
    sum += add;
}

console.log(`la somme de tout vos nombre est ${sum}`);