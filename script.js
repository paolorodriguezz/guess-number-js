let nombre = 'Paolo';
let edad = 18;
let estaAprendiendo = true;

console.log('mi nombre: ' + nombre);
console.log('mi edad: ' + edad);
console.log('estoy aprendiendo: ' + estaAprendiendo);

console.log('Tipos de datos: ');
console.log(typeof nombre); //tipo: string
console.log(typeof edad); //tipo: number
console.log(typeof estaAprendiendo); //tipo: boolean

console.log('-----------------------------');

const curso = 'Code 101';
const maxIntentos = 10;
//const maxIntentos = 20

console.log('curso: ' + curso);
console.log('máximo de intentos: ' + maxIntentos);

console.log('-----------------------------');

let nombreUsuario = prompt('¿Cómo te llamas?');
let edadUsuario = prompt('¿Cuantos años tienes?');

alert('Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años');

console.log('Nombre: ' + nombreUsuario);
console.log('Edad: ' + edadUsuario);
console.log(typeof edadUsuario); //prompt siempre devuelve string, incluso si el usuario ingresa un número.

console.log('-----------------------------');

let a = 20;
let b = 7;

console.log('Suma: ', a + b);
console.log('Resta: ', a - b);
console.log('Multiplicación: ', a * b);
console.log('División: ', a / b);
console.log('Módulo: ', a % b);

console.log('-----------------------------');
console.log('que resultados esperamos?');

console.log('5' + 3);
console.log(5 + 3);
console.log('5' - 3);

console.log('-----------------------------');
//Forma 1
let saludo1 = 'Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.';
console.log(saludo1);
//Forma 2
let saludo2 = `Hola ${nombreUsuario}, tienes ${edadUsuario} años.`;
console.log(saludo2);

//Calculadora de edad
let añoActual = 2026;
let añoNacimiento = añoActual - Number(edadUsuario);


// Completa el mensaje usando template literals:
let mensaje = `Hola ${nombreUsuario}, naciste aproximadamente en ${añoNacimiento}.`;