document.addEventListener("DOMContentLoaded", function () {
    const serviceSection = document.querySelector(".card-side-services");
    const services = document.querySelectorAll(".card-service");

    function handleScroll() {
        const sectionPosition = serviceSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        
        if (sectionPosition < screenHeight - 100 && sectionPosition > -screenHeight / 2) {
            serviceSection.classList.add("show");
            services.forEach((service, index) => {
                setTimeout(() => {
                    service.classList.add("show");
                }, index * 150); // Delay for staggered effect
            });
        } else {
            serviceSection.classList.remove("show");
            services.forEach(service => service.classList.remove("show"));
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case elements are already in view
});



document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".image-side-about, .side-about");

    function handleScroll() {
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const screenHeight = window.innerHeight;

            if (rect.top < screenHeight - 100 && rect.bottom > 100) {
                element.classList.add("show");
            } else {
                element.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load to check initial visibility
});


document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll(".card-project");

    function handleProjectScroll() {
        projectItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const screenHeight = window.innerHeight;

            if (rect.top < screenHeight - 100) {
                item.classList.add("show");
            } else {
                item.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", handleProjectScroll);
    handleProjectScroll(); // Run on page load
});


function toggleMenu() {
    const options = document.querySelector('.options');
    const menuToggle = document.querySelector('.menu-toggle');

    // Toggle the dropdown menu visibility
    options.classList.toggle('show');
    
    // Toggle the "open" class to animate the hamburger to a cross
    menuToggle.classList.toggle('open');
}

