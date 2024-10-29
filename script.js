const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    // Validate the height
    if(isNaN(height) || height <= 0) {
        result.innerHTML = 'Please provide a valid height';

    } else if(isNaN(weight) || weight <= 0) {
        result.innerHTML = 'Please provide a valid weight';
        
    } else {
        // calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // Display the result
        result.innerHTML = `<span>${bmi}</span>`;
    }
});
