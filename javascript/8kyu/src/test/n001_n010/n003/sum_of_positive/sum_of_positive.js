import {describe, it} from 'mocha';
import {expect} from 'chai';
import positiveSum from '../../../../main/n001_n010/n003/sum_of_positive/sum_of_positive.js';

describe('Function positiveSum', () => {
  context('With ([-1])', () => {
    it ('Return 0', () => {
      expect(0).to.equal(positiveSum([-1]));
    });
  });

  context('With ([1])', () => {
    it ('Return 1', () => {
      expect(1).to.equal(positiveSum([1]));
    });
  });

  context('With ([1, 2])', () => {
    it ('Return 3', () => {
      expect(3).to.equal(positiveSum([1, 2]));
    });
  });

  context('With ([1, 3, -3])', () => {
    it ('Return 4', () => {
      expect(4).to.equal(positiveSum([1, 3, -3]));
    });
  });

  context('With ([10, 1, 3, -3, 5, 0])', () => {
    it ('Return 19', () => {
      expect(19).to.equal(positiveSum([10, 1, 3, -3, 5, 0]));
    });
  });
});
