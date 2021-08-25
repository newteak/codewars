/**
* positiveSum return sum of array's positve element
*
*
* @param {Array} arr - want to sum all positive element
*
* @return {Number} sum of array's positve element
*/
function positiveSum(arr) {
  return arr.filter(x => x > 0).reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

export default positiveSum;
