import {describe, it} from 'mocha';
import {expect} from 'chai';
import makeNegative from '../../../main/n001_n010/n004/make_negative.js';

// URL: https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
describe('Function makeNegative', () => {
  context('With (1)', () => {
    it ('Return -1', () => {
      expect(-1).to.equal(makeNegative(1));
    });
  });

  context('With (100)', () => {
    it ('Return -100', () => {
      expect(-100).to.equal(makeNegative(100));
    });
  });

  context('With (0)', () => {
    it ('Return 0', () => {
      expect(0).to.equal(makeNegative(0));
    });
  });

  context('With (-35)', () => {
    it ('Return 35', () => {
      expect(35).to.equal(makeNegative(-35));
    });
  });
});
