let num1 = 10;
let num2 = 1;

const ope = ["suma", "resta", "multiplicacion", "division"];

let tOp = ope[3];

console.log(tOp);

if (tOp === ope[0]) {
  let sum = num1 + num2;
  console.log(sum);
} else if (tOp === ope[1]) {
  let res = num1 - num2;
  console.log(res);
} else if (tOp === ope[2]) {
  let mult = num1 * num2;
  console.log(mult);
} else if (tOp === ope[3]) {
  let div = num1 / num2;
  if (num1 === 0 || num2 === 0) {
    console.log("No se puede dividir entre 0 Introdusca valores validos");
  } else {
    console.log(div);
  }
}