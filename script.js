// Scroll to Top Button Functionality
window.addEventListener('scroll', function () {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Smooth Scroll to Section Function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Add animation delay to elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.custom-card, .skill-card, .project-card');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible + 100) {
            element.style.animation = 'fadeIn 0.6s ease-in-out';
        }
    });
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function () {
    // Add fade-in animation to hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.animation = 'fadeIn 1s ease-in-out';
    }

    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);

    // Initial call to animate visible elements
    animateOnScroll();
});

// Add typing effect to hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing effect on load
document.addEventListener('DOMContentLoaded', function () {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        setTimeout(() => {
            typeWriter(subtitle, originalText, 50);
        }, 1000);
    }
});