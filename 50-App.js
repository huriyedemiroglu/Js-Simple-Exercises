//Ex Oh
// exOh(str) take the str parameter being passed and 
// return the string true if there is an equal number of x's and o's,
//  otherwise return the string false.

const exOh=(str)=>{
  let x = 0;
  let o = 0;
  [...str].forEach((item)=>{
   item === "x" ? x=x+1 : o=o+1
  })
return x === o ? true : false
}
console.log(exOh('xxxxxoooxxooo'));
console.log(exOh('xxxxooooxxoo'));