
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
 function allSettled(promises) {
  // your code here
  const res = [];
  let pendingCount = promises.length;

  return new Promise((resolve, reject) => {
    if (pendingCount === 0) {
      Promise.resolve([]).then((data) => resolve(data));
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((data) => {
        res[index] = {
          'status': 'fulfilled',
          'value': data
        };
      }).catch((error) => {
        res[index] = {
          'status': 'rejected',
          'reason': error
        };
      }).finally(() => {
        pendingCount -= 1;
        if (pendingCount === 0) {
          resolve(res);
        }
      });
    });
  });
}

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];
allSettled(promises).then((result) => {
  console.log(JSON.stringify(result));
});
