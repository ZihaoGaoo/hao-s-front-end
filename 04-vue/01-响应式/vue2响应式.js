/**
 * 主要是用Object.defineProperty方法为每个对象属性修改set方法；数组是直接将修改的数组方法对象作为原型对象
 */

let selfProto;

// 对数组原型上方法进行加工
function getProto() {
  if (!selfProto) {
    selfProto = Object.create(Array.prototype);
    ['push', 'pop', 'shift', 'unshift', 'splice', 'sort'].forEach((func) => {
      selfProto[func] = function () {
        Array.prototype[func].call(this, ...arguments);
        updateView();
      };
    });
  }
  return selfProto;
}

// 添加响应式对象
function observer(target) {
  if (typeof target !== 'object' || target === null) {
    return target;
  }
  if (Array.isArray(target)) {
    target.__proto__ = getProto();
  }
  for (const key in target) {
    defineReactive(target, key, target[key]);
  }
}

// 监听对象的属性
function defineReactive(target, key, value) {
  observer(value);
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      observer(newValue);
      if (value !== newValue) {
        value = newValue;
        updateView();
      }
    },
  });
}

function updateView() {
  console.log('触发视图');
}

const obj = {
  name: 'test',
  city: {
    name: ['beijing', 'wuhan'],
  },
  baseInfo: {
    age: 20,
    sex: 'male',
  },
};

observer(obj);
