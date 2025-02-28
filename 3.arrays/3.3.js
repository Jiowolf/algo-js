let array1 = [1, 2, 3, 4, 5];
let array2 = [];
let array3 = Array.from(array1);;


for(let elem of array1){
    array2.push(array1[elem-1]);
}
console.log(array2);
console.log(array3);
