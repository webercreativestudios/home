document.addEventListener("DOMContentLoaded", function () {
    const serviceSection = document.querySelector(".card-side-services");
    const services = document.querySelectorAll(".card-service");

    let lastScrollTop = 0; // Variable to track the last scroll position

    function handleScroll() {
        const sectionPosition = serviceSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        // Check if the section is in the viewport
        if (sectionPosition < screenHeight - 100 && sectionPosition > -serviceSection.offsetHeight / 2 && !serviceSection.classList.contains('show')) {
            serviceSection.classList.add("show");
            services.forEach((service, index) => {
                setTimeout(() => {
                    service.classList.add("show");
                }, index * 150); // Delay for staggered effect
            });
        }

        // Update the last scroll position to the current scroll position
        lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load to check if already in view
});


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".image-side-about, .side-about");
    let lastScrollTop = 0; // Variable to track the last scroll position

    function handleScroll() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Check if the element is in the viewport
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const screenHeight = window.innerHeight;

            // If the element is in the viewport, add the 'show' class
            if (rect.top < screenHeight - 100 && rect.bottom > 100) {
                element.classList.add("show");
            } else {
                // Optionally remove the 'show' class when it goes out of view (if needed)
                // element.classList.remove("show");
            }
        });

        // Update the last scroll position for future scroll direction check
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative scroll values
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load to check if elements are already in view
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

