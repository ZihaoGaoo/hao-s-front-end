/**
 * 1. 0.1 + 0.2 = 0.30000000000000004
 * 因为十进制转二进制的有限数字超过52位了，无法精确存储
 *
 * toString(num) => 转换成num进制
 *
 * toFixed(num) => 四舍五入为指定小数位数
 */

/**
 * 2. try catch
 */

async function Err() {
  throw new Error(0);
}

const obj = {
  async A() {
    try {
      await Err();
    } catch (error) {
      console.log('A');
    }
  },
  async B() {
    try {
      Err();
    } catch (error) {
      console.log('B');
    }
  },
  async C() {
    try {
      return Err();
    } catch (error) {
      console.log('C');
    }
  },
};

// try {
//   obj.A();
//   obj.B();
//   obj.C()
// } catch (error) {
//   console.log('D');
// }

/**
 * 3. this作用域
 */
value = 0;
function test1() {
  const arrowFn = () => console.log(this.value);
  arrowFn();
}

function test2() {
  const arrowFn = () => console.log(this.value);
  return arrowFn;
}
const obj1 = {
  value: 1,
  fn: test1
}
const obj2 = {
  value: 1,
  fn: test2()
}
// obj1.fn();
// obj2.fn();