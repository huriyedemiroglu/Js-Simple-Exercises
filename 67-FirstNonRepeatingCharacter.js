const firstNonRepeating=(strng)=>{
  const str = strng.toLowerCase()
  let returnValue= ""
   
  for(let i = 0 ; i < str.length; i++){
    let ItemInLoop = str[i]
    let newStr = str.slice(0,i) +str.slice(i+1)
    if(returnValue === "" && newStr.indexOf(ItemInLoop)===-1){
       returnValue= ItemInLoop
    }
  }


  return returnValue === "" ? "none" :returnValue
}
console.log(firstNonRepeating('sTress'))