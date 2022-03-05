const curry = require('./curry');

describe('javascript curry polyfill', () => {
  test('javascript curry polyfill', () => {
    const join = (a, b, c) => {
      return `${a}_${b}_${c}`;
    };
    const curriedJoin = curry(join);
    
    expect(curriedJoin(1, 2, 3)).toBe('1_2_3');
    expect(curriedJoin(1, 2)(3)).toBe('1_2_3');
    expect(curriedJoin(1, 2, 3, 4)).toBe('1_2_3');
    expect(curriedJoin(1)(2)(3)).toBe('1_2_3');
  });
});