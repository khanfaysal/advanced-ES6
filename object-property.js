const students = [
    {id: 1, name: 'jon Dalton',},
    {id: 2, name: 'rino khan'},
    {id: 3, name: 'bino khan'},
    {id: 4, name: 'aysa khan'},
    
];
/* const studentArray = [];
for ( let i = 0; i < students.length; i++){
    const element = students[i];
    const result = element;
    studentsArray.push(result);

}
console.log(studentArray); */
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const biggerOne = students.find(s => s.id>2);
console.log(ids,biggerOne);