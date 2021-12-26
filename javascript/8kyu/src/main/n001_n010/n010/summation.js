/**
 * summation finds the summation of every number from 1 to num
 * URL: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
 *
 *
 * @param {Number} num - number is greater than 0.
 *
 * @return {Number} the summation of every number from 1 to num.
 *
 */
const summation = (num) => [...Array(num).keys(), num].reduce((prev, curr) => prev + curr, 0);

export default summation;
