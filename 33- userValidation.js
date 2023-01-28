
//User validation check

// Rules
// 1.The username is between 4 and 25 characters.
// 2.It must start with a letter.
// 3.It can only contain letters,numbers, and the underscore characters.
// 4.It cannot end with a underscore character.

// If username is valid then your program should return the string true, otherwise return the string false.

// AND Operator
//length property
// Regular expression
//.charAt() .slice() .test()

const userValidation=(str)=>{

   if 
     (str.length >=4 && str.length <= 25 &&
     (/[a-zA-Z]/).test(str.slice(0,1))&&  //str.chartAt(0)
     (/^\w+$/).test(str)&&
     (/[a-zA-Z0-9]/).test(str.slice(-1)) // str.charAt(str.length-1)
     ){
      return true;
     }else{
      return false;
  };
};
console.log(userValidation("u_hello_world123"));