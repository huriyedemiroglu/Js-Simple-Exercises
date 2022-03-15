// Longest Substring Without Repeating Characters
// Level: Medium
// Given a string s, find the length of the longest substring without repeating characters.
        // Example 1:
        // Input: s = "abcabcbb"
        // Output: 3
        // Explanation: The answer is "abc", with the length of 3.
        // Example 2:
        // Input: s = "bbbbb"
        // Output: 1
        // Explanation: The answer is "b", with the length of 1.
        // Example 3:
        // Input: s = "pwwkew"
        // Output: 3
        // Explanation: The answer is "wke", with the length of 3.
        // Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
  
     //solution-1////
        let text = "abcabcbb";
let [longest, temp] = ["", ""]

for(let letter of text){
   while(temp.includes(letter)){
      temp = temp.slice(1);
   }
   temp += letter;
   (temp.length > longest.length) && (longest = temp)
}

console.log(longest)



///solution-2///

function longestPiece(s){
  let longest = s.slice(0,1);
  for (let i = 0; i <= s.length; i++) {
      for (let j = s.length; j >= i; j--) {
          longest = (new Set(s.slice(i,j)).size == s.slice(i,j).length 
                  && s.slice(i,j).length > longest.length) 
                  ? s.slice(i,j) : longest;
      }
  }
  console.log(`The answer is "${longest}", with the length of ${longest.length}.`);
}

longestPiece("abcabcbb");   // The answer is "abc", with the length of 3.
longestPiece("bbbbb");      // The answer is "b", with the length of 1.
longestPiece("pwwkew");     // The answer is "wke", with the length of 3.