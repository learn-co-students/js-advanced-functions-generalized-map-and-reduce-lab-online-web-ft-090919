// Add your functions here

let map = (array, fn) => {
    let newArray = []

    array.forEach(a => {
        newArray.push(fn(a))        
    })
    return newArray
}

let reduce = (array, fn, value) => {
    let newValue 
    let i

    newValue = (!!value) ? value : array[0]
    i = (newValue === value ? 0 : 1)

    for (i; i < array.length; i++) {
        newValue = fn(array[i], newValue)
    }
    return newValue 
}


// let reduceToAllTrue = function(sourceArray) {
//     let truthy = true

//     for (let i of sourceArray) {
//         if (!i) {
//         truthy = false
//         }
//     }
//     return truthy 
// }