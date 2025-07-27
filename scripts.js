// Animar rotación de las flores al hacer scroll
window.addEventListener('scroll', function() {
    const flores = document.querySelectorAll('.flor');
    const scrollY = window.scrollY;
    flores.forEach((flor, i) => {
        // Rotación suave, diferente para cada flor
        const rotacion = (scrollY / 40) + (i * 100);
        flor.style.transform = `rotate(${rotacion}deg)`;
    });
});


document.body.addEventListener('touchmove', function(e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, { passive: false });
