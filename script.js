// ========== VARIABLES GLOBALES ==========
let mejorPuntaje = localStorage.getItem('mejorPuntaje') ? parseInt(localStorage.getItem('mejorPuntaje')) : null;
let numeroSecreto = null;
let intentos = 0;
let juegoTerminado = false;
let minRango = 1;
let maxRango = 100;
const LIMITE_INTENTOS = 10;
// ========== ELEMENTOS DEL DOM (const) ==========
const inputIntento = document.getElementById('inputIntento');
const btnAdivinar = document.getElementById('btnAdivinar');
const btnReiniciar = document.getElementById('btnReiniciar');
const mensaje = document.getElementById('mensaje');
const pista = document.getElementById('pista');
const contador = document.getElementById('contador');
const rango = document.getElementById('rango');
const historial = document.getElementById('historial');
const historialContainer = document.getElementById('historialContainer');
const gameCard = document.getElementById('gameCard');
const mejorPuntajeSpan = document.getElementById('mejorPuntaje');
const limiteSpan = document.getElementById('limite');
// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', () => {
    reiniciarJuego();
    configurarEventos();
});
// ========== FUNCIONES PRINCIPALES ==========
/*Inicializa o reinicia el juego*/
function reiniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    minRango = 1;
    maxRango = 100;
    juegoTerminado = false;
    // Limpiar UI
    mensaje.textContent = '';
    mensaje.className = 'mensaje';
    pista.textContent = '';
    pista.className = 'pista';
    inputIntento.value = '';
    inputIntento.disabled = false;
    btnAdivinar.disabled = false;
    btnReiniciar.style.display = 'none';
    historial.innerHTML = '';
    historialContainer.style.display = 'none';
    gameCard.classList.remove('celebracion-ganador');
    // Actualizar contadores
    contador.textContent = '0';
    rango.textContent = '1 - 100';
    limiteSpan.textContent = LIMITE_INTENTOS;
    // Focus en el input
    inputIntento.focus();
    console.log('(DEBUG) Número secreto:', numeroSecreto);
}
/*Configura los event listeners*/
function configurarEventos() {
    btnAdivinar.addEventListener('click', verificarIntento);
    inputIntento.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !juegoTerminado) {
            verificarIntento();
        }
    });
    btnReiniciar.addEventListener('click', reiniciarJuego);
}
/*Verifica el intento del jugador*/
function verificarIntento() {
    const intento = Number(inputIntento.value);
    // Validaciones de entrada
    if (!intento || isNaN(intento)) {
        mostrarMensaje('⚠️ Por favor ingresa un número válido', '');
        return;
    }
    if (intento < 1 || intento > 100) {
        mostrarMensaje('⚠️ El número debe estar entre 1 y 100', '');
        return;
    }
    if (intento < minRango || intento > maxRango) {
        mostrarMensaje(
            `⚠️ El número está fuera del rango válido (${minRango} - ${maxRango})`,
            ''
        );
        return;
    }
    // Procesar intento válido
    intentos++;
    contador.textContent = intentos;
    agregarAlHistorial(intento);
    // Verificar si es la respuesta correcta
    if (intento === numeroSecreto) {
        ganarJuego();
        return;
    }
    // Verificar Game Over
    if (verificarGameOver()) {
        return;
    }
    // Actualizar rango y mostrar pista
    if (intento > numeroSecreto) {
        maxRango = intento - 1;
        mostrarMensaje('📈 Muy alto', calcularPista(intento));
        mensaje.classList.add('alto');
    } else {
        minRango = intento + 1;
        mostrarMensaje('📉 Muy bajo', calcularPista(intento));
        mensaje.classList.add('bajo');
    }
    actualizarRango();
    inputIntento.value = '';
    inputIntento.focus();
}
/**
 * Verifica si el juego terminó (Game Over)
 * @returns {boolean} true si es Game Over, false en caso contrario
 */
