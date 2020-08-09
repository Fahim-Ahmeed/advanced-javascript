let numbers=[2,3,45,6,21,34,21,54,71,53];
//when a array slice ...slice work index to index number ..but main array does not change
let failed=numbers.slice(3,6);
//when a array splice...splice work index to how many element want to delete....and splice can inject element 
let diff=numbers.splice(2,2,77,66,30,42);
//when use join in a array...join can add all element in one string
let reJoin=numbers.join(' ');
console.log(reJoin);
console.log(numbers);
console.log(diff)
console.log(failed);
