// Smooth scroll for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form validation for "Register Now" form
document.getElementById('register-form').addEventListener('submit', function(e) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const phone = this.phone.value.trim();
    const course = this.course.value;

    if (!name || !email || !phone || !course) {
        e.preventDefault();
        alert('Please fill out all fields in the registration form.');
    } else {
        alert('Thank you for registering! We will get in touch with you soon.');
    }
});

// Form validation for "Contact Us" form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields in the contact form.');
    }
});
