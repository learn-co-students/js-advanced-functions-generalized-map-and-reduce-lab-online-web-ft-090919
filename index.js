function map(srcRay,callback){
  let results = [];
  
  for(let i = 0; i < srcRay.length; i++){
    results.push(callback(srcRay[i]));
  }
  return results;
}

function reduce(srcRay,callback,starting){
  let results = srcRay[0];
  let i = 1;
  if(!!starting){
    results = starting;
    i--;
  }
  
  for(i; i < srcRay.length; i++){
    results = callback(srcRay[i], results);
  }
  return results;
}