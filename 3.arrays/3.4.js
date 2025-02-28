let array = [5,2,6,4,-1,3,1,7];
let min = 0 ;
let max = 0;

for(let elem of array){
    if(min > elem){
        min = elem;
    }
    if(max < elem){
        max = elem;
    }
}
console.log(`le minimum dans le tableau est ${min}`);
console.log(`le maximum dans le tableau est ${max}`);