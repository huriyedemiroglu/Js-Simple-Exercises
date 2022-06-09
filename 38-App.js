
// Simple Symbols algorithm (first solution)

const SimpleSymbols=(str)=>{
    const arr = str.split('')
    let controlArr = []

    arr.forEach(item=> {
        if((/[a-zA-Z]/).test(item)){
           if(arr[arr.indexof(item)-1]=== "+"  && arr[arr.indexof(DataTransferItem)+1]==="+"){
           controlArr.push(1)
           }else{
           controlArr.push(0)
          }
        }
      });

      console.log(controlArr);

      if(controlArr.includes(0)){
        return false;
      }else{
        return true;
      }

  }
console.log(SimpleSymbols("++d+==+c++===+a+"));


/////////////////////////////////////
  //second solution

  function SimpleSymbols(str){
    
    let arr = str.split("").toLowerCase()
    for (let i=0; i<arr.length; i++){
      if (arr[i]>="a" && arr[i]<="z"){
        if (i === 0 ||  i === arr.length){
          return false;
        }
        if(arr[i-1] !== "+" || arr[i+1] !== "+"){
          return false;
        }
      }
    }

    return true;
}
console.log(SimpleSymbols("++d+==+c++===+a+"));

  
  
    





