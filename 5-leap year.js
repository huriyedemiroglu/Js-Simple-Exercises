/*leap year*/
function isLeapYear(year){
  return ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0);
}
// module.exports = isLeapYear;
console.log(isLeapYear(1970));

 