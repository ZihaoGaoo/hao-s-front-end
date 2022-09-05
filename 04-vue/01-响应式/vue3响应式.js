/**
 * vue3通过proxy直接代理整个对象
 */
const obj = {
  name: 'gao',
  baseInfo: {
    age: 12,
    sex: 'male',
  },
};
const proxy = new Proxy(obj, {
  set: function (target, key, value, reveive) {
    if (value === target[key]) return true;
    const result = Reflect.set(target, key, value, reveive);
    console.log('render');
    return result;
  },
  get: function (target, key, reveive) {
    const oweKeys = Reflect.ownKeys(target);
    if (oweKeys.includes(key)) {
      console.log(key);
    }
    const result = Reflect.get(target, key, reveive);
    console.log(result, 'result');
    return result;
  },
});
