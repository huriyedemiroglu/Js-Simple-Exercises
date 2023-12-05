// /*fibonacci*/ 0 1 1 2 3 5 8 13 21 34 55 89 144
///////////////////////////////////////////////

// function fibonacci(n){
//   let result=[0,1]
// for(let i= 2; i<=n; i++){
//   result.push(result[i-2]+result[i-1]);
// }
// return result;
// }
// console.log(fibonacci(10));


/////////////////////////////////////////////////


// recursive solution
// const fibonacci=(n)=> {
//   if (n == 0){
//     return 0
//   } else if (n==1){
//     return 1
//   } 
//   // f(6) = f(5) + f(4)
//   return fibonacci(n-1) + fibonacci(n-2)
// }
// console.log (fibonacci(7))


/////////////////////////////////////////////////////

// Dinamic solution with memoization

const fibonacci=(n,prev=[])=>{
  let result

  if( n == 0){
    return 0
  } else if (n == 1){
    return 1
  }
  result = fibonacci(n-1, prev) + fibonacci(n-2, prev)
  
  return result
}
console.log(fibonacci(6))
