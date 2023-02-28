
const arr =[7,7,12,98,15,8,106]
const secondGreatLow=()=>{
  //get rid of pair values
  let newArr=[]
  arr.forEach((num)=>{
    !newArr.includes(num) && newArr.push(num)
  })
  newArr.sort((a,b)=>a-b)

  if(newArr.length===2){
    return newArr[1]+"-"+newArr[0]
  }else{
    return newArr[1]+"-"+newArr[newArr.length-2]
  }
 
  return newArr
}
console.log(secondGreatLow(arr))