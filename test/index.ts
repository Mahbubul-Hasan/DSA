function skipChar(str: string): string {
  function helper(subStr: string, result: string): string {
    if (subStr.length == 0) return result;
    if (subStr[0] != "a") result += subStr[0];
    subStr = subStr.slice(1);
    return helper(subStr, result);
  }
  return helper(str, "");
}

console.log("🚀 ~ skipChar:", skipChar("baccad"));
