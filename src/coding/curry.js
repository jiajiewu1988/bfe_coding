/*
https://bigfrontend.dev/problem/implement-curry

*/
/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
 module.exports = function curry(fn) {
  // your code here
  return function recur(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...args2) => recur(...args, ...args2);
    }
  }
}