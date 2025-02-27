const prompt = require('prompt-sync')();

let nDay = prompt("Entrez un chiffre de 1 à 7 pour connaitre le jour de la semaines. ");
let day = "";

switch(nDay){
    case "1":
        day = "Lundi"
        break;
    case "2":
        day = "Mardi"
        break;
    case "3":
        day = "Mercredi"
        break;
    case "4":
        day = "Jeudi"
        break;
    case "5":
        day = "Vendredi"
        break;
    case "6":
        day = "Samedi"
        break;
    case "7":
        day = "Dimanche"
        break;
    default:
        day = "ERROR"
    
}

if(day === "ERROR"){
    console.log("J'ai demandé un chiffire entre 1 et 7  :(")
}else{
    console.log(`${nDay} correspond à ${day}.`)
}