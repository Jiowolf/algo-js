const prompt = require('prompt-sync')();

let min = Number (prompt ("Entrez une valeur minimale. "));
let max = Number (prompt ("Entrez une valeur maximale. "));
let current = Number (prompt ("Entrez une valeur entre votre valeur minimale et maximale. "));

if(isNaN(min) || isNaN(max) || isNaN(current)){
    console.log("toutes les valeur en numbre Svp")
}else if ((current < max) && (current > min)){
    console.log(`${current} se trouve bien entre ${min} et ${max}`);
}else{
    if(max <= min){
        console.log(`Il semblerait que votre valeur minimale soit plus grande ou égale que votre valeur maximale. Ce qui ne fait pas de sens`);
    }else{
        console.log(`Il y a une erreur, soit la valeur qui doit se trouver entre les deux autres est egale a une de celle-ci, soit elle ne se trouve pas entre les deux.`);
    }
}