/**
 * walk函数
 * 每间隔wait时间执行time次
 */

function walk(fn, wait, time) {
  return function Fn() {
    setTimeout(() => {
      for (let i = 0; i < time; i++) {
        fn.call(this, ...arguments);
      }
      Fn(...arguments);
    }, wait);
  };
}
const func = walk(console.log, 1000, 4);
// func(1)

/**
 * sleep函数
 * 等待wait后执行
 */
function sleep(fn, wait, ...arguments) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      fn.call(this, ...arguments);
    }, wait);
  });
}
async function test() {
  await sleep(console.log, 1000, 1);
  await sleep(console.log, 2000, 2);
  await sleep(console.log, 3000, 3);
}