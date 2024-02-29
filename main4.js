let pisos = 5;

for (let i = 0; i < pisos; i++) {
  let NumPisos = "";
  for (let j = 0; j < i + 1; j++) {
    NumPisos = NumPisos + "*";
  }
  console.log(NumPisos);
}
