///factorial Question///
////not= recursive function used////

function factorial(n){
  if (n===1) return 1;
  let result= n * factorial(n-1);
  return result;
}
console.log(factorial(5));

