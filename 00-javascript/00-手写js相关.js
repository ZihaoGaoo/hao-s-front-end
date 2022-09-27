/**
 * 1. 返回最后一次返回的promsie
 */

const ajaxDemo = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i);
    }, Math.ceil(Math.random() * 5000));
  });
};

function lastPromise(fn) {
  let results = [],
    list = [];
  return function () {
    return new Promise(async (resolve, reject) => {
      list.push(resolve);
      const res = await fn(...arguments);
      results.push(res);
      if (results.length === list.length) {
        const last = results.pop();
        list.forEach((_resolve) => _resolve(last));
        results = [];
        list = [];
      }
    });
  };
}

const fn = lastPromise(ajaxDemo);

// (async function() {
//   for (let i = 0; i < 10; i++) {
//     fn(i).then(console.log)
//   }
// })()

/**
 * 2. await输出
 */
 async function testPromise() {
  const times = [1, 3, 5, 7];

  // times.forEach(async (time) => {
  //   const res = await new Promise((resolve) =>
  //     setTimeout(() => resolve(time), (10 - time) * 1000)
  //   );
  //   console.log(res);
  // });

  for (let i = 0; i < times.length; i++) {
    const res = await new Promise(resolve => setTimeout(() => {
      resolve(times[i]);
    }, (10 - times[i]) * 1000))
    console.log(res);
  }
}
// testPromise()

/**
 * 3. before、after
 */
Function.prototype.before = function(beforeFn) {
  const fn = this;
  return function() {
    beforeFn();
    fn(...arguments);
  }
}
Function.prototype.after = function(afterFn) {
  const fn = this;
  return function() {
    fn(...arguments);
    afterFn();
  }
}
function testThree() {
  console.log('function', ...arguments);
}
const fnThree = testThree.before(() => console.log('before')).after(() => console.log('after'));
// fnThree(1, 2, 3);