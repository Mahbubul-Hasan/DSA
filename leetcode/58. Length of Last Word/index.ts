function lengthOfLastWord1(s: string): number {
  const newStrArr = s.trim().split(" ");
  return newStrArr[newStrArr.length - 1].length;
}

console.log("🚀 ~ lengthOfLastWord1:", lengthOfLastWord1("Hello World"));
console.log(
  "🚀 ~ lengthOfLastWord1:",
  lengthOfLastWord1("   fly me   to   the moon  "),
);
console.log(
  "🚀 ~ lengthOfLastWord1:",
  lengthOfLastWord1("luffy is still joyboy"),
);
