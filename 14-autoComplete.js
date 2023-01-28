// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.
// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].


///// first solution/////
function autoComplete(query,array){
  let outputArray = []
for (let i = 0; i < array.length; i++) {
  if(array[i].startsWith(query)){
      outputArray.push(array[i])
  }   
}
return outputArray
}
let array = ['dog', 'deer', 'deal']
let query = "de"

console.log(autoComplete(query,array));

///// second solution/////
// let array = ["desk", "dock", "hello", "fade", "dear"]
// let pattern = "de"

// console.log(array.filter(word => word.startsWith(pattern)))




