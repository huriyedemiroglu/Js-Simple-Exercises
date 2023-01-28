// Vowel Count
// Using the JS language, have the funct VowelCount(str)
// take the str string parameter being passed and return the Number of vowels the string contains

const vowelCount=(str)=>{
//const arr = str.split('') == [...str]
  let i = 0;
   [...str].forEach((letter)=>{
       if((/[a,e,i,o,u,A,E,I,O,U]/).test(letter)){
            i = i+1
       }
 })

 return i

}
console.log(vowelCount("All cows eat grass"));