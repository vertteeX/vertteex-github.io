document.addEventListener("mousemove", function (e) {
  createHeart(e);
});

function createHeart(e) {
  const heart = document.createElement("div");
  heart.className = "heart";
  document.body.appendChild(heart);

  // Cambios para usar la imagen en lugar de las estrellas
  heart.style.backgroundImage = 'url("corazon-span.png")';
  heart.style.backgroundSize = 'cover';
  heart.style.width = '30px';
  heart.style.height = '30px';

  const x = e.clientX - 15; // Ajusta según el tamaño de la imagen
  const y = e.clientY - 15;

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  // Agregar animaciones
  heart.style.animation = 'fall 4s linear infinite, blink 0.3s infinite';
  heart.style.transform = `rotate(${Math.random() * 360}deg)`;

  setTimeout(() => {
      heart.remove();
  }, 3000);
}
