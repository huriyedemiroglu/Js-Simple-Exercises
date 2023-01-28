//         Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
let liste = [10, 15, 3, 7] ;
let number = 17;
let i,j;
for(i of liste) {
    for(j of liste){
        if(i + j == number && i > j){
            console.log(`${i} + ${j} = ${number}`);
        }
    }
}
