let str1 = "hello";
let str2 = "elloh";
let str1Obj = {};

function anagram(str1, str2) {
  if (str1.length === str2.length) {
    for (let ch of str1) {
      str1Obj[ch] = (str1Obj[ch] || 0) + 1;
    }
    // console.log(str1Obj);
    for (let ch of str2) {
      if (!str1Obj[ch]) {
        return false;
      }
      str1Obj[ch]--;
    }
    return true;
  }
}
console.log(anagram(str1,str2));
