//Find the unique numbers in Array
///first solution////
let nums= [0,1,2,2,3,0,4,0,2]
let removeDuplicates = (nums) =>{
  let set = new Set(nums);
  console.log(Array.from(set));
}

removeDuplicates(nums);

////second solution/////
let nums= [0,1,2,2,3,0,4,0,2]
let filteredNums = nums.filter((e,i) => nums.indexOf(e)==i)
console.log(filteredNums );

/////third solution/////
let nums= [0,1,2,2,3,0,4,0,2]
let removeDuplicates = (nums) =>{
  
const obj = {};
let mappedNUms= nums.map(e => {
  if(!obj[e]){
    obj[e] = true;
  }
})
//Object.keys(obj);
}
removeDuplicates(nums);