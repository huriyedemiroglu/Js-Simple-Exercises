

///  Number check algorithm  ///


const checkNums =(num1,num2)=>{
  if(num1 === num2){
    return -1
  }else if(num2 > num1){
    return true
  }else{
    return false
  }

}
console.log(checkNums(5,5));
console.log(checkNums(8,4));
console.log(checkNums(6,9));
