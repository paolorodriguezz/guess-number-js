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

alert('Hola ' + [nombre] + ', tienes ' + [edad] + ' años');

console.log('Nombre: ' + nombreUsuario);
console.log('Edad: ' + edadUsuario);
console.log(typeof edadUsuario); //prompt siempre devuelve string, incluso si el usuario ingresa un número.