const pilares = document.querySelectorAll('.pilar');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1 // Alterado para 0.1 para uma animação mais suave
});

pilares.forEach(pilar => {
    observer.observe(pilar);
});
