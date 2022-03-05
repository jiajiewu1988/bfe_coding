/**
 * @link https://bigfrontend.dev/problem/implement-async-helper-race
 */

/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
 function race(funcs){
  // your code here
  return (callback) => {
    if (funcs.length === 0) {
      callback();
      return;
    }

    let result = null;
    let foundError = null;
    let fulfilled = false;
    funcs.forEach((fn) => {
      fn((error, data) => {
        if (fulfilled) {
          return;
        }

        if (result || foundError) {
          fulfilled = true;
          if (foundError) {
            callback(foundError, undefined);
          } else {
            callback(undefined, result);
          }
          return;
        }

        if (error) foundError = error;
        else result = data;
      });
    });
  }
}