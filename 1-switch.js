/*switch case*/

num1 = +prompt("Enter the first number :");
operator = prompt("Enter an operator: ")
num2 = +prompt("Enter the second number :");
switch (operator) {
    case "+":
        result = num1 + num2;        
        break;
    case "-":
        result = num1 - num2;        
        break;
    case "*":
        result = num1 * num2;        
        break;
    case "/":
        if(num2 === 0){result ="Zero Division Error"}
        else{
            result = num1 / num2;
        }                
        break;
    default:
        result = "Try again!"
        break;
}
console.log(result);