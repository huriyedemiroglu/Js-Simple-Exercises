//word count
// Using the js language, have the function wordCount(str)
// take the str string parameter being passed and 
// return the number of words the string contains
 
const workCount=(str)=>{
const count= str.trim().split(' ').length
return count
//  return str.trim().split(' ').length
 }
 console.log(workCount("Never eat shredded wheat"))