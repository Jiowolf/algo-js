const prompt = require('prompt-sync')();

/**
 * Donner la longeur et la largeur d'un rectangle pour avoir sa surface 
 * 
 * @param {number} lenght - la longeur du rectangle
 * @param {number} width  - la largeur du rectangle
 * @returns {number} la multiplication de la largeur et longeur pour avoir la surface 
 * 
 * @example 
 * let surface = calcSurface(5,4);
 * console.log(surface); // output: 20
 */


function calcSurface (lenght,width){
    return lenght*width;
    
} 

let lenght = Number(prompt("Entrez la longeur de votre rectangle "));
let width = Number(prompt("Entrez la largeur de votre rectangle "));

console.log(`la surface du rectangle est de ${calcSurface(lenght,width)}`);
