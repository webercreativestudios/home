function toggleMenu() {
    const options = document.querySelector('.options');
    const menuToggle = document.querySelector('.menu-toggle');

    // Toggle the dropdown menu visibility
    options.classList.toggle('show');
    
    // Toggle the "open" class to animate the hamburger to a cross
    menuToggle.classList.toggle('open');
}