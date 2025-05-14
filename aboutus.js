function toggleNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");

  navbar.classList.toggle("expanded");
  hamburger.classList.toggle("active");
}


document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-list');
  
    faqItems.forEach((faqItem) => {
      const question = faqItem.querySelector('.faq-question');
      const answer = faqItem.querySelector('.faq-answer');
      const toggle = faqItem.querySelector('.faq-toggle');
  
      // Initially hide all answers and set toggle as "+"
      answer.style.display = 'none';
      toggle.textContent = '+';
  
      question.addEventListener('click', () => {
        // Toggle the visibility of the answer
        const isOpen = answer.classList.toggle('show');
  
        // Show or hide the answer based on the 'show' class
        answer.style.display = isOpen ? 'block' : 'none';
  
        // Change the toggle text between "+" and "−"
        toggle.textContent = isOpen ? '−' : '+';
  
        console.log('clicked');
      });
    });
  });
  