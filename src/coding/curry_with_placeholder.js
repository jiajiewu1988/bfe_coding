/* 
https://bigfrontend.dev/problem/implement-curry-with-placeholder

*/
/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
 function curry(fn) {
  // your code here
  return function recur(...args) {
    const containsPlaceholder = args.slice(0, fn.length).includes(curry.placeholder);
    if (!containsPlaceholder && args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return (...args2) => {
      const filteredArgs = args.map((arg) => {
        return arg === curry.placeholder && args2.length ? args2.shift() : arg;
      });
      return recur(...filteredArgs, ...args2);
    };
  };
}


curry.placeholder = Symbol()

module.exports = curry;