// // first method
// const arrayAddition=(arr)=>{
//  const newArr =[...arr]
// let sum = 0
// const maxValue = Math.max(...arr)
//   //ex console.log(Math.max(1,3,2))
//   // const array=[1,2,3] asagidaki gibi convert edilir
//   //console.log(Math.max(...array))
// newArr.splice(arr.indexOf(maxValue),1)
 
// for(let i = 0; i < newArr.length; i++){
//   sum +=newArr[i]
// }
// return maxValue === sum ? true : false
// }
// console.log(arrayAddition([4,6,23,10,1,3]))
//////////////////////////////////////////////////////////////////////////////////
// // second method //
const arrayAddition=(arr)=>{
  arr.sort((a,b)=>a-b)
  let sum=0
  const maxValue= arr[arr.length-1]
 
  for(let i = 0; i<arr.length-1; i++){
    sum += arr[i]
  }

return maxValue === sum ? true : false
}
console.log(arrayAddition([4,6,23,10,1,2]))
///////////////////////////////////////////////////////////////////////////////
// third method //
// const arrayAddition=(arr)=>{

//   const maxValue = Math.max(...arr)
//   let sum = 0

//   for(let i =0 ; arr.length ;i++){
//     sum += arr[i]
//   }
// return sum/2 === maxValue ? true : false

// }
// console.log(arrayAddition([4,6,23,10,1,2]))

