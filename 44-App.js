//ab Check
// Using the JS language, have the function abCheck(str)
// take the str parameter being passed and return the string true
// if the CharacterData a and b are seperated by exactly 3 places 
// anywhere in the string at least once

const abCheck=(str)=>{
 
//   const arr = str.toLowerCase().split('')
//   let control=[]
//  arr.forEach(i=>{
//   if(i==="a" && arr[arr.indexOf(i)+4]==="b"){
//     control.push(true)
//   }
// })
// return control.includes(true)? true :false

//search() method
return str.search("a...b")> -1 ? true : false

}
console.log(abCheck("lane borrowed"))