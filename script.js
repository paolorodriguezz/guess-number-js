// === ADIVINA EL NÚMERO ===
// El programa genera un número secreto entre 1 y 100
// El jugador intenta adivinarlo
/*
console.log('- Adivina el Número -');

// Generar número secreto
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

//temporal
console.log('(DEBUG) Número secreto:', numeroSecreto);

console.log('-----------------------');

let intento = prompt('Adivina el numero (1-100):');
intento = Number(intento);

console.log('Intento del jugador:', intento);
console.log('Tipo:', typeof intento);

console.log('-----------------------');

// - Pistas alto/bajo/correcto -
if (intento === numeroSecreto) {
    alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
    console.log('Resultado: ¡GANÓ!');
}else if (intento > numeroSecreto) {
    alert('📈 Muy alto. Intenta un número más bajo.');
    console.log('Resultado: muy alto');
}else {
    alert('📉 Muy bajo. Intenta un número más alto.');
    console.log('Resultado: muy bajo');
}

// - Segundo intento -
if (intento !== numeroSecreto) {
    let intento2 = prompt('Intenta de nuevo (1-100):');
    intento2 = Number(intento2);
if (intento2 === numeroSecreto) {
    alert('🎉 ¡Correcto en el segundo intento!');
}else if (intento2 > numeroSecreto) {
    alert('📈 Muy alto. El número era ' + numeroSecreto);
} else {
    alert('📉 Muy bajo. El número era ' + numeroSecreto);
}
}

console.log('-----------------------');

// AND (&&): ambas deben ser true
let edad = 25;
let tieneLicencia = true;
console.log(edad >= 18 && tieneLicencia);  // true

// OR (||): al menos una debe ser true
let esFeriado = false;
let esDomingo = true;
console.log(esFeriado || esDomingo);  // true (domingo es true)

// NOT (!): invierte el valor
let lloviendo = false;
console.log(!lloviendo);  // true (NO está lloviendo)

console.log('-----------------------');
*/

//VALIDACIONES DE ENTRADA DEL USUARIO
console.log('- Validación de Entrada -');

// === ADIVINA EL NÚMERO ===
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
console.log('(DEBUG) Número secreto:', numeroSecreto);

let intento = prompt('Adivina el número (1-100):');
intento = Number(intento);

if (isNaN(intento)) {
    alert('⚠️ Eso no es un número. Por favor ingresa un número del 1 al 100.');
}else if (intento < 1 || intento > 100) {
    alert('⚠️ El número debe estar entre 1 y 100.');
}else if (intento === numeroSecreto) {
    alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
}else if (intento > numeroSecreto) {
    alert('📈 Muy alto. Intenta un número más bajo.');
}else {
    alert('📉 Muy bajo. Intenta un número más alto.');
}

// --- Pista de cercanía ---
let diferencia = Math.abs(intento - numeroSecreto);
let cercanía = diferencia <= 10 ? '🔥 ¡Estás cerca!' : '❄️ Estás lejos';
console.log(cercanía);

// - Segundo intento (si no acertó) -
if (!isNaN(intento) && intento >= 1 && intento <= 100 && intento !== numeroSecreto) {
let intento2 = prompt('Intenta de nuevo (1-100):');
    intento2 = Number(intento2);

if (isNaN(intento2) || intento2 < 1 || intento2 > 100) {
    alert('⚠️ Entrada inválida. El número era ' + numeroSecreto);
} else if (intento2 === numeroSecreto) {
    alert('🎉 ¡Correcto en el segundo intento! El número era ' + numeroSecreto);
} else {
    let pista = intento2 > numeroSecreto ? 'alto' : 'bajo';
    alert(`Muy ${pista}. El número era ${numeroSecreto}`);
}
}