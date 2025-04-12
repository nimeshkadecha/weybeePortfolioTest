// script.js

// Add any interactivity or animations here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
});
document.querySelectorAll('.circle').forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    const offset = 282.6 - (282.6 * percent) / 100;
    circle.querySelector('.progress').style.strokeDashoffset = offset;
});