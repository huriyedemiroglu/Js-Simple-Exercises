const arr = ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]

function arrayChallange(strArr) {
   //const text = strArr[0]
  //const itemsStr = strArr[1]
  const [text, itemStr] = strArr
  const items = itemStr.split(',')
  console.log(items)
  for (let i = 0; i < items.length - 1; i++)
    for (let j = i + 1; j < items.length; j++) {
      if (items[i] + items[j] === text) return items[i] + ", " + items[j]
      if (items[j] + items[i] === text) return items[j] + ", " + items[i]
    }

  return "not possible"
}

console.log(arrayChallange(arr))
