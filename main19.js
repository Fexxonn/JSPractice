let num1 = 25;
let num2 = 6;

let ope = "4";

switch (ope) {
  case "1":
    console.log("El resultado de tu suma es: ", num1 + num2);
    break;
  case "2":
    console.log("El resultado de tu resta es: ", num1 - num2);
    break;
  case "3":
    console.log("El resultado de tu multiplicación es: ", num1 * num2);
    break;
  case "4":
    if (num1 === 0 || num2 === 0) {
      console.log("No se puede dividir entre 0");
    } else {
      console.log("El resultado de tu división es: ", num1 / num2);
    }
    break;
  default:
    console.log("Agrega un numero entre el 1 y el 4 (1, 2, 3, 4)");
    break;
}
