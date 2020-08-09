//if value decleared by let or constant....this value cannot read from anywhere only values block or child block can read this value
//suppose 
var bonus=12;
function add(num1,num2){
    var sum=num1+num2+bonus;
    if(sum>20){
        var felling='yahoo';
    }
    // console.log(felling);
    
    // console.log(day);
    // let day='friday';
    console.log(sum);
    return sum;
} 
let output=add(5,7);


console.log(bonus);
console.log(output);