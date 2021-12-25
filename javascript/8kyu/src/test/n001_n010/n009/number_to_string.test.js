import {describe, it} from 'mocha';
import {expect} from 'chai';
import numberToString from '../../../main/n001_n010/n009/number_to_string.js';

// URL: https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript
describe('Function numberToString', () => {
  context(`With (1)`, () => {
    it (`Return '1'`, () => {
      expect('1').to.equal(numberToString(1));
    });
  });
});
