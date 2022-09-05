/**
 * call
 */

Function.prototype._call = function(thisObj, ...arguments) {
  const fn = Symbol('fn')
  thisObj[fn] = this;
  thisObj[fn](...arguments);
  delete thisObj[fn]
}

const test = function(a, b, c) {
  console.log(this);
  console.log(a + b + c);
}

Function.prototype._apply = function(thisObj, arguments) {
  const fn = Symbol('fn');
  thisObj[fn] = this;
  thisObj[fn](...arguments);
  delete thisObj[fn];
}

Function.prototype._bind = function(thisObj, ...args) {
  const func = this;
  return function fn() {
    func.apply(this instanceof fn ? new func(...arguments) : thisObj, [...args, ...arguments])
  }
}