function map(arr, fn) {
    let newArr = []
    for ( let i = 0; i < arr.length; i++ ) {
        newArr.push(fn(arr[i]))
    }
    return newArr
}



function reduce(arr, fn, sv) {
    let ans = (!!sv) ? sv : arr[0]
    let i = (!!sv) ? 0 : 1

    for ( ; i < arr.length; i++ ) {
        ans = fn(arr[i], ans)
    }
    return ans 
}

