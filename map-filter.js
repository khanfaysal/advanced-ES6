const numbers = [2,45,7,4,9];
/* const output = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result =element * element;
    output.push(result)
}
console.log(output); 
function square(element){
    return element * element;
}
/* const square = element => element * element;
const square = x => x * x;
const result = numbers.map(function(element){
    return element * element;
}); 
//map practice
/* const result = numbers.map(x => x * x);
console.log(result); */

 const result = numbers.filter(x => x < 5);
// const result = numbers.find(x => x > 5);
console.log(result);

