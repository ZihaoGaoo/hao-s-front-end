/**
 * 得到最大字符数和最小字符数差
 */

function getMaxScore(arr) {
  let sorce = 0;
  for (const str of arr) {
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
      map.set(str[i], map.has(str[i]) ? map.get(str[i]) + 1 : 1);
    }

    const _arr = Array.from(map.values()).sort((a, b) => a - b);
    if (_arr.length < 2) {
      continue;
    }
    sorce = Math.max(sorce, _arr[_arr.length - 1] - _arr[0]);
  }
  console.log(sorce);
}
getMaxScore(['aaasdhjkas', 'aab', 'abcd', 'cccc', 'abacad'])

/**
 * 积雪高度
 */
function getHeightCount(arr, h) {
  const map = new Map();
  for (const [l, r] of arr) {
    for (let i = l; i < r; i++) {
      map.set(i, map.has(i) ? map.get(i) + 1 : 1);
    }
  }
  console.log(Array.from(map.values()).filter(n => n >= h).length);
}
// function getHeightCount(arr, h) {
//   const height = new Array(10 ** 5).fill(0);
//   for (const [l, r] of arr) {
//     for (let i = l; i < r; i++) {
//       height[i]++;
//     }
//   }
//   console.log(height.filter(n => n >= h).length);
// }