let arr=[12,4,54,1,5];
let i,j,current;
for (i = 1; i < arr.length; i++) {
  current=arr[i];
  j=i-1;
  while (j>=0 && arr[j]>current) {
    arr[j+1]=arr[j];
    j--;
  }
  arr[j+1]=current;
}
console.log(arr);
