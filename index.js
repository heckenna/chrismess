console.log('It works!');

const button = document.querySelector('button');

const updateText = function() {
    const text = document.querySelector('#heading');
    text.textContent = "What do we have here?";
}

button.addEventListener('click', updateText);