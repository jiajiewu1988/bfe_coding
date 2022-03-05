/**
 * https://bigfrontend.dev/problem/implement-basic-throttle
 */
/**
 * @param {Function} func
 * @param {number} wait
 */
 function throttle(func, wait) {
  // your code here
  let timer = null;

  // last = {context: scope of last time, args: last passed in args} | null
  let last = null;

  const startCooling = () => {
    timer = setTimeout(runLast, wait);
  };

  const runLast = () => {
    if (last) {
      func.apply(last.context, last.args);
      last = null;
    }
    timer = null;
  };

  return (...args) => {    
    if (timer) {
      last = last || {};
      last.context = this;
      last.args = args;
    } else {
      func.apply(this, args);
      startCooling();
    }
  }
}