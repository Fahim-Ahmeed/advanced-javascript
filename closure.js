//if same function call from different variable/constant/let..then function output conunt by individual variable  
function doIt(){
    let numbers=0;
    return function(){
        numbers++;
        return numbers;
    }
}
const output=doIt();
console.log(output());
console.log(output());
console.log(output());


const result=doIt();
console.log(result());
console.log(result());
console.log(output());
