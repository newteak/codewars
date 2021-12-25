import {describe, it} from 'mocha';
import {expect} from 'chai';
import numberToString from '../../../main/n001_n010/n009/number_to_string.js';

// URL: https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript
describe('Function numberToString', () => {
  context(`With (Number.MAX_VALUE)`, () => {
    it (`Return '1.7976931348623157e+308'`, () => {
      expect('1.7976931348623157e+308').to.equal(numberToString(Number.MAX_VALUE));
    });
  });

  context(`With (1)`, () => {
    it (`Return '1'`, () => {
      expect('1').to.equal(numberToString(1));
    });
  });

  context(`With (0)`, () => {
    it (`Return '0'`, () => {
      expect('0').to.equal(numberToString(0));
    });
  });

  context(`With (-1)`, () => {
    it (`Return '-1'`, () => {
      expect('-1').to.equal(numberToString(-1));
    });
  });

  context(`With (Number.NEGATIVE_INFINITY)`, () => {
    it (`Return '-Infinity'`, () => {
      console.log(Number.MIN_VALUE);
      expect('-Infinity').to.equal(numberToString(Number.NEGATIVE_INFINITY));
    });
  });
});
