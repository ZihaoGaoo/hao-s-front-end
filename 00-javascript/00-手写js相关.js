/**
 * 返回最后一次返回的promsie
 */

const ajaxDemo = function(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i);
    }, Math.ceil(Math.random() * 5000));
  })
}


function lastPromise(fn) {
  let results = [], list = [];
  return function() {
    return new Promise(async (resolve, reject) => {
      list.push(resolve);
      const res = await fn(...arguments);
      results.push(res);
      if (results.length === list.length) {
        const last = results.pop();
        list.forEach(_resolve => _resolve(last));
        results = [];
        list = [];
      }
    })
  }
}

const fn = lastPromise(ajaxDemo);

// (async function() {
//   for (let i = 0; i < 10; i++) {
//     fn(i).then(console.log)
//   }
// })()