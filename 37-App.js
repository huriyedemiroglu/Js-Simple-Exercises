//letterCapitilaze//

const letterCapitalize = (str) => {
  let newStr = [];
  str.split(" ").forEach((word)=>{
    newStr.push(word.charAt(0).toUpperCase()+ word.slice(1,word.length))
  })
  console.log(newStr);
  return newStr.join(" ");
};
console.log(letterCapitalize("this is amazing job"));
