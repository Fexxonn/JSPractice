let num1 = 12;
let num2 = 18;

for (let i = 0; i <= num1 + num2 / 2; i++) {
  if (num1 % i === 0 && num2 % i === 0) {
    console.log(i);
  }
}