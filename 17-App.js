//Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
//For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

function longestString(s,k){
  let longest = " ";
  for (let i = 0 ; i < s.length -k+1; i++){
    for (let j=s.length-1 ; j>i+k -1 ; j--){
      const sub = s.slice(i,j)
      const distinct= new Set(sub);
      //console.log(i,j,sub,distinct);
      if( distinct.size === k)
       if (sub.length > longest.length){
         longest = sub;
       }
    }
  }
  return longest;
  //return longest.length;
}

console.log(longestString('abcba', 2));