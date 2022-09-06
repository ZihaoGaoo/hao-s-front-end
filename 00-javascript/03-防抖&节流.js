/**
 * 防抖
 * 规定时间后执行，若执行前再次触发则重新计时
 */
function debounce(fn, time) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...arguments);
    }, time);
  };
}

const testDebounce = async () => {
  const func = debounce(console.log, 2000);
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(`执行第${i + 1}次`);
        func(1);
        resolve();
      }, 1000);
    });
  }
};
// testDebounce();

/**
 * 节流
 * 规定时间内只执行一次，若规定时间内多次触发只有一次执行
 */
function throttle(fn, time) {
  let timer;
  return function() {
    if (timer) return;
    timer = setTimeout(() => {
      fn.call(this, ...arguments);
      timer = null;
    }, time);
  }
}

const testThrottle = async () => {
  const func = throttle(console.log, 2000);
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(`执行第${i + 1}次`);
        func(1);
        resolve();
      }, 1000);
    });
  }
};
// testThrottle()