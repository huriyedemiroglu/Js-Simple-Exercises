// Assume that we have an array of positive integers from m to n which includes all odd numbers from m to n except one
// Write a function that finds the missing odd number in the list


function searchOdd(arr) {
  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);
  let result;

  for (let i = minValue; i <= maxValue; i++) {
      if(i % 2 !== 0 && !arr.includes(i)){
          result = i
      }else {
          console.log(" Odd numbers in the array are not missing .")
      }
      
  }
  return result
};
console.log(searchOd([1,3,5,7,9,13]));