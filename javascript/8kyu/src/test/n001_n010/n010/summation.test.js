import {describe, it} from 'mocha';
import {expect} from 'chai';
import summation from '../../../main/n001_n010/n010/summation.js';

// URL: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
describe('Function summation', () => {
  context(`With (1)`, () => {
    it(`Return 1`, () => {
      expect(1).to.equal(summation(1));
    });
  });

  context(`With (2)`, () => {
    it(`Return 1 + 2`, () => {
      expect(1 + 2).to.equal(summation(2));
    });
  });

  context(`With (6)`, () => {
    it(`Return 1 + 2 + 3 + 4 + 5 + 6`, () => {
      expect(1 + 2 + 3 + 4 + 5 + 6).to.equal(summation(6));
    });
  });
});
