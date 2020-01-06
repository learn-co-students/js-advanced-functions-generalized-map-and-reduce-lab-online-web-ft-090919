// Add your functions here
function map (arr, func) {
    let newArr = []
    arr.forEach((item) => {
        newArr.push(func(item))
    })
    return newArr
}

function reduce (arr, func, startingValue) {
    let final = (startingValue) ? startingValue : arr[0]
    let i = (startingValue) ? 0 : 1

    for (; i < arr.length; i ++) {
        final = func(arr[i], final)
    }
  return final
}