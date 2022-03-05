const curryWithPlaceholder = require('./curry_with_placeholder');

describe('test curry with placeholder', () => {
  const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
  };
  const curriedJoin = curryWithPlaceholder(join);
  const _ = curryWithPlaceholder.placeholder;

  test('curry with placeholder - (1, 2, 3)', () => {  
    expect(curriedJoin(1, 2, 3)).toBe('1_2_3');
  });

  test('curry with placeholder - (1, 2)(3)', () => {
    expect(curriedJoin(1, 2)(3)).toBe('1_2_3');
  });

  test('curry with placeholder - (1, 2, 3, 4)', () => {
    expect(curriedJoin(1, 2, 3, 4)).toBe('1_2_3');
  });

  test('curry with placeholder - (_,_,3,4)(1,_)(2,5)', () => {
    expect(curriedJoin(_,_,3,4)(1,_)(2,5)).toBe('1_2_3');
  });

  test('curry with placeholder - (_,_,_,_)(_,2,_)(_,3)(1)', () => {
    expect(curriedJoin(_,_,_,_)(_,2,_)(_,3)(1)).toBe('1_2_3');
  });
});