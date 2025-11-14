// Simple form submission alert
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! I will get back to you soon.');
    form.reset();
});
