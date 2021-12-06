/**
* removeChar removes the first and last characters of a given string.
* URL: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
*
*
* @param {String} str - string with length is more than 2.
*
* @return {String} a given string that is removed the first and last characters.
*
*/
const removeChar = (str) => str.substring(1, str.length - 1);

export default removeChar;
