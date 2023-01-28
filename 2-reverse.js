/*reverse*/
let word = prompt(" ");
function reversing(word) {
  return word.split("").reverse().join("");
}
console.log(reversing(word));


function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");
//////////////////////////////////

let str = 'Hello Clarusway'
let liste = ['h','e','l','l','o'];
function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse(str)); 
console.log(liste.reverse());
console.log(str.split("").reverse().join(""));
/////////////////////////////////////////

function reverseString(str) {
  if (str === ""){
    return "";
  }else{
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}
reverseString("hello");
///////////////////////////////

/*Conditional (Ternary) Operator:*/
function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");
