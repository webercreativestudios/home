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


// document.addEventListener("DOMContentLoaded", function () {
//     const elements = document.querySelectorAll(".image-side-about, .side-about");
//     let lastScrollTop = 0; // Variable to track the last scroll position

//     function handleScroll() {
//         const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

//         // Check if the element is in the viewport
//         elements.forEach((element) => {
//             const rect = element.getBoundingClientRect();
//             const screenHeight = window.innerHeight;

//             // If the element is in the viewport, add the 'show' class
//             if (rect.top < screenHeight - 100 && rect.bottom > 100) {
//                 element.classList.add("show");
//             } else {
//                 // Optionally remove the 'show' class when it goes out of view (if needed)
//                 // element.classList.remove("show");
//             }
//         });

//         // Update the last scroll position for future scroll direction check
//         lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative scroll values
//     }

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Run once on load to check if elements are already in view
// });



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

document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll('.about-list');
  
    // Function to animate the progress bar and the number
    function animateProgress() {
      progressBars.forEach(function (item) {
        const progressLabel = item.querySelector('.progress-label');
        const progressNumber = item.querySelector('.progress-number');
        const progressBar = item.querySelector('.progress-bar');
        const targetPercentage = parseInt(progressBar.getAttribute('data-progress'));
  
        // Check if the progress bar is already animated, to prevent re-animating
        if (progressBar.style.width !== `${targetPercentage}%`) {
          // Animate the progress bar width
          progressBar.style.width = targetPercentage + '%';
  
          // Animate the percentage number from 0 to the target value
          let currentValue = 0;
          const interval = setInterval(() => {
            if (currentValue < targetPercentage) {
              currentValue++;
              progressNumber.textContent = currentValue + '%';
            } else {
              clearInterval(interval);
            }
          }, 20); // Adjust speed here
        }
      });
    }
  
    // Function to check if the element is in view
    function checkIfInView() {
      progressBars.forEach(function (item) {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        // Trigger animation when element comes into view
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          item.querySelector('.progress-bar-container').style.opacity = 1; // Make progress bar visible
          animateProgress(); // Trigger the animation
        }
      });
    }
  
    // Listen for scroll events
    window.addEventListener("scroll", checkIfInView);
    checkIfInView(); // Check on page load as well
  });

  



  document.addEventListener("DOMContentLoaded", function () {
    const words = ["Quality", "Perfect", "Creative", "Modern"];
    const dynamicSpan = document.getElementById("dynamic-word");

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        charIndex--;
        dynamicSpan.textContent = currentWord.substring(0, charIndex);
      } else {
        charIndex++;
        dynamicSpan.textContent = currentWord.substring(0, charIndex);
      }

      let typingSpeed = isDeleting ? 60 : 100;

      if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500;
      }

      setTimeout(typeEffect, typingSpeed);
    }

    // Start animation
    typeEffect();
  });

