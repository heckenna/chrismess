class App {
    constructor() {
        const button = document.querySelector("button");
        const submitButton = document.querySelector("#sub");

        this.flickArray = new Array();
        this.buttonArray = new Array();
        this.list = document.querySelector("#flicks");
        //flickArray.push("sdfsfa");

        button.addEventListener("click", () => {
            this.updateText();
        })
        
        submitButton.addEventListener("click", (ev) => {
            ev.preventDefault();
            this.addToList(ev);
        })
    }


    addToList(ev) {
        ev.preventDefault();
        
        const flickBox = document.querySelector("#flickName");
        const yearBox = document.querySelector("#flickYear");
        
        const flick = { 
            name: flickBox.value,
            year: yearBox.value,
            };
        
        // const listElement = prepListElement(flickBox, yearBox);
        const newButton = document.createElement("button");
        newButton.textContent = "Delete Entry";
        
        
        this.buttonArray.push(newButton);
        this.flickArray.push(flick);
        const item = this.renderItem(flick)
        item.appendChild(newButton);
        this.list.appendChild(item);
        //list.appendChild(createElement("li"));
        // this.list.appendChild(newButton);
        //list.removeChild(newButton);
        // debugger
        // this.list.removeChild(item);
        
        newButton.addEventListener("click", (item) =>{
            this.removeEntry(item);
        });
    
        // list.innerHTML += `<li>${val}</li>`;
        flickBox.value =  "";
        yearBox.value = "";
    }

    // prepListElement(flickBox, yearBox) {
    //     listElement = document.createElement('li');
        
    //     const flickName = renderProperty("name", flickBox.value + " ");
    //     flickName.style.color = "red";
    //     flickName.style.fontSize = "50pt";
        
    //     const flickYear = renderProperty("year",  yearBox.value);
         
    //     flickYear.style.fontFamily = "Time New Roman";
    //     flickYear.style.fontSize = "40pt";
        
    //     listElement.append(flickName);
    //     listElement.append(flickYear);
        
        
    //      return listElement;
    // }
    removeEntry(item){
        // debugger
        // this.flickArray.pop(item);

        this.list.removeChild(item);
        
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
        //Need to get it random properties
        return this.spanProperties(span);
    }

    spanProperties(span) {
        const color = ["red", "blue", "green", "black", "purple", "lime"];
        const size = ["40pt", "50pt",  "60pt", "55pt"];
        const family = ['Spirax', "Times New Roman", 'Helvetica']
        span.style.color = color[Math.floor(Math.random() * 6)];
        span.style.fontSize = size[Math.floor(Math.random() * 4)];
        span.style.fontFamily = family[Math.floor(Math.random() * 3)];
        return span;
    }
    
    updateText() {
        const text = document.querySelector("#heading");
        text.textContent = "What do we have here?";
    }
}


 const app = new App;













