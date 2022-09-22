// function getLine(arr, m) {
//   const getMax = arr => {
//     let max = Number.MIN_SAFE_INTEGER, maxIndex = -1;
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === 'string') continue;
//       if (arr[i] > max) {
//         max = arr[i];
//         maxIndex = i;
//       }
//     }
//     return maxIndex;
//   }
//   let flag = 'A';
//   while (arr.some(v => typeof v === 'number')) {
//     const index = getMax(arr);
//     arr[index] = flag;
//     let left = right = index;
//     let leftm = rightm = m;
//     while ((--left >= 0) && leftm) {
//       if (typeof arr[left] === 'number') {
//         arr[left] = flag;
//         leftm--;
//       }
//     }
//     while ((++right < arr.length) && rightm) {
//       if (typeof arr[right] === 'number') {
//         arr[right] = flag;
//         rightm--;
//       }
//     }
//     flag = flag === 'A' ? 'B' : 'A'
//   }
//   console.log(arr.join(''));
// }

// / / getLine([3, 6, 1, 7, 2, 5, 4], 0)
// getLine([4, 8, 9, 10, 7, 6, 5, 3, 2, 1], 2)