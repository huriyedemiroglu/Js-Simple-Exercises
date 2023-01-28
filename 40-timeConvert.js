///  Time Convert ///
const timeConvert =(num)=>{
  // const hour = Math.floor(num / 60)
  // const min = num % 60
  //   return hour + ":" + min


 // Template Literals
 return `${Math.floor(num / 60)}:${num % 60}`
}
console.log(timeConvert(63));
console.log(timeConvert(123));
console.log(timeConvert(100));