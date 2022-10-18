// Given a list of integers, write a function that the largest sum of non-adjacent numbers. Number can be 0 or negative.
// for example,
// [2,4,6,2,5] should return 13 , since we pick 2,6,5
// [5,1,1,5] should return 10 , since we pick 5 and 5

function maxWay(arr){
  
  if(!arr.length) return 0

  const way1=arr[0]+ maxWay(arr.slice(2))
  const way2= maxWay(arr.slice(1))
 
   return Math.max(way1,way2)
}
console.log(maxWay([2,4,6,2,5]));