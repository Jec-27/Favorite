// Toggle abrir/cerrar solo con click en el título
document.querySelectorAll(".card h3").forEach(title => {
  title.addEventListener("click", function(e) {
    e.stopPropagation(); // evita clicks fantasmas
    const card = this.parentElement;
    card.classList.toggle("active");
  });
});

// Carrusel
const carousel = document.querySelector(".carousel");
const images = carousel.querySelectorAll("img");
const prevBtn = carousel.querySelector(".prev");
const nextBtn = carousel.querySelector(".next");
let index = 0;
let interval;

function showImage(i) {
  images.forEach((img, idx) => img.classList.toggle("active", idx === i));
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}

// Botones manuales
nextBtn.addEventListener("click", () => {
  nextImage();
  resetInterval();
});

prevBtn.addEventListener("click", () => {
  prevImage();
  resetInterval();
});

// Intervalo automático
function startInterval() {
  interval = setInterval(nextImage, 6000); // 6 segundos
}

function resetInterval() {
  clearInterval(interval);
  startInterval();
}

// Inicializar
showImage(index);
startInterval();
