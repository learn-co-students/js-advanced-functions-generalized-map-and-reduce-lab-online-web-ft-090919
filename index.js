const map = (arr, fn) => {
  let newArr = [];

  for (const el of arr) {
    newArr.push(fn(el));
  }

  return newArr;
};

const reduce = (arr, fn, val) => {
  let newVal;
  let i;

  newVal = (!!val) ? val : arr[0];
  i = (newVal == val ? 0 : 1);

  for (i; i < arr.length; i++) {
    newVal = fn(arr[i], newVal);
  }

  return newVal;
};
