let numbers=[2,3,45,6,21,34,21,54,71,53];
for(let n=0;n<numbers.length;n++){
    let count=numbers[n];
    // if(count%2==0){
    //     continue;
    // }
    if(count%2!==0){
        break;
    }
  
  
    console.log(count);
}
