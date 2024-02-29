let n1 = 20;
let n2 = 20;
let operation = "resta";

if (operation === "suma") {
  let suma = n1 + n2;
  console.log(suma);
} else if (operation === "resta") {
  let resta = n1 - n2;
  console.log(resta);
} else if (operation === "multiplicacion") {
  let multiplicacion = n1 * n2;
  console.log(multiplicacion);
} else if (operation === "divicion") {
  if (n1 === 0) {
    console.log("No se puede realizar la operacion");
  } else if (n2 === 0) {
    console.log("No se puede realizar la operacion");
  } else {
    let divicion = n1 / n2;
    console.log(divicion);
  }
} else {
  console.log("No se sabe que tipo de operacion se va a ahcer");
}
