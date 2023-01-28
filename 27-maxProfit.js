
////Buy and sell a stock////
///Note: That you cannot sell a stock before you buy one.///

const maxProfit = (prices)=>{
  let buy = Number.MAX_VALUE;
  let profit =0;
  prices.map(price => {
    buy = price < buy ? price : buy ;
    profit = price - buy > profit ? price - buy : profit;
  })
  return profit;

};
maxProfit([7,1,5,3,6,4])
maxProfit([7,6,4,3,1])