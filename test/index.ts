function subSequence(str: string): string[] {
  function helper(subStr: string, remStr: string): string[] {
    if (remStr.length == 0) return [subStr];

    const ch = remStr[0];
    const left = helper(subStr + ch, remStr.slice(1));
    console.log("🚀 ~ left:", left);
    const right = helper(subStr, remStr.slice(1));
    console.log("🚀 ~ right:", right);

    return [...left, ...right];
  }
  return helper("", str);
}

console.log("🚀 ~ subSequence:", subSequence("abc"));
