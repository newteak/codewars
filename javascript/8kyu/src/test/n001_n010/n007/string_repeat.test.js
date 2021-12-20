import {describe, it} from 'mocha';
import {expect} from 'chai';
import repeatStr from '../../../main/n001_n010/n007/string_repeat.js';

// URL: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
// [x] step1 - with (1, str) will return str
// [ ] step2 - with (more than 1, str) will return str * number(repeat count is more than one)
describe('Function repeatStr', () => {
  context(`With (1, "I")`, () => {
    it (`Return 'I'`, () => {
      expect('I').to.equal(repeatStr(1, "I"));
    });
  });

  context(`With (1, "ABC")`, () => {
    it (`Return 'ABC'`, () => {
      expect('ABC').to.equal(repeatStr(1, "ABC"));
    });
  });

  context(`With (2, "I")`, () => {
    it (`Return 'II'`, () => {
      expect('II').to.equal(repeatStr(2, "I"));
    });
  });
});
