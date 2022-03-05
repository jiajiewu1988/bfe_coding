
/**
 * @link https://bigfrontend.dev/problem/implement-Promise-all
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
 function all(promises) {
  // your code here
  return new Promise((resolve, reject) => {
    const res = [];
    let pendingCount = promises.length;
    if (pendingCount === 0) {
      Promise.resolve([]).then((data) => resolve(data));
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((data) => {
        res[index] = data;
        
        pendingCount -= 1;
        if (pendingCount === 0) {
          resolve(res);
        }
      }, reject);
    });

  });
}