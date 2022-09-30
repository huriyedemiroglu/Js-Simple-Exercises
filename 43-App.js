//Find missing number
//3,4,-1,1
//1,2,0
function findMissing(arr){
 // arr.sort((a, b)=> a - b)
  //console.log(arr);
for (let i=1; i<= arr.length; i++)
  if(!arr.includes(i)) return i

return arr.length+1
}
console.log(findMissing([3,5,2,1]))