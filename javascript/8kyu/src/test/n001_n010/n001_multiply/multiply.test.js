import {describe, it} from 'mocha';
import {expect} from 'chai';
import multiply from '../../../main/n001_n010/n001_multiply/multiply.js';

describe('Function multiply', () => {
  context('With (1, 2)', () => {
    it ('Return 2', () => {
      expect(2).to.equal(multiply(1, 2));
    });
  });

  context('With (30, 2)', () => {
    it ('Return 60', () => {
      expect(60).to.equal(multiply(30, 2));
    });
  });

  context('With (30, -2)', () => {
    it ('Return -60', () => {
      expect(-60).to.equal(multiply(30, -2));
    });
  });
});
