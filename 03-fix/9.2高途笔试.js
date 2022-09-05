// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let row;
// const arr = [];

// //单行输入
// rl.on('line', function (data) {
//   var result = data.split(' '); //获取第一行的内容，存为数组
//   if (!row) {
//     row = result[0]
//   } else {
//     arr.push(result)
//   }
//   console.log(arr);
// }); 

function getQues(arr1, arr2, arr3) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  arr3.sort((a, b) => a - b);
  let res = [], path = [];
  for (let i = 0; i < arr1.length; i++) {
    path.push(arr1[i]);
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] <= arr1[i] || arr2[j] > arr1[i] * 2) {
        continue;
      }
      path.push(arr2[j]);
      for (let k = 0; k < arr3.length; k++) {
        if (arr3[k] <= arr2[j] || arr3[k] > arr2[j] * 2) {
          continue;
        }
        path.push(arr3[k]);
        if (path.length === 3) {
          res.push([...path]);
          path.pop();
        }
      }
      path.pop();
    }
    path.pop();
  }
  return res.length;
}