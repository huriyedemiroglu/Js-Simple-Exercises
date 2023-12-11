// for example: if str is 4546793 the output sholud be 454*67-9-3.
// Don't count zero as an odd or even number
 const dashInsert2 = (num)=>{
   const numStr = num.toString()
   let newStr = ""
 
   for(let i = 0 ; i < numStr.length ; i++){
    if(numStr[i]!=0 && numStr[i+1] !=0 && numStr[i] % 2 === 0 && numStr[i+1] %2 === 0 &&
      (i+1) < numStr.length){
        newStr += numStr[i] + "*"
      }else if(numStr[i]!=0 && numStr[i+1] !=0 && numStr[i] % 2 !=0 && numStr[i+1] %2 !=0 &&
        (i+1) < numStr.length){
          newStr += numStr[i] + "-"
        } else{
          newStr += numStr[i]

        }
   }
 return newStr
  }
  console.log(dashInsert2(4546793))
  console.log(dashInsert2(123555888))