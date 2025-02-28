
/**
 * permet de calculer la factoriel d'un nombre
 * 
 * @param {number} a c'est le début de ma factoriel, ce qui sera multiplier par tout les nombre avant
 * 
 * @returns donne ma donnée final de ma factoriel
 */

function factorial(a){
    if(a === 0) {
        return 1;
    }else{
        return a * factorial(a - 1);
    }
}

console.log(factorial(6));