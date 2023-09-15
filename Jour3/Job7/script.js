const form = document.getElementById('myForm');
const textInput = document.getElementById('textInput');
const displaySavedValue = document.getElementById('displaySavedValue');

const savedValue = localStorage.getItem('savedValue');
if (savedValue) {
    displaySavedValue.textContent = `Saved Value: ${savedValue}`;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputValue = textInput.value.trim();

    if (inputValue) {
        localStorage.setItem('savedValue', inputValue);
        displaySavedValue.textContent = `Saved Value: ${inputValue}`;
        textInput.value = '';
    } else {
        alert('Please enter a valid value.');
    }
});
