// this way we get undefined value
// let result; if declare without value variable then print undefined
// 1
 function add(num1, num2){
    console.log(num1 + num2);
    return;
} 

// 2
 function add(num1,num2){
    console.log(num1, num2);
} 
var result = add(4);
console.log(result);


// 3
 const student = {
    name: 'khan',
    roll: 1010,
    address: 'dhaka',
    nationality: {
        BD: 'BANGLADESHI',
        USA: 'AMERICAN'
    }
}
const {salary} = student.nationality;
console.log(salary);

 // 4
 let fun = undefined;
console.log(fun); 

// 5
let ages = [12,34,65,76];
console.log(ages[6]);