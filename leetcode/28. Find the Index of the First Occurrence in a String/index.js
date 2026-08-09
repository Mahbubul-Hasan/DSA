/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const index = haystack.indexOf(needle);
  return index;
};
console.log("🚀 ~ strStr:", strStr("sadbutsad", "sad"));
console.log("🚀 ~ strStr:", strStr("leetcode", "leeto"));
