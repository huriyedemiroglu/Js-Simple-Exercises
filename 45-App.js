// Given the mapping a=1 ,b=2, ...z=26 and an encoded message, count the number of ways it can be decoded.
// For example, the message '111' would give 3, since it could be decoded as 'aaa','ka', and 'ak'.
// you can assume that the messages are decodable. For example, '001' is not allowed

function countDecoding(s){
      if (s.startsWith('0')) return 0;
      if (s.length <=1 ) return 1;
      let total = 0;
      if (+s.slice(0,2) <= 26) total += countDecoding (s.slice(2))

      total += countDecoding(s.slice(1))
      
      return total

    }
    console.log(countDecoding('111'))
         
       
     
