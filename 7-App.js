/////////Palindrome Number//////////////
    //first solution
    let isPalindrome = function(x){ 
      let reversed = x.toString().split('').reverse().join('')
      return(x.toString()===reversed)
  };
  console.log(isPalindrome(121));
  
  //second solution
  function isPalindrome(x){
      if (x<0) return false;
      let reverse = 0
       for(let i=x; i>=1; i= Math.floor(i/10))
       reverse=reverse*10 +i%10;
       return reverse === x;
   };
   console.log(isPalindrome(121));
  
   //////////String Palindrome///////////////////////
  
   var isPalindrome = function(s){
       let clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase ()      //old,new
       charArray =[...clean].reverse().join('');
       return clean === charArray ? true : false; //ternary operator
  
      // if(clean === charArray){
      //      return true;
      //  }else {
      //      return false;
      //  }
   
     };
     console.log(isPalindrome('Madam'));
     console.log(isPalindrome('madams'));
     console.log(isPalindrome('MadaM'));
       
  
  /////////////
  