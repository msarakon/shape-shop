import { incrementArray } from '../app/index';
import { assert } from 'chai';

describe('Index', () => {
  it('should return new array, with members incremented by 1', () => {
    let result = incrementArray([1, 2, 3]);
    let expectation = [2, 3, 4];
    assert.deepEqual(result, expectation);
  });
});
