

//    There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.
//    For example, if N is 4, then there are 5 unique ways:  
   

   function word(n) {
    if(n <= 1){
        return 1
    }else{
        return word(n-1)+ word(n - 2)
    }
};
console.log(word(4));

