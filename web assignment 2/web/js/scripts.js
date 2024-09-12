// Contact form submission
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent the form from submitting since it's front-end only
    alert('Form Submitted!');  // Display a message when the form is "submitted"
});
