console.log("It works!");

const button = document.querySelector("button");
const otherButton = document.querySelector("#sub");
const key = "Enter".key;

const updateText = function() {
    const text = document.querySelector("#heading");
    text.textContent = "What do we have here?";
}
const updateFirst = function() {
    const head = document.querySelector("h1");
    const box = document.querySelector("#textHeading").value;
    head.textContent = box;
    event.preventDefault();
}


button.addEventListener("click", updateText);
otherButton.addEventListener("click", updateFirst);
key.addEventListener("keyup", updateFirst);