function verificarGameOver() {
    if (intentos >= LIMITE_INTENTOS) {
        juegoTerminado = true;
        mostrarMensaje(
            `💀 GAME OVER - El número era ${numeroSecreto}`,
            `Alcanzaste el límite de ${LIMITE_INTENTOS} intentos`
        );
        mensaje.classList.add('alto');
        inputIntento.disabled = true;
        btnAdivinar.disabled = true;
        btnReiniciar.style.display = 'block';
        return true;
    }
    return false;
}
/**
 * Muestra un mensaje en la pantalla
 * @param {string} texto - Texto del mensaje principal
 * @param {string} subTexto - Texto de la pista o subtexto
 */
function mostrarMensaje(texto, subTexto) {
    mensaje.textContent = texto;
    pista.textContent = subTexto;
}
/**
 * Calcula y retorna la pista de cercanía
 * @param {number} intento - El número ingresado por el jugador
 * @returns {string} La pista de cercanía
 */
function calcularPista(intento) {
    const diferencia = Math.abs(intento - numeroSecreto);
    if (diferencia <= 5) {
        pista.classList.add('cerca');
        return '🔥 ¡Estás muy cerca!';
    } else if (diferencia <= 10) {
        pista.classList.add('cerca');
        return '🔥 ¡Estás cerca!';
    } else if (diferencia <= 20) {
        pista.classList.remove('cerca');
        pista.classList.add('lejos');
        return '🌡️ Estás en el camino...';
    } else {
        pista.classList.remove('cerca');
        pista.classList.add('lejos');
        return '❄️ Estás bastante lejos';
    }
}
/*Maneja el evento de ganar*/
function ganarJuego() {
    juegoTerminado = true;
    mostrarMensaje(`🎉 ¡Correcto! El número era ${numeroSecreto}`, '');
    mensaje.classList.add('correcto');
    // Agregar celebración visual a la tarjeta
    gameCard.classList.add('celebracion-ganador');
    // Actualizar mejor puntaje
    if (mejorPuntaje === null || intentos < mejorPuntaje) {
        mejorPuntaje = intentos;
        localStorage.setItem('mejorPuntaje', mejorPuntaje);
        mejorPuntajeSpan.textContent = mejorPuntaje;
    }
    // Calcular desempeño
    let desempeño = '';
    if (intentos === 1) {
        desempeño = '¡Impresionante! ¡Lo adivinaste a la primera!';
    } else if (intentos <= 3) {
        desempeño = '¡Excelente! Muy pocos intentos.';
    } else if (intentos <= 7) {
        desempeño = '¡Bien! Seguiste una buena estrategia.';
    } else {
        desempeño = 'Necesitabas varios intentos, ¡pero lo lograste!';
    }
    setTimeout(() => {
        pista.textContent = `${desempeño} (${intentos} intento${intentos !== 1 ? 's' : ''})`;
        pista.style.color = '#27ae60';
    }, 500);
    inputIntento.disabled = true;
    btnAdivinar.disabled = true;
    btnReiniciar.style.display = 'block';
}
/* Actualiza el rango mostrado en pantalla*/
function actualizarRango() {
    rango.textContent = `${minRango} - ${maxRango}`;
}
/**
 * Agrega un intento al historial visual
 * @param {number} intento - El número del intento
 */
function agregarAlHistorial(intento) {
    if (historialContainer.style.display === 'none') {
        historialContainer.style.display = 'block';
    }
    const badge = document.createElement('div');
    badge.className = 'intento-badge';
    badge.textContent = intento;
    if (intento === numeroSecreto) {
        badge.classList.add('correcto');
    } else if (intento > numeroSecreto) {
        badge.classList.add('alto');
    } else {
        badge.classList.add('bajo');
    }
    historial.appendChild(badge);
}
// Mostrar mejor puntaje guardado al cargar
window.addEventListener('load', () => {
    if (mejorPuntaje !== null) {
        mejorPuntajeSpan.textContent = mejorPuntaje;
    }
});