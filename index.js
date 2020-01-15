// Add your functions here

function map(src, fn){
    debugger
    const newArray = []
    for (let i = 0; i < src.length; i++){
        newArray.push(fn(src[i]))
    }
    return newArray
}

//const compare = (value, fn) => { value}

function reduce(src, fn, start=0){
    let currentValue = start
    if (typeof fn(currentValue, src[0]) === 'boolean'){
        currentValue = !!src[0]
    }
    for (let i = 0; i < src.length; i++){
        currentValue = fn(currentValue, src[i])
    }
    return currentValue
}