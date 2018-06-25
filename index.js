console.log('It works!');

const button = document.querySelector('button');

const updateText = function() {
    const text = document.querySelector('h1');
    text.textContent = "What do we have here?";
}

button.addEventListener('click', updateText);