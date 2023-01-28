///// find number of digits///////

let number = 25674
let total = 0

while(number != 0){
  number = Math.floor(number/10)
  total++
}
console.log(`number of digits , ${total}`);