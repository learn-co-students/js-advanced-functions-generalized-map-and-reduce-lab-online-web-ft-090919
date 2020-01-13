function map(sourceArray,callback){
  let results = [];

  for(let i = 0; i < sourceArray.length; i++){
    results.push(callback(sourceArray[i]));
  }
  return results;
}

function reduce(sourceArray,callback,starting){
  let results = sourceArray[0];
  let i = 1;
  if(!!starting){
    results = starting;
    i--;
  }

  for(i; i < sourceArray.length; i++){
    results = callback(sourceArray[i], results);
  }
  return results;
}