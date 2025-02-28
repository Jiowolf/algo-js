const prompt = require('prompt-sync')();

/**
 * donne un nombre aléatoire entre 1 et 10 
 * 
 * @returns {number} un nombre aléatoire entre 1 et 10
 */


function rand10(){
    return Math.floor(Math.random() * 10) + 1;
}

/**
 * donne un nombre aléatoire entre 1 et 10 autant de fois que le désire l'utilisateur
 * 
 * @param {numbre} n  - nombre de fois qu'on veut utiliser la function rand10()
 */

function multiRand(n){
    for (let i = 0; i < n; i ++){
        console.log(rand10());
    }
}

multiRand(prompt(`Entrez le nombre de fois que vous voulez un chiffre aléatoire entre 1 et 10. `));