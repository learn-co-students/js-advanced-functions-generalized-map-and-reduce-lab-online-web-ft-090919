// Add your functions here
function map(sourceArray, cBlock) {
  let arr = []

  for (let i = 0; i < sourceArray.length; i++) {
    let sourceArrayElement = sourceArray[i]
    arr.push(cBlock(sourceArrayElement))
  }
  return arr
}

function reduce(sourceArray, cBlock, startingPoint) {
  let arr = (!!startingPoint) ? startingPoint : sourceArray[0]
  let cats = (!!startingPoint) ? 0 : 1

  for (; cats < sourceArray.length; cats++) {
    arr = cBlock(sourceArray[cats], arr)
  }

  return arr;
}
