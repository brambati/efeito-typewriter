const frases = ['rápidos.', 'acessíveis.', 'que vendem.'];
const el = document.querySelector('#typewriter');

let phraseIndex = 0;   // frase atual
let charIndex = 0;     // caractere atual
let isDeleting = false;

function type() {
  const frase = frases[phraseIndex];

  if (!isDeleting) {
    el.textContent = frase.slice(0, ++charIndex);
    if (charIndex === frase.length) {
      isDeleting = true;
      return setTimeout(type, 1500); // pausa no fim da frase
    }
  } else {
    el.textContent = frase.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % frases.length;
    }
  }

  // digitar é mais lento que apagar, como uma pessoa real
  setTimeout(type, isDeleting ? 50 : 100);
}

// quem pediu menos movimento vê a primeira frase pronta
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  el.textContent = frases[0];
} else {
  type();
}
