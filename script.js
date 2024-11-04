// JavaScript animation for box-shadow on hover
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.boxShadow = '0px 4px 0px 0px #00ff99';
    });
    link.addEventListener('mouseout', () => {
        link.style.boxShadow = 'none';
    });
});
