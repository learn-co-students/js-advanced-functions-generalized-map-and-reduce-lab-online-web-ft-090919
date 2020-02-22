// Add your functions here
function map(array, callback) {
    const res = [];
    for(let i of array) {
        res.push(callback(i));
    }
    return res;
}

function reduce(array, callback, total) {
    let i = 0;
    if(total === undefined) {
        total = array[i];
        i++;
    }

    for(i; i < array.length; i++) {
        total = callback(array[i], total);
    }
    return total;
}
