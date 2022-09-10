/**
 * 原型链继承
 * 将父类实例作为子类原型
 * 缺点：子类所有实例共用一个原型对象；修改引用数据类型数据会共享
 */
const protoExtend = function () {
  function Parent() {
    this.skill = ['sing', 'dance', 'rap']
  }

  Parent.prototype.age = 18;

  function Child() { }

  Child.prototype = new Parent();

  const child1 = new Child();

  const child2 = new Child();

  child1.skill.push('basketball');

  console.log(child2.skill);

  console.log(child1.age)

}
// protoExtend();


/**
 * 构造函数继承
 * 在子类中执行父类构造函数
 * 缺点：无法继承父类原型
 */
function constructExtend() {
  function Parent(name?: string) {
    this.skill = ['sing', 'dance', 'rap'];
    this.name = name || '🐔';
  }

  Parent.prototype.age = 18;

  function Child(name?: string) {
    Parent.call(this, name);
  }

  const child1 = new Child();

  const child2 = new Child('cxk');

  child1.skill.push('basketball');

  console.log(child1);

  console.log(child2);

  console.log(child1.age);


}
// constructExtend();

/**
 * 组合式继承
 * 结合以上两种
 * 缺点：父类函数被执行两次
 */
function combination() {
  let count = 0;

  function Parent(name?: string) {
    this.skill = ['sing', 'dance', 'rap'];
    this.name = name || '🐔';
    console.log(`baba被执行了${++count}次`);
  }

  Parent.prototype.age = 18;

  function Child(name?: string) {
    Parent.call(this, name);
  }

  Child.prototype = new Parent();

  const child = new Child();

  console.log(child, child.age);
}
// combination();

/**
 * 原型式继承
 * 返回指定原型对象的空对象，然后添加属性
 */
function protoObjExtend() {

  const parent = {
    skill: ['sing', 'dance', 'rap'],
    name: '🐔'
  }

  const child1 = Object.create(parent);

  const child2 = Object.create(parent);

  child1.skill.push('basketball');

  console.log(child2.skill);

}
// protoObjExtend();


/**
 * 寄生式继承
 * 直接返回添加好属性的对象，类似寄生构造函数和工厂模式
 */
 function parasitic() {
  const parent = {
    skill: ['sing', 'dance', 'rap'],
    name: '🐔'
  }
  const child = Object.create(parent, { name: { value: 'child', enumerable: true } });

  console.log(child);
 }
//  parasitic();

/**
 * 寄生式组合继承
 * ES5实现方式
 */
function paraAndComb() {

  let count = 0;

  function Parent(...args) {
    this.skill = ['sing', 'dance', 'rap'];
    console.log(`baba被执行了${++count}次`);
    for (const arg of args) {
      this[arg] = arg;
    }
  }

  Parent.prototype.age = 18;

  function Child(...args) { 
    Parent.apply(this, args);
  }

  Child.prototype = Object.create(Parent.prototype);

  const child1 = new Child('child1');

  const child2 = new Child('child2');

  child1.skill.push('basketball');

  console.log(child1);

  console.log(child2);
}
// paraAndComb();