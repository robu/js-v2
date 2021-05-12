const base = require('path').resolve(__dirname, './../../../../me/kmom01/function')
const loop = require(`${base}/loop`);
const sum = require(`${base}/sum`);

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('loops 10 - 15', () => {
  expect(loop(10, 15)).toEqual([10, 11, 12, 13, 14, 15]);
});
