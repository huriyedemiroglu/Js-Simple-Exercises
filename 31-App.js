// Given a list of non-negative integers repsesenting the amount of money of each house,determine the maximum amount of money you can rob tonight without alerting the police

// Example
// input: nums=[2,7,9,3,1] 
// Output: 4
// Explanation: Rob house 1(money=2),rob house 3(money=9) and rob house 5(money=1).
// Total amount you can rb = 2+9+1= 12


// const rob=(nums)=>{}
 function rob(nums){
   let profit= 0;
   let prevProvit= 0;
   nums.map(num=>{
       let temp =profit;
     profit= prevProvit +num > profit ? prevProvit+num : profit
           prevProvit= temp;
    return profit;     
   })
  return profit;
 };
 console.log(rob([2,7,9,9,1]));