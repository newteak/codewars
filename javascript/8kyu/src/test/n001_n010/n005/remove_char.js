import {describe, it} from 'mocha';
import {expect} from 'chai';
import removeChar from '../../../main/n001_n010/n005/remove_char.js';

// URL: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
// step1 - removeChar can remove first char
// step2 - removeChar can remove last char
describe('Function removeChar', () => {
  context('Given number is more than 0 tests', () => {
    context(`With ('char')`, () => {
      it (`Return 'har'`, () => {
        expect('har').to.equal(removeChar('char'));
      });
    });
  });
});
