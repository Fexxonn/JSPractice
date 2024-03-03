let altura = 5;

for (let i = 0; i < altura; i++) {
  let piso = "";
  for (let j = 1; j < altura - i; j++) {
    piso = piso + " ";
  }
  for (let j = 0; j <= i + 1; j++) {
    piso = piso + "*";
  }
  for (let j = 0; j <= i - 1; j++) {
    piso = piso + "*";
  }
  console.log(piso);
}