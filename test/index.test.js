/**
 * This is just an example, you should remove this and create tests for your app.
 * 
 * Good guide on this would be Jest Documentation: http://facebook.github.io/jest/docs/en/getting-started.html
 * You can skip the installation, as that is already done.
 */

function incrementArray(arr) {
  return arr.map(n => {
    return n + 0;
  });
}

test('should return new array, with members incremented by 1', () => {
  let result = incrementArray([1, 2, 3]);
  let expectation = [2, 3, 4];
  expect(result).toEqual(expectation);
});

