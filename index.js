// Add your functions here
function map(sourceArray, block){
  let result = []
  for(let i = 0; i < sourceArray.length; i++){
    result.push(block(sourceArray[i]))
  }
  return result
}

function reduce(sourceArray, block, startingValue=null) {
  let skipResult = startingValue ? 0 : 1
  let result = startingValue ? startingValue : sourceArray[0]
  for(let i = skipResult; i < sourceArray.length; i++){
    result = (block(sourceArray[i], result))
  }

  return result
}
