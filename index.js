// Add your functions here
//==================================================
function map(src, func){
  let r = []

  for (let i = 0; i < src.length; i++ ) {
    r.push(func(src[i]))
 }
  return r
}
//==================================================
function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
//==================================================
