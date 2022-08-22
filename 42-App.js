///Alphabet soup///

const alphabetSoup = (str)=>{
  // const arr = str.split('')
  // const sortedArr = arr.sort()
  // const newStr =sortedArr.join('')
  // return newStr

return str.split('').sort().join('')
}
console.log (alphabetSoup('hello'));