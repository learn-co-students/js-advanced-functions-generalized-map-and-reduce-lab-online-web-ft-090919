map = (arr, fn) => {
    let mapped = []
    for (let i = 0; i < arr.length; i++){
        mapped.push(fn(arr[i]))
    }
    return mapped
}

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
}