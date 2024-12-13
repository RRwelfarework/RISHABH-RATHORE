document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



/* Adjustments for Smaller Screens */
@media (max-width: 768px) {
    .photo-container {
        flex-direction: column;
    }

    .photo-card {
        width: 90%;
        height: auto;
    }
}
