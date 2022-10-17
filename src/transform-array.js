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
function transform(array) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(array)) throw new Error("'arr' parameter must be an instance of the Array!");
  
  let arr = [];
  for (let i = 0; i < array.length; i++) arr.push(array[i]);

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--discard-next') {
      arr[i] = '';
      arr[i + 1] = '';
    } else if (arr[i + 1] === '--discard-prev') {
      arr[i] = '';
      arr[i + 1] = '';
    } else if (arr[i] === '--double-next') {
      arr.splice(i + 1, 0, arr[i + 1]);
      arr.splice(i, 1);
    } else if (arr[i + 1] === '--double-prev') {
      arr.splice(i + 1, 1);
      arr.splice(i, 0, arr[i]);
    }

    newArr.push(arr[i]);
  }

  let result =[];
  for (let i = 0; i < newArr.length; i++) {
    if (arr[i] !== '' && arr[i] !== undefined && arr[i] !== '--discard-next'
      && arr[i] !== '--discard-prev'
      && arr[i] !== '--double-next'
      && arr[i] !== '--double-prev') result.push(newArr[i])
  }
  return result;
}

module.exports = {
  transform
};
