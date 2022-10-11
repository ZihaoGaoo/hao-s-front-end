async function test() {
  const res = await 1;
  console.log(res);
}

async function test1() {
  const res = await Promise.resolve(2);
  console.log(res);
}

async function test2() {
  const res = await new Promise((resolve) => resolve(3));
  console.log(res);
}



test1();
test2();
test()
console.log('start');