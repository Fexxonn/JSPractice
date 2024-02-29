let diaSemana = 8;

if (diaSemana >= 1 && diaSemana <= 7) {
  if (diaSemana === 1) {
    console.log("Escogiste el dia Lunes");
  } else if (diaSemana === 2) {
    console.log("Escogiste el dia Martes");
  } else if (diaSemana === 3) {
    console.log("Escogiste el dia Miercoles");
  } else if (diaSemana === 4) {
    console.log("Escogiste el dia Jueves");
  } else if (diaSemana === 5) {
    console.log("Escogiste el dia Viernes");
  } else if (diaSemana === 6) {
    console.log("Escogiste el dia Sabado");
  } else if (diaSemana === 7) {
    console.log("Escogiste el dia Domingo");
  }
} else {
  console.log("Selecciona un día de la semana valido");
}
