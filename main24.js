let num1 = 21;
let num2 = 5;
let num3 = 12;

if (num1 > num2 && num1 > num3) {
  if (num1 > num2 && num1 < num3) {
    console.log("El segundo numero mayor es", num1);
  } else if (num1 < num2 && num1 < num3) {
    console.log("El numero menor es", num1);

  }
  if (num2 > num1 && num2 < num3) {
    console.log("El segundo numero mayor es", num2);
  } else if (num2 < num1 && num2 < num3) {
    console.log("El numero menor es", num2);
  }
  if (num3 > num1 && num3 < num1) {
    console.log("El segundo numero mayor es", num3);
  } else if (num3 < num1 && num3 < num2) {
    console.log("El numero menor es", num3);
  }
  if (num1 === num2 && num1 === num3 && num2 === num3) {
    console.log("los tres numeros son iguales");
  }
}
if (num2 > num1 && num2 > num3) {
  if (num2 > num1 && num2 < num3) {
    return "El segundo numero mayor es", num2;
  } else if (num2 < num1 && num2 < num3) {
    return "El numero menor es", num2;
  }
}
if (num3 > num1 && num3 > num2) {
  if (num3 > num1 && num3 < num1) {
    console.log("El segundo numero mayor es", num3);
  } else if (num3 < num1 && num3 < num2) {
    console.log("El numero menor es", num3);
  }
}
if (num1 === num2 && num1 === num3 && num2 === num3) {
  console.log("los tres numeros son iguales");
}


console.log(num1, num2, num3);