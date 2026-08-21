var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let start = 1;
    let end = n;
    let mid = end;
    let result = n;

    while (start <= end) {
      mid = Math.floor((start + end) / 2);

      if (isBadVersion(mid)) {
        result = mid;
        end = mid - 1;
      } else start = mid + 1;
    }

    return result;
  };
};

const isBadVersion = (version: number) => version >= 4;

console.log("🚀 ~ solution:", solution(isBadVersion)(600));
