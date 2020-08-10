const students = [
    {id:21, name: "Omor Sunny"},
    {id:31, name: "Mannnaa"},
    {id:41, name: "Moyouri"},
    {id:71, name: "Dipjol"}
];

//// show all names with for loop/////
// const nameArray = [];
// for(let i = 0; i < students.length; i++){
//     const element = students[i];
//     const name = element.name;
//     nameArray.push(name);
// }
// console.log(nameArray);

const names = students.map( s => s.name);
const ids = students.map( sId => sId.id);
const senior = students.filter(sId => sId.id > 40);
const seniorOne = students.find(sId => sId.id > 40);
// console.log(names);
// console.log(ids);
console.log(senior);
console.log(seniorOne);