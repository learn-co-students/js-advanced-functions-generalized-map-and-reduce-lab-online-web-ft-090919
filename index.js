// Add your functions here

function map(src,a){
    let arr = []
    for (let i = 0; i < src.length; i++){
        let el = src[i]
        arr.push(a(el))
    }
    return arr
}

function reduce(src, a, begin){
    let b = (!!begin) ? begin : src[0]
    let i = (!!begin) ? 0 : 1
    for (; i < src.length; i++){
        b = a(src[i], b)
    }
    return b
}