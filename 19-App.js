// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
// You can assume that the messages are decodable. For example, '001' is not allowed.

function countDigitDecoding(digits){
  let n = digits.length;
  if (n == 0 || n == 1) {return 1};
  if (digits[0] == "0") {return `"${digits}" is not allowed`;};
  let count = 0;
  if (+digits[n - 1] > 0){ count = countDigitDecoding(digits.slice(0, n-1));};
  if (digits[n - 2] == "1" || (digits[n - 2] == '2'&& digits[n - 1] < '7')) {
      count += countDigitDecoding(digits.slice(0, n-2))
  }
  return count;
}


console.log(countDigitDecoding("111"));     //? Output: 3 ==> aaa, ak, ka
console.log(countDigitDecoding("2222"));    //? Output: 5 ==> bbbb, bbv, bvb, vbb, vv 
console.log(countDigitDecoding("33333"));   //? Output: 1 ==> ccccc
console.log(countDigitDecoding("001"));     //? Output: "001" is not allowed