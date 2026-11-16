// Inicializar iconos de Lucide
lucide.createIcons();

// Estado de la aplicación
const state = {
  men: 0,
  women: 0,
  get total() {
    return this.men + this.women;
  }
};

// Referencias a elementos del DOM
const dom = {
  countTotal: document.getElementById('count-total'),
  countMen: document.getElementById('count-men'),
  countWomen: document.getElementById('count-women'),
  btnMenPlus: document.getElementById('btn-men-plus'),
  btnMenMinus: document.getElementById('btn-men-minus'),
  btnWomenPlus: document.getElementById('btn-women-plus'),
  btnWomenMinus: document.getElementById('btn-women-minus'),
  btnReset: document.getElementById('btn-reset'),
  percentMen: document.getElementById('percent-men'),
  percentWomen: document.getElementById('percent-women')
};

// Función para animar cambio de valor
function triggerPulse(element) {
  element.classList.remove('pulse-anim');
  void element.offsetWidth; // Forzar reflujo
  element.classList.add('pulse-anim');
}

// Actualizar interfaz completa
function updateUI(changedKey = null) {

  // Valores numéricos
  dom.countTotal.textContent = state.total;
  dom.countMen.textContent = state.men;
  dom.countWomen.textContent = state.women;

  // Disparar animación
  if (changedKey === 'men') triggerPulse(dom.countMen);
  if (changedKey === 'women') triggerPulse(dom.countWomen);
  triggerPulse(dom.countTotal);

  // Bloquear botón restar si el valor es 0
  // (evitar negativos)
  dom.btnMenMinus.disabled = state.men <= 0;
  dom.btnWomenMinus.disabled = state.women <= 0;

  // Calcular porcentajes
  if (state.total > 0) {

    const pMen = Math.round(
      (state.men / state.total) * 100
    );

    const pWomen = 100 - pMen;

    dom.percentMen.textContent = `${pMen}%`;
    dom.percentWomen.textContent = `${pWomen}%`;

  } else {

    dom.percentMen.textContent = '0%';
    dom.percentWomen.textContent = '0%';

  }
}


// Event Listeners: Hombres

dom.btnMenPlus.addEventListener('click', () => {

  state.men += 1;

  updateUI('men');

});


dom.btnMenMinus.addEventListener('click', () => {

  if (state.men > 0) {

    state.men -= 1;

    updateUI('men');

  }

});


// Event Listeners: Mujeres

dom.btnWomenPlus.addEventListener('click', () => {

  state.women += 1;

  updateUI('women');

});


dom.btnWomenMinus.addEventListener('click', () => {

  if (state.women > 0) {

    state.women -= 1;

    updateUI('women');

  }

});


// Event Listener: Reiniciar

dom.btnReset.addEventListener('click', () => {

  if (
    state.total > 0 &&
    confirm('¿Deseas reiniciar todos los contadores a 0?')
  ) {

    state.men = 0;
    state.women = 0;

    updateUI();

  }

});


// Atajos de teclado opcionales
// H = añadir hombre
// M = añadir mujer

window.addEventListener('keydown', (e) => {

  if (e.key === 'h' || e.key === 'H') {
    dom.btnMenPlus.click();
  }

  if (e.key === 'm' || e.key === 'M') {
    dom.btnWomenPlus.click();
  }

});


// Render inicial
updateUI();