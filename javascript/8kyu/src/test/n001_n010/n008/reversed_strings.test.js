import {describe, it} from 'mocha';
import {expect} from 'chai';
import reversedString from '../../../main/n001_n010/n008/reversed_string.js';

// URL: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
describe('Function reversedString', () => {
  context(`With ('h')`, () => {
    it (`Return 'h'`, () => {
      expect('h').to.equal(reversedString('h'));
    });
  });

  context(`With ('he')`, () => {
    it (`Return 'eh'`, () => {
      expect('eh').to.equal(reversedString('he'));
    });
  });
});
