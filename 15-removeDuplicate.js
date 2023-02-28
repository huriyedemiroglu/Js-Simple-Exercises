//Find the unique numbers in Array
///first solution////
let num= [0,1,2,2,3,0,4,0,2,5]
let removeDuplicate = (num) =>{
  let set = new Set(num);
  console.log(Array.from(set));
}

console.log(removeDuplicate(num));

////second solution/////
// let nums= [0,1,2,2,3,0,4,0,2]
// let filteredNums = nums.filter((e,i) => nums.indexOf(e)==i)
// console.log(filteredNums );

// /////third solution/////
// let numbers= [0,1,2,2,3,0,4,0,2]
// let removeDuplicates = (numbers) =>{
  
// const obj = {};
// let mappedNUms= numbers.map(e => {
//   if(!obj[e]){
//     obj[e] = true;
//   }
// })
// //Object.keys(obj);
// }
// removeDuplicates(numbers);