import {describe, it} from 'mocha';
import {expect} from 'chai';
import summation from '../../../main/n001_n010/n010/summation.js';

// URL: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
describe('Function summation', () => {
  context(`With (1)`, () => {
    it (`Return 1`, () => {
      expect(1).to.equal(summation(1));
    });
  });
});
