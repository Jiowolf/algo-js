const prompt = require('prompt-sync')();

let userAge = Number (prompt("entrer votre age. "));


if(isNaN(userAge)){
    console.log("en chiffre l'age svp")
}else if (userAge>=18){
    console.log("You are an adult");
}else{
    console.log("You are not yet an adult");
};