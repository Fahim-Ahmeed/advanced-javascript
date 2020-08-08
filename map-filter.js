let numbers=[11,22,45,21,54,7];
let convertNumbers=[];
for(let i=0;i<numbers.length;i++){
    const content=numbers[i];
    let square=content*content;
    convertNumbers.push(square);

}


let output=numbers.map(element=>element*element);
console.log(output);



let output=numbers.filter(x=>x%2==0);
console.log(output);
let findValue=numbers.find(x=>x%2==0);
console.log(findValue);