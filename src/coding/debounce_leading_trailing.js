function debounce(func, wait, option = {leading: false, trailing: true}) {
  // your code here
  let timer = null;

  return function debounceFn(...args) {
    let isInvoked = false;
    if (!timer && option.leading) {
      func.apply(this, args);
      isInvoked = true;
    }

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      if (option.trailing && !isInvoked) func.apply(this, args);
    }, wait);
  };
}
module.exports = debounce;
// test codes
let currentTime = 0

const run = (input) => {
  currentTime = 0
  const calls = []

  const func = (arg) => {
     calls.push(`${arg}@${currentTime}`)
  }

  const debounced = debounce(func, 3, {leading: true, trailing: true})
  input.forEach((call) => {
     const [arg, time] = call.split('@')
     setTimeout(() => debounced(arg), time)
  })
  return calls
}
console.log(run(['A@1','B@2', 'C@3', 'D@5', 'E@11', 'F@13', 'G@14']));