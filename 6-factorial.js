// factorial//

// const firstFactorial =(num)=>{
//   let factorial =1
//   for (let i = 2; i<=num; i++){
//     factorial *= i

//   }
//   return factorial
// }
// console.log(firstFactorial(5));

//solution with recursive function

function factorial(number){
  if (number == 1) return 1
   return number * factorial (number-1)
}
console.log(factorial(5))