import {describe, it} from 'mocha';
import {expect} from 'chai';
import removeChar from '../../../main/n001_n010/n005/remove_char.js';

// URL: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
// [x] step1 - removeChar can remove first char
// [x] step2 - removeChar can remove last char
describe('Function removeChar', () => {
  context(`With ('stone')`, () => {
    it (`Return 'ton'`, () => {
      expect('ton').to.equal(removeChar('stone'));
    });
  });

  context(`With ('char')`, () => {
    it (`Return 'ha'`, () => {
      expect('ha').to.equal(removeChar('char'));
    });
  });

  context(`With ('hat')`, () => {
    it (`Return 'a'`, () => {
      expect('a').to.equal(removeChar('hat'));
    });
  });

  context(`With ('hi')`, () => {
    it (`Return ''`, () => {
      expect('').to.equal(removeChar('hi'));
    });
  });
});
