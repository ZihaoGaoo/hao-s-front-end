/**
 * Proxy
 * 代理对象
 *
 * Reflect
 * 用来操作对象
 * 1. Reflect含有Object中语言内部的方法
 * 2. 修改Object某些方法的返回值
 */

function selfish(target) {
  const cache = new WeakMap();
  return new Proxy(target, {
    get(target, key) {
      const fn = Reflect.get(target, key);
      if (typeof fn !== 'function') return fn;
      !cache.has(fn) && cache.set(fn, fn.bind(target));
      return cache.get(fn);
    },
  });
}

class Logger {
  name = 'logger';
  print() {
    console.log(this.name);
  }
}

const { print: print1 } = new Logger();

const { print: print2 } = selfish(new Logger());

try {
  print1();
} catch (error) {
  console.log('````````````````````````````````````')
  console.log(error);
  console.log('````````````````````````````````````')
}

print2();