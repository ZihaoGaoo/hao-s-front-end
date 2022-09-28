function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const mid = Math.floor(left + (right - left) / 2);

  if (arr[mid] === target) return mid;

  return arr[mid] < target
    ? binarySearchRecursive(arr, target, mid + 1, right)
    : binarySearchRecursive(arr, target, left, mid - 1);
}

function binarySearchIterative(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

export default [binarySearchRecursive, binarySearchIterative];
