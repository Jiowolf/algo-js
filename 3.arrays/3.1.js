let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];
let addition1 = 0;
let addition2 = 0;

for(let elem of array1){
    addition1 = elem + addition1;
}

for(let elem of array2){
    addition2 = elem + addition2;
}

console.log(addition1);
console.log(addition2);