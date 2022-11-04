// Have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain only alphabetic characters and spaces, and return the first non-repeating character.

// For example: if str is “agettkgaeee” then your program should return k.

// The string will always contain at least one character and there will always be at least one non-repeating character.

// Examples
// Input: “abcdef”
// Output: a
// Input: “hello world hi hey”
// Output: w
function NonrepeatingCharacter(str){
let returnValue= ""
for (let i = 0; i < str.length; i++){
    let itemInTheLoop=str[i]
    let newStr=str.slice(0,i) + str.slice(i+1)
    //console.log(itemInTheLoop + "-" + newStr);
     if (returnValue === "" && newStr.indexOf(itemInTheLoop) === -1){
       returnValue=itemInTheLoop
    }
}
return returnValue === "" ? "none":returnValue
}

console.log(NonrepeatingCharacter("hello world hi hey"))