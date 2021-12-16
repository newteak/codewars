import {describe, it} from 'mocha';
import {expect} from 'chai';
import boolToWord from '../../../main/n001_n010/n006/bool_to_word.js';

// URL: https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
// [ ] step1 - boolToWord(true) return 'Yes'
describe('Function boolToWord', () => {
  context(`With (true)`, () => {
    it (`Return 'Yes'`, () => {
      expect('Yes').to.equal(boolToWord(true));
    });
  });
});
