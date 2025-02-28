
/**
 * 
 * @param {number} x1 1ère coordonée de X
 * @param {number} x2 2ème coordonée de x
 * @param {number} y1 1ère coordonée de y
 * @param {number} y2 2eme coordonée de y
 * 
 * @returns la distance entre 2 point sur un plan 2D
 */


function calcDistance(x1,x2,y1,y2){
    //d = √(x2−x1)2+(y2−y1)2
    return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
}

console.log(calcDistance(-2,2,2,-2));