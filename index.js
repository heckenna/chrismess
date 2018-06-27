console.log("It works!");

const button = document.querySelector("button");
const submitButton = document.querySelector("#sub");

const updateText = function() {
    const text = document.querySelector("#heading");
    text.textContent = "What do we have here?";
}
const addToList = function(ev) {
    ev.preventDefault();
    const list = document.querySelector("#flicks");
    const flickBox = document.querySelector("#flickName");
    const yearBox = document.querySelector("#flickYear");

    const flickName = document.createElement("span");
    flickName.textContent = flickBox.value + " ";
    flickName.style.color = "red";
    flickName.style.fontSize = "50pt";
    const flickYear = document.createElement("span");
    flickYear.textContent = yearBox.value;
    flickYear.style.fontFamily = "Time New Roman";
    flickYear.style.fontSize = "40pt";

    const listElement = document.createElement('li');
    
    listElement.append(flickName);
    listElement.append(flickYear);

    list.appendChild(listElement);
    // list.innerHTML += `<li>${val}</li>`;
    flickBox.value =  "";
    yearBox.value = "";
}


button.addEventListener("click", updateText);
submitButton.addEventListener("click", addToList);
//key.addEventListener("keyup", updateFirst);