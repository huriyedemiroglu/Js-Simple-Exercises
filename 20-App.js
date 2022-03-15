// Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).
// For example, given the string "([])", you should return true.
// Given the string "([)]" or "((()", you should return false.
//////////  first  solution //////
function validParanthesis(str){
  for (let i= 0; i<str.length; i++){
    if(str.includes("()") || str.includes("[]")||str.includes("{}")){
      str = str.replace("()", "");
      str = str.replace("[]", "");
      str = str.replace("{}", "");
      console.log(str);
    }
  }
  return str == "" ? true : false;
}

console.log(validParanthesis("([{({})}]({}))")); 
console.log(validParanthesis("((()"));           
console.log(validParanthesis("([)]"));           
console.log(validParanthesis("([])"));

//////  second solution //////
function validParanthesis(str){
    while(str.includes("()") || str.includes("[]")||str.includes("{}")){
           str = str.replace("()", "").replace("[]", "").replace("{}", "");;
           
      }
    return str == "" ? true : false;     //return str == ""
}

console.log(validParanthesis("([{({})}]({}))")); 
console.log(validParanthesis("((()"));           
console.log(validParanthesis("([)]"));           
console.log(validParanthesis("([])"));


