// ; Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent. You can assume each valid number in the mapping is a single digit.

// ; For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …} then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].

function f_mapping(digits, mapping) {
    if (digits.length === 1) {
      return mapping[digits[0]]
    }
    
    const result = []
    
    for (let i of mapping[digits[0]])
      for (let j of f_mapping(digits.slice(1), mapping))
        result.push(i+j)
    return result
  }
  console.log(f_mapping("342", {2: ["a", "b", "c"], 3: ["d", "e", "f"], 4: ["g", "h", "i"]}))