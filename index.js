// Add your functions here
function map (arr, func) {
    let newArr = []
    arr.forEach((item) => {
        newArr.push(func(item))
    })
    return newArr
}

function reduce (arr, func, startingValue) {
    let final

    arr.forEach((item) => {
        final = func(item)
    })
    return final

}