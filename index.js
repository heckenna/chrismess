class App {
    constructor() {
        const button = document.querySelector("button");
        const submitButton = document.querySelector("#sub");

        button.addEventListener("click", () => {
            this.updateText()
        })
        submitButton.addEventListener("click", (ev) => {
            ev.preventDefault();
            this.addToList(ev);
            })
        }

    addToList(ev) {
        ev.preventDefault();
        const list = document.querySelector("#flicks");
        const flickBox = document.querySelector("#flickName");
        const yearBox = document.querySelector("#flickYear");
        
        const flick = { 
            name: flickBox.value,
            year: yearBox.value,
            }
        
        // const listElement = prepListElement(flickBox, yearBox);
        
        list.appendChild(this.renderItem(flick));
        // list.innerHTML += `<li>${val}</li>`;
        flickBox.value =  "";
        yearBox.value = "";
    }

    prepListElement(flickBox, yearBox) {
        listElement = document.createElement('li');
        
        const flickName = renderProperty("name", flickBox.value + " ");
        flickName.style.color = "red";
        flickName.style.fontSize = "50pt";
        
        const flickYear = renderProperty("year",  yearBox.value);
         
        flickYear.style.fontFamily = "Time New Roman";
        flickYear.style.fontSize = "40pt";
        
        listElement.append(flickName);
        listElement.append(flickYear);
        
        
         return listElement;
    }

    renderItem(flick) {
        const item = document.createElement("li");
        item.classList.add("flick");
    
        const properties = Object.keys(flick);
    
        //loop over each properties
        properties.forEach((propertyName) => {
            //build  a span
            const span = this.renderProperty(propertyName, flick[propertyName]);
            item.appendChild(span);
        })
    
    
        return item;
    }


    renderProperty(name, value) {
        const span = document.createElement("span");
        span.classList.add(name);
        span.textContent = value + " ";
        return span;
    }
    
    updateText() {
        const text = document.querySelector("#heading");
        text.textContent = "What do we have here?";
    }

    
    
    

    

    
}
 const app = new App;













