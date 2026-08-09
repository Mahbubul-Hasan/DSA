/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const newStrArr = s.trim().split(" ");
  return newStrArr[newStrArr.length - 1].length;
};

console.log("🚀 ~ lengthOfLastWord:", lengthOfLastWord("Hello World"));
console.log(
  "🚀 ~ lengthOfLastWord:",
  lengthOfLastWord("   fly me   to   the moon  "),
);
console.log(
  "🚀 ~ lengthOfLastWord:",
  lengthOfLastWord("luffy is still joyboy"),
);
