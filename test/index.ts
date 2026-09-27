function mergeSort(arr: number[]): number[] {
  const n = arr.length;
  function helper(start: number, end: number) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    helper(start, mid);
    helper(mid + 1, end);

    merge(start, mid, end);
  }

  function merge(start: number, mid: number, end: number) {
    let i = start;
    let j = mid + 1;
    let k = 0;

    const newArr: number[] = [];
    while (i <= mid && j <= end) {
      if (arr[i] < arr[j]) {
        newArr[k++] = arr[i++];
      } else newArr[k++] = arr[j++];
    }

    while (i <= mid) {
      newArr[k++] = arr[i++];
    }
    while (j <= end) {
      newArr[k++] = arr[j++];
    }

    for (let l = 0; l < newArr.length; l++) {
      arr[start + l] = newArr[l];
    }
  }
  helper(0, n - 1);
  return arr;
}

console.log("🚀 ~ mergeSort:", mergeSort([5, 4, 3, 2, 1]));
