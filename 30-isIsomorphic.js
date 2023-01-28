// All occurrences of a character must be replaced with another character while preservind the order of characters. No two characters may map to the same characters but  a character may map to itself.
//example 1:
// input: s="egg", t="add"
// output : true
//example 2:
// input: s="foo", t="bar"
// output : false

///////solition////////

const isIsomorphic = function (str1, str2) {
  if (str1 === str2) return true;
  for (let i = 0; i < str1.length; i++) {
    if (str1.indexOf(str1[i]) !== str2.indexOf(str2[i])){
     return false;
    }
  }
return true;
};

console.log(isIsomorphic("aaa", "bbx"));
console.log(isIsomorphic("aaa", "bbbx"));
console.log(isIsomorphic("aaa", "bbbxx"));
console.log(isIsomorphic("aaad", "bbbe"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));