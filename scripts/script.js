// Mobile Menu Toggle
document.getElementById('mobileMenuButton').addEventListener('click', function() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('show');
});

// Clock Widget
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.textContent = timeString;
    }
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Current Page Indicator
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });
});

// Form Validation for Contact Page
if (window.location.pathname.includes('contact.html')) {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const commentsInput = document.getElementById('comments');
            let isValid = true;
            
            // Reset error states
            document.querySelectorAll('.error').forEach(el => el.remove());
            
            // Validate name
            if (!nameInput.value.trim()) {
                displayError(nameInput, 'Please enter your full name');
                isValid = false;
            }
            
            // Validate email
            if (!emailInput.value.trim()) {
                displayError(emailInput, 'Please enter your email address');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                displayError(emailInput, 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate comments
            if (!commentsInput.value.trim()) {
                displayError(commentsInput, 'Please enter your enquiry/comments');
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
    
    function displayError(input, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.style.color = 'red';
        errorElement.style.fontSize = '0.8rem';
        errorElement.style.marginTop = '0.25rem';
        errorElement.textContent = message;
        
        input.parentNode.appendChild(errorElement);
        input.style.borderColor = 'red';
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}