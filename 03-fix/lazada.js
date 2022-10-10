// "12345678","12345678"
function bigIntAddd(n1, n2) {
  const len1 = n1.length,
    len2 = n2.length,
    len = Math.max(len1, len2);
  let sum = '',
    pre = 0;
  for (let i = len - 1; i >= 0; i--) {
    const num1 = n1[i] ? parseInt(n1[i]) : 0,
      num2 = n2[i] ? parseInt(n2[i]) : 0;
    const add = num1 + num2 + pre;
    sum = (add % 10) + sum;
    pre = Math.floor(add / 10);
  }
  return sum;
}
// console.log(bigIntAdd("12345678","12345678"));
// console.log(bigIntAdd('', ''));

function maxPathSum(root) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  const max = (node) => {
    if (node === null) return 0;
    let left = Math.max(max(node.left), 0),
      right = Math.max(max(node.right), 0);
    maxSum = Math.max(maxSum, node.val + left + right);
    return node.val + Math.max(left, right);
  };
  max(root);
  return maxSum;
}

function bigIntAdd(n1, n2) {
  const addBig = (n1, n2) => {
    let i = n1.length - 1,
      j = n2.length - 1,
      res = '',
      add = 0;
    while (i >= 0 || j >= 0 || add) {
      let now1 = i < 0 ? 0 : n1.charAt(i) - '0',
        now2 = j < 0 ? 0 : n2.charAt(j) - '0';
      let nowSum = add + now1 + now2;
      res = (nowSum % 10) + res;
      add = nowSum > 9 ? 1 : 0;
      i--;
      j--;
    }
    return res;
  };

  const minus = (n1, n2) => {
    let i = n1.length - 1,
      j = n2.length - 1,
      res = '',
      minus = 0;
    while (i >= 0 || j >= 0) {
      let now1 = i < 0 ? 0 : n1.charAt(i) - '0',
        now2 = j < 0 ? 0 : n2.charAt(j) - '0';
      let nowMinus = now1 - now2 - minus;
      if (nowMinus >= 0) {
        res = nowMinus + res;
        minus = 0;
      } else {
        res = 10 + nowMinus + res;
        minus = 1;
      }
      i--;
      j--;
    }
    while (res[0] === '0') {
      res = res.slice(1);
    }
    return res;
  };

  const compare = (n1, n2) => {
    let l1 = n1.length,
      l2 = n2.length;
    if (l1 > l2) {
      return true;
    } else if (l1 < l2) {
      return false;
    } else {
      let i = 0;
      while (i <= l1) {
        if (n1[i] > n2[i]) {
          return true;
        } else if (n1[i] < n2[i]) {
          return false;
        } else {
          i++;
        }
      }
    }
    return true;
  };
  if (n1[0] !== '-' && n2[0] !== '-') {
    return addBig(n1, n2);
  }
  if (n1[0] === '-' && n2[0] === '-') {
    return '-' + addBig(n1.slice(1), n2.slice(1));
  }
  if (n1[0] === '-' && n2[0] !== '-') {
    if (compare(n1.slice(1), n2)) {
      return '-' + minus(n1.slice(1), n2);
    } else {
      return minus(n2, n1.slice(1));
    }
  }
  if (n1[0] !== '-' && n2[0] === '-') {
    if (compare(n1, n2.slice(1))) {
      return minus(n1, n2.slice(1));
    } else {
      return '-' + minus(n2, n1.slice(1));
    }
  }
}

// function lengthOfLongestSubstring(s) {
//   if (s.length < 2) return s.length;
//   let left = 0, right = left + 1;
//   const set = new Set([s[left]]);
//   let max = 0;
//   while (right < s.length) {
//     set.add(s[right]);
//     if (set.size === (right - left + 1)) {
//       max = Math.max(max, set.size);
//     } else {

//     }
//     right++;
//   }
// }

function lengthOfLongestSubstring(s) {
  const set = new Set();
  let right = -1,
    res = 0;
  for (let i = 0; i < s.length; i++) {
    if (i !== 0) set.delete(s.charAt(i - 1));
    while (right + 1 < s.length && !set.has(s.charAt(right + 1))) {
      set.add(s.charAt(right + 1));
      right++;
    }
    res = Math.max(res, right - i + 1);
  }
  return res;
}
