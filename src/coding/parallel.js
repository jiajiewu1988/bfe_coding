
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
 function parallelNonPromise(funcs){
  // your code here
  return (callback, initialData) => {
    if (funcs.length === 0) {
      callback([initialData]);
      return;
    }

    const N = funcs.length;
    const res = Array(N).fill(undefined);
    let foundError = false;

    funcs.forEach((fn, index) => {
      fn((error, data) => {
        if (foundError) {
          return;
        }

        if (error) {
          foundError = true;
          res[index] = error;
          callback(error);
          return;
        }

        res[index] = data;
        if (index === N - 1) {
          callback(undefined, res);
        }
      });
    });
  };
}