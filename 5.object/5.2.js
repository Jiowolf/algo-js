const prompt = require('prompt-sync')();

/**
 * 
 * @param {*} serieName le nom de la série
 * @param {*} productionYear l'année de production
 * @param {*} nameOfCastMember un array avec le nom de tout les menbre du cast
 * @returns l'obj tvSerie avec l'array randomiser 
 */

function askTvSerie(serieName, productionYear, nameOfCastMember){

    let tvSerie = {
        nameOfTheSerie: serieName,
        yearOfTheProduction: productionYear,
        allCastMember: nameOfCastMember
    };
    randomizeCast(tvSerie.allCastMember)
    let tvSerieJSON = JSON.stringify(tvSerie,null,2);
    return tvSerieJSON
}

/**
 * 
 * @returns permet a l'utilisateur de remplir les membre du cast avec autant de personne que voulue
 */

function castMemberPush(){
    let arrNameOfCastMember = [];
    let test ;
    while(test !== ""){
        test = prompt("Enter the name of the cast member of your favorite tv serie or just push enter to finish ");
        arrNameOfCastMember.push(test);
    }
    arrNameOfCastMember.pop();
    return arrNameOfCastMember
}

console.log(askTvSerie(
    prompt("Enter name of your favorite tv serie "),
    prompt("Enter the production year of your favorite tv serie "),
    castMemberPush()
    ));

    /**
     * 
     * @param {*} tvSerie appelle l'obj 
     * @returns donne l'array randomiser
     */

function randomizeCast(tvSerie){
    return tvSerie.sort(() => Math.random() - 0.5)
}