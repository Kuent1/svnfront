// Select the try again button
const tryAgainButton = document.getElementById('tryAgainButton');

// Add event listener to redirect to index.html when the button is clicked
tryAgainButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});