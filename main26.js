function holaMundo(params) {
  //Se imprime en consola con console.log()
  console.log("Hola Mundo");
  console.log("Saludos");
}

function vlDiferencia(params) {
  var miNumero3 = 15;

  console.log(miNumero3);

  let miNumero2 = 20;

  console.log(miNumero2);
}

function rnVariables() {
  //reglas de nombres de variables.
  //Camel Case, Snake Case, Pascal Case.
  //JavaScript es sensible a mayusculas y minusculas.
  //letras, $, _, posteriormente se pueden usar numeros.
  let $miNumero1 = 10;

  console.log($miNumero1);

  let _miNumero1 = 10;

  console.log(_miNumero1);

  let miNumero1 = 10;

  console.log(miNumero1);
}

function TDDatos() {
  //Tipos de datos en JS

  /*
Number -> Almacena valores numericos
Ej: 10, -40, 3.9, -15.66, etc...

String -> Almacena cadenas de caracteres
Ej: "Hola", "Chao", Etc...

Boolean -> Almacena un valor logico
Ej: true o flase

Null -> Ausencia de la referencia de un objeto
Ej: null

Undefined -> Ausencia de valor
Ej: undefined
*/

  //Tipo numerico
  let miEntero = 10;
  console.log(miEntero);

  let miFlotante = 7.9;
  console.log(miFlotante);

  //Tipo String
  let miCadena = "Hola";
  console.log(miCadena);

  //Tipo Boolean
  let miBoolean = true;
  console.log(miBoolean);

  //tipo Null

  let miNull = null;
  console.log(miNull);

  //Tipo Undefined

  let miUndefined = undefined;
  console.log(miUndefined);

  //Operador typeof

  console.log(typeof miEntero);
  console.log(typeof miCadena);
  console.log(typeof miBoolean);
  console.log(typeof miNull);
  console.log(typeof miUndefined);
}

function hoisting() {
  //Hoisting (Podemos usar una variables y despues declararla)
  // var es una palabra reservada global
  //El concepto de hoisting no funciona con las palabras reservadas let y var
  var x; // 1. Declarar la variable
  x = 10; // 2. Inicializar la variable
  console.log(x);
}

function constantes() {
  //Constantes en JS
  // Ej: const MI_CONSTANTE = <Valor>;
  //No se puede cambiar el valor de una constante
  const MI_CONSTANTE = 10;

  console.log(MI_CONSTANTE);
  console.log(Math.PI);

  //Constante de segundos por minuto
  const SEGUNDOS_POR_MINUTO = 60;
  console.log(SEGUNDOS_POR_MINUTO);
}

function Operadores() {
  //Operadores

  //Tipos de Operadores

  /*
- Aritmeticos
- Asignacion
- Comparacion
- Logicos
*/

  //Operadores Aritmeticos

  /*
+ Suma
- Resta
* Multiplicacion
/ Divicion
% Modulo (Residuo División)
** Potencia (Exponentes)
++ Incremento  Ej: x++ o ++x
-- Decremento Ej: x-- o --x
*/

  let a, b, c, d, e, f;
  //Suma
  a = 3 + 4;
  console.log(a);
  //Resta
  b = 6 - 2;
  console.log(b);

  //Multiplicación
  c = a * 2;
  console.log(c);
  //Divición
  d = b / 2.5;
  console.log(d);
  console.log(typeof d);

  //Modulo
  f = 9 % 2;
  console.log(f);

  //Potencia
  e = 2 ** 3; // 2 * 2 * 2 = 8 ||| e = Math.pow(2, 3);
  console.log(e);
}

function OpeIyD() {
  //Operadores Incremento / Decremento

  function Incremento() {
    c;
  }
}
