
/**
 * donne un nombre aléatoire entre 1 et 10 
 * 
 * @returns {number} un nombre aléatoire entre 1 et 10
 */


function rand10(){
    return Math.floor(Math.random() * 10) + 1;
}

console.log(rand10());