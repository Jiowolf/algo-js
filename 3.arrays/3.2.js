let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];
let mid1 = 0;
let mid2 = 0;


for(let elem1 of array1){
    mid1 = elem1+ mid1;
}

for(let elem2 of array2){
    mid2 = elem2 + mid2;
}

console.log(mid1/array1.length);
console.log(mid2/array2.length);