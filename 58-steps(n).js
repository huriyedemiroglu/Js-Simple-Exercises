// This is an interview question asked by Amazon.

// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1  
// 2, 1, 1  
// 1, 2, 1  
// 1, 1, 2  
// 2, 2  
function steps(n) {
  console.log("pass")
  if (n<=1) return 1
  const oneStep = steps(n-1)
  const twoStep = steps(n-2)
  return oneStep + twoStep
  }
console.log(steps(6))

// function stepsGlobal(n) {
//   const options = {}
// function steps(n) {
//   console.log(options)
//   if (n<=1) return 1

//   if (options[n]) return options[n]
//   else {
//   const oneStep = steps(n-1)
//   const twoStep = steps(n-2)
//   options[n] = oneStep + twoStep
//   return oneStep + twoStep
//   }
// }
  
//   return steps(n)
// }
// console.log(stepsGlobal(6))
