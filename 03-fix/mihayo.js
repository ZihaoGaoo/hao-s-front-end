// // 本题为考试多行输入输出规范示例，无需提交，不计分。
// var readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal:false
// });

// var n = -1;
// var cur_line = 0;
// rl.on('line', function(line){
//    if (n < 0) { 
//        n = parseInt(line.trim())
//    } else {
//       var arr = line.split(' ').map(v => parseInt(v));
//       cur_line += 1;
//    }
    
//    // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
//    if (n === cur_line) {
//        // 输出结果
//        // 重新初始化相关变量
//        n = -1;
//        ans = 0;
//        cur_line = 0;
//        console.log(arr)
//    }
// });

// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

function getMi(str, k) {
  function getMihoyo(str, k) {
    let index = str.indexOf('mihoyo');
    if (index === -1) return [];
    const arr = [];
    while (index !== -1) {
      arr.push(index);
      index = str.indexOf('mihoyo', index + 1);
    }
    return arr;
  }
  const arr = getMihoyo(str, k);
  if (arr.length < 2) return -1;
  let min = Number.MAX_SAFE_INTEGER;
  let a, b;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i + k - 1] - arr[i];
    if (num < min) {
      min = num;
      [a, b] = [arr[i], arr[i + k - 1]];
    }
  }
  a == undefined ? console.log(-1) : console.log([a, b + 5].join(' '));
}

// var n = -1;
// var cur_line = 0;
// var m, k;
// rl.on('line', function(line){
//    if (n < 0) { 
//       [m, k] = line.split(' ').map(v => parseInt(v));
//        n = 1;
//    } else {
//       var str = line;
//       cur_line += 1;
//    }
//    // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
//    if (1 === cur_line) {
//        cur_line = 0;
//        n = -1;
//        getMi(str, k);
//    }
// });


// var n = -1;
// var cur_line = 0;
// rl.on('line', function(line){
//    var n, k;
//    if (n < 0) { 
//       [n, k] = parseInt(line);
//    } else {
//       var str = line;
//       cur_line += 1;
//    }
    
//    // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
//    if (2 === cur_line) {
//        cur_line = 0;
//        getMi(str, k);
//    }
// });

function getMinCount(arr = [2, 3, 2, 3, 2]) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    while (arr[i] <= arr[i - 1]) {
      arr[i] = arr[i] * 2;
      count++;
    }
  }
  console.log(count);
}
// getMinCount();

function getLevel(arr) {
  const ji = [], ou = [];
  arr.forEach(num => {
    num % 2 === 0 ? ou.push(num) : ji.push(num);
  });
  const res = [];
  var len, short;
  if (ou.length > ji.length) {
    len = ou;
    short = ji;
  } else {
    len = ji;
    short = ou;
  }
  const length = short.length;
  for (let i = 0; i < length; i++) {
      res.push(len.pop());
      res.push(short.pop());
  }
  if (len.length) {
    res.push(...len);
  }
  console.log(res);
}