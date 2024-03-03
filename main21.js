function contarRango(num1, num2) {
  let nums;
  let box = [];

  for (let i = num1 + 1; i < num2; i++) {
    box.push(i);

    nums = box.length;
  }

  return nums;
}
console.log(contarRango(3, 10));
