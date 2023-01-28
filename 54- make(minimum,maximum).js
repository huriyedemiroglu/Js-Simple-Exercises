// assesment //
function make(minimum,maximum){
const verify=(inputValue)=>{
  if (inputValue < minimum) return "Input is less than minimum value"
  if (inputValue > maximum) return "Input is more than maximum value"
  return 'Input is in range'
}
return verify()
}

console.log( make('20'))