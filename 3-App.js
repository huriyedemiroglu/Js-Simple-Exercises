/* example of string methods (split)*/
let sentence = prompt('Enter a sentence');
let letter = prompt('Enter a letter which you want to find the index')
for (let i = 0; i < sentence.split("").length; i++) {
     if (sentence[i]===letter){
     console.log(`The index of ${sentence[i]} is : ${i}`);
     }
}
/////////////////////////////////
// split-charAt
let sentences = ("If you fall asleep now, you will dream. If you study now, you will live your dream.")
let counter = 0
for (let i = 0; i< sentence.split("").length; i++) {
    if (sentence.charAt(i) === "m") counter++;{   
    } 
}
console.log(counter);




