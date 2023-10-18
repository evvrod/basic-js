const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) { 
    throw Error(`'arr' parameter must be an instance of the Array!`);
}

let newArr = [];
let copyArr = arr.slice(0);
let ind = 0;
while (ind < copyArr.length) {
    console.log(copyArr[ind])
  let el = copyArr[ind];
  if (el === '--discard-next') { 
    copyArr[ind] = ''; 
    copyArr[ind + 1] = ''; 
    ind += 2; 
    continue 
  }

  if (el === '--double-next') { 
      if (copyArr[ind + 1] !== undefined) { newArr.push(arr[ind + 1]);}
      ind++; 
      continue 
  }

  if (el === '--discard-prev') {
    if (copyArr[ind-1] !== '') { newArr.pop(); }
    ind++;
    continue;
  }

  if (el === '--double-prev') {
    if (copyArr[ind - 1] !== '' && copyArr[ind - 1] !== undefined) { newArr.push(newArr.at(-1)); }
    ind++;
    continue;
  }

  newArr.push(el);
  ind++
};

return newArr;
}

module.exports = {
  transform
};
