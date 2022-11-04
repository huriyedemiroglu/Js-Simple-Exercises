///Palindrome
//the string is the same forward as it is backward
//punctuation and numbers will not be part of the string.
//for example: "racecar" is also "racecar" backwards
 const isPalindrome=(str)=>{

  const newStr =str.replace(/ /g,"").toLowerCase()
    return  newStr.split('').reverse().join('') === newStr ? true:false
 }
 console.log(isPalindrome('racecar'))