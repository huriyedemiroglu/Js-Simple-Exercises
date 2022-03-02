// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.

function firstMissingPositive(array){
  let arrayPositive = []
  let missingNumbers = []

  for (let i = 0; i < array.length; i++) {
      if(array[i] > 0){
          arrayPositive.push(array[i])
          arrayPositive.sort((a,b) => a-b)
      }
  }
  // let min = arrayPositive[0];
  let max = arrayPositive[(arrayPositive.length-1)];
  
  for (let i = 1; i <=(max+1); i++) {
      
      if(!(arrayPositive.includes(i))){
          
          missingNumbers.push(i)
      }

  }
  return missingNumbers[0]


array = [-1,1,3,4]
console.log(firstMissingPositive(array)); // 2

/////second solutoin///////

let array= [3,4,1]
let missingNumber=0

array= array.filter(num => num > 0).sort((a,b)=>a-b);
for(let i=1; i<array.length; i++){
  if(array[i]-array[i-1] !==1){
      missingNumber=array[i]-1 ;
  }
}
if(!missingNumber){
  missingNumber= array[0] !==1 ? array[0]-1 : array[array.length -1]+1
}
console.log(missingNumber);



/////////////////////


     