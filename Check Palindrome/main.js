let str = "level";
let start = 0;
let end = str.length - 1;
let result = true;
while (end > start) {
  if (str[start] !== str[end]) {
    result = false;
  }
  end--;
  start++;
}
console.log(result);
