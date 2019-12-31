

function map(sourceArray, callbak){
  let newArray = []
  for (let i=0; i < sourceArray.length; i++){
    newArray.push(callbak(sourceArray[i]))
  }
  return newArray
}


function reduce(sourceArray, callback, startingPoint=0){
  let total = !!startingPoint ? startingPoint : sourceArray[0]
  let i = !!startingPoint ? 0 : 1

  for (; i < sourceArray.length; i++){
    total = callback(total, sourceArray[i])
  }
  return total
}
