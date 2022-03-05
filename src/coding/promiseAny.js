
/**
 * @link https://bigfrontend.dev/problem/implement-Promise-any
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
 function any(promises) {
  // your code here
  return new Promise((resolve, reject) => {
    let result = null;
    let fulfilled = false;
    let pendingCount = promises.length;
    const errors = [];

    promises.forEach((promise, index) => {
      promise.then((output) => {
        if (fulfilled) {
          return;
        }

        fulfilled = true;
        result = output;
        resolve(result);
      }).catch((error) => {
        errors[index] = error;
      }).finally(() => {
        pendingCount -= 1;

        if (pendingCount === 0 && !fulfilled) {
          reject(new AggregateError("", errors));
        }
      });
    });
  });
}