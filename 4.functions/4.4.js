const prompt = require('prompt-sync')();

/**
 * 
 * @function randarr 
 * donne un nombre aléatoire entre 1 et 10 
 * 
 * @returns {number} un nombre aléatoire de la longueur d'un tableau
 */

function randarr(inputAr){
    return Math.floor(Math.random() * inputAr.length);
}

/**
 * @function pickLearner
 * 
 * @param {Array} inputAr 
 * @param {Number} n 
 * @returns une position dans une array
 */
function pickLearner(inputAr,n){
    if(n>=0 && n<=inputAr.length){
        return inputAr[n];
    }else{
        console.log ("ERROR");
    }
}

let form = ["Pierre","Jordan", "Manu","Antoine","Hugo","Kamal","Stephan","Liana","Arseniia","Valentin","Inna","Ars","Martin"];
let num = randarr(form);
let respond = pickLearner(form,num);

console.log(`la personne s'appelle ${respond}`);
//console.log(num);