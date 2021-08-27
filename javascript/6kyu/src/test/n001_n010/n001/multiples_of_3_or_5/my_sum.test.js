import {describe, it} from 'mocha';
import {expect} from 'chai';
import sumMultiples3Or5
  from '../../../../main/n001_n010/n001/multiples_of_3_or_5/my_sum.js';

describe('Function sumMultiples3Or5', () => {
  context('With (-4)', () => {
    it('Return 0', () => {
      expect(0).to.equal(sumMultiples3Or5(-4));
    });
  });

  context('With (0)', () => {
    it('Return 0', () => {
      expect(0).to.equal(sumMultiples3Or5(0));
    });
  });

  context('With (5)', () => {
    it('Return 3', () => {
      expect(3).to.equal(sumMultiples3Or5(5));
    });
  });

  context('With (6)', () => {
    it('Return 8', () => {
      expect(3 + 5).to.equal(sumMultiples3Or5(6));
    });
  });

  context('With (15)', () => {
    it('Return 45', () => {
      expect(3 + 5 + 6 + 9 + 10 + 12).to.equal(sumMultiples3Or5(15));
    });
  });

  context('With (16)', () => {
    it('Return 60', () => {
      expect(3 + 5 + 6 + 9 + 10 + 12 + 15).to.equal(sumMultiples3Or5(16));
    });
  });
});
