const students=[
    {id:1,name:'shila'},
    {id:2,name:'mutmainna munira'},
    {id:3,name:'amaya munira'},
    {id:4,name:'nurjahan'},
];
const sName=[];
//by using loop
for( let i=0;i<students.length;i++){
    let count=students[i]
    sName.push(count.name);

}
console.log(sName);

//by using map
const name=students.map(students=>students.name);
const ids=students.map(id=>id.id);
const moreFive=students.filter(x=>x.name.length>5);
console.log(moreFive);