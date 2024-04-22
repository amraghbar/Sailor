document.querySelector('.burger-icon').addEventListener('click', function() {
    var navbar = document.getElementById('nav');
    if (navbar.style.display === 'none') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
});
