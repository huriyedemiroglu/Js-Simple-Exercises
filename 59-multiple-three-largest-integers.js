const arr = [-10, -10, 5, 2, 1]

function findMaxMul(arr) {
  const sorted = arr.sort((a, b) => b - a)
  console.log(sorted)

  return Math.max(sorted[0] * sorted[1] * sorted[2], sorted[0] * sorted[sorted.length - 1] * sorted[sorted.length - 2])

  // if (sorted[0] * sorted[1] * sorted[2] > sorted[0] * sorted[sorted.length - 1] * sorted[sorted.length - 2]) {
  //   return sorted[0] * sorted[1] * sorted[2]
  // } else {
  //   return sorted[0] * sorted[sorted.length - 1] * sorted[sorted.length - 2]
  // }
}

console.log(findMaxMul(arr))