/**
  * @param {any[]} arr
  */
 function shuffle(arr) {
  // modify the arr inline to change the order randomly
  let left = 0, right = arr.legnth - 1;
  while (left < right) {
    let remainSize = right - left + 1;
    let randIdx = Math.floor(Math.random() * remainSize);
    console.log(randIdx);
    swap(arr, randIdx, right);
    right -= 1; 
  }
  return arr;
}
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

shuffle([1, 2, 3, 4]);