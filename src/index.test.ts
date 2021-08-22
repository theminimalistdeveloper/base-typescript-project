import handler from './index';

test('Return initial value', () => {
  const value = 'a';
  expect(handler(value)).toBe(value);
});
