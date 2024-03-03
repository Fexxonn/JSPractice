let num1 = 21;
let num2 = 5;
let num3 = 12;

if (num1 > num2) {
  [num1, num2] = [num2, num1];
  if (num1 > num3) {
    [num1, num3] = [num3, num1];
  }
  if (num2 > num3) {
    [num2, num3] = [num3, num2];
  }
}
console.log(num1, num2, num3);