//////  prime number  //////
const number = 17
let counter = 0
for (let i = 2; i < number; i++) {
    if(number % i == 0){
       counter++;
        break;
    }
 }
 console.log(counter > 0 ? "Not a prime number": "Prime number");