interface IMyPromise {
  status: string;
  value: any;
}

const PENDING = 'pengding';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {

  status = PENDING;

  value = undefined;

  successCallback = [];

  failCallback = [];

  constructor(executer) {
    try {
      executer(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  resolve = (value: any) => {
    if (this.status !== PENDING) return;
    this.value = value;
    this.status = FULFILLED;
    this.successCallback.forEach(fn => fn());
  };

  reject = (value: any) => {
    if (this.status !== PENDING) return;
    this.value = value;
    this.status = REJECTED;
    this.failCallback.forEach(fn => fn());
  };

  // 返回一个promise
  then = (success?: (value: any) => any, fail?: (value: any) => any) => {

    success = typeof success === 'function' ? success : v => v;

    fail = typeof fail === 'function' ? fail : err => { throw err };

    const promise = new MyPromise((resolve, reject) => {

      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            resolve(success(this.value));
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            fail(this.value);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else {
        this.successCallback.push(() => setTimeout(() => {
          try {
            resolve(success(this.value));
          } catch (error) {
            reject(error)
          }
        }, 0));
        this.failCallback.push(() => setTimeout(() => {
          try {
            reject(fail(this.value));
          } catch (error) {
            reject(error);
          }
        }, 0))
      }
    })

    return promise;
  }

  // 多个异步并发获取最终的结果（如果有一个失败则返回此失败）
  static all(arr: Array<MyPromise>) {
    return new MyPromise((resolve, reject) => {
      const resArr = [];

      const getPromiseRes = (key, value) => {
        resArr[key] = value;
        if (resArr.length === arr.length) {
          resolve(resArr);
        }
      }

      for (let i = 0; i < arr.length; i++) {
        const promise = arr[i];
        if (promise.then && typeof promise.then === 'function') {
          promise.then((value) => getPromiseRes(i, value), reject);
        } else {
          getPromiseRes(i, promise);
        }
      }
    })
  }

  // 用来处理多个请求，返回最快的promise
  static race(promises: Array<MyPromise>) {
    return new Promise((resolve, reject) => {
      for (const promise of promises) {
        if (promise.then && typeof promise.then === 'function') {
          promise.then(resolve, reject);
        } else {
          resolve(promise);
        }
      }
    })
  };
}

// 基本使用测试
// new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1)
//   }, 0);
// }).then(() => console.log(2)).then(console.log, () => console.log(3))

// // Promise.all测试
// const promise1 = new MyPromise((resolve, reject) => {
//   resolve(1);
// })
// const promise2 = new MyPromise((resolve, reject) => {
//   resolve(2);
// })

// MyPromise.all([promise1, promise2]).then(console.log, console.log);

// Promise.race测试
// const promise3 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 1000);
// })
// const promise4 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(4);
//   }, 2000);
// })
// MyPromise.race([promise3, promise4]).then(console.log);