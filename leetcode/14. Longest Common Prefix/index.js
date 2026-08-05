/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  let firstWord = strs[0];

  for (let i = 0; i < firstWord.length; i++) {
    const char = firstWord[i];
    for (let j = 1; j < strs.length; j++) {
      if (char != strs[j].charAt(i)) return prefix;
    }
    prefix += char;
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flght"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
