//////Discount/////
///it removes the next element from the array and creates a new array//

let finalPrices = (prices) => {
  return prices.map((x,i)=>{
    for(let j=i+1; j<prices.length; j++){
      if (prices[i] >= prices[j]){
        prices[i] = prices[i]-prices[j]
        break;
      }

    }
       return prices[i]
  })
};
console.log(finalPrices([8,4,6,2,3]));