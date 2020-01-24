function map(src, fn) {
    let result = []
    src.forEach(e => {
        result.push(fn(e))
    })
    return result
}

// The tests for this are kinda weird and complicated
function reduce(src, fn, start) {
    // if starting point is provided, set as initial. If not, set start to first element in src
    let result = (!!start) ? start : src[0]
    // if start is present, set counter to 0. If not, set to 1
    let i = (!!start) ? 0 : 1

    for (; i < src.length; i++) {
        result = fn(src[i], result)
    }
    return result
}