document.addEventListener("DOMContentLoaded", function() {
    const menuLabel = document.querySelector('.menu-label');
    const mobileMenuLinks = document.querySelector('.mobile-menu .nav-links');

    menuLabel.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que o clique se propague
        // Alterna a exibição do menu
        if (mobileMenuLinks.style.display === "block") {
            mobileMenuLinks.style.display = "none";
        } else {
            mobileMenuLinks.style.display = "block";
        }
    });

    // Ocultar o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!menuLabel.contains(event.target) && !mobileMenuLinks.contains(event.target)) {
            mobileMenuLinks.style.display = "none";
        }
    });
});

    document.getElementById('menu-toggle').addEventListener('click', function() {
        this.querySelector('.hamburger').classList.toggle('active');
        document.querySelector('.mobile-menu').classList.toggle('active');
 });
