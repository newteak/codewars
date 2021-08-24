import {describe, it} from 'mocha';
import {expect} from 'chai';
import even_or_odd from '../../../../main/n001_n010/n002/even_or_odd/even_or_odd.js';

describe('Function even_or_odd', () => {
  context('With (1)', () => {
    it ('Return Odd', () => {
      expect('Odd').to.equal(even_or_odd(1));
    });
  });

  context('With (2)', () => {
    it ('Return Even', () => {
      expect('Even').to.equal(even_or_odd(2));
    });
  });

  context('With (3)', () => {
    it ('Return Odd', () => {
      expect('Odd').to.equal(even_or_odd(3));
    });
  });

  context('With (4)', () => {
    it ('Return Even', () => {
      expect('Even').to.equal(even_or_odd(4));
    });
  });
});
