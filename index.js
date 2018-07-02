class App {
    constructor() {
        const button = document.querySelector("button");
        const submitButton = document.querySelector("#sub");

        this.flickArray = new Array();
        
        // this.buttonArray = new Array();
        this.list = document.querySelector("#flicks");
        this.load();
        //flickArray.push("sdfsfa");
        

        button.addEventListener("click", () => {
            this.updateText();
        })
        
        submitButton.addEventListener("click", (ev) => {
            ev.preventDefault();
            this.addToList(ev);
        })

        
        // const tempList = JSON.parse(localStorage.getItem(this.flickArray));
        // tempList.forEach(
        //     this.addToList(ev)
        // )
    }

    addFlick(flick) {
        this.flickArray.push(flick);
        this.save();

        const item = this.renderItem(flick);
        this.list.appendChild(item);

        if(flick.favorite) {
            item.classList.add('fav');
        }
    }

    addToList(ev) {
        // ev.preventDefault();
        
        const flickBox = document.querySelector("#flickName");
        const yearBox = document.querySelector("#flickYear");
        
        const flick = { 
            name: flickBox.value,
            year: yearBox.value,
            favorite: false,
            };
        
        this.addFlick(flick);
        
        
    
        // list.innerHTML += `<li>${val}</li>`;
        flickBox.value =  "";
        yearBox.value = "";
        flickBox.focus();
    }


    load() {
        const flicks = JSON.parse(localStorage.getItem("flicks"));
        if(flicks) {
            flicks.forEach((flick) => this.addFlick(flick));
        }
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
    removeEntry(flick, item){
        // const item = ev.target.closest(".flick");
        // const list = item.parentElement;
        this.list.removeChild(item);

        const i = this.flickArray.indexOf(flick);
        this.flickArray.splice(i,  1);
        
        this.save();
    }

    renderActionButtons(flick, item) {
        const actions = document.createElement("div");
        actions.classList.add("actions");

        //add del button
        const delButton = document.createElement("button");
        delButton.classList.add("remove");
        delButton.innerHTML = '<i class="far fa-trash-alt" title="remove flick"></i>';

        delButton.addEventListener("click", () => this.removeEntry(flick, item));

        actions.appendChild(delButton);
        // this.buttonArray.push(newButton);

        const favButton = document.createElement("button");
        favButton.classList.add("fav");
        favButton.innerHTML = '<i class="fas fa-star"></i>';
        favButton.addEventListener("click", (_ev) => this.toggleFavorite(flick, item));
        actions.appendChild(favButton);

        return actions
    }


    renderItem(flick) {
        const item = document.createElement("li");
        item.classList.add("flick");

        const properties = this.renderProperties(flick);
        item.appendChild(properties);
        

        //add action buttons
        const actions = this.renderActionButtons(flick, item);
        item.appendChild(actions);
    
        return item;
    }


    renderProperty(name, value) {
        const span = document.createElement("span");
        span.classList.add(name);
        span.textContent = value + " ";
        //Need to get it random properties
        return this.spanProperties(span);
    }

    renderProperties(flick) {
        const div = document.createElement("div");
        div.classList.add("info");

        const properties = Object.keys(flick);
    
        //loop over each properties
        properties.forEach((propertyName) => {
            //build  a span
            const span = this.renderProperty(propertyName, flick[propertyName]);
            div.appendChild(span);
        })

        return div;
    }

    save() {
        localStorage.setItem("flick", JSON.stringify(this.flickArray));
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

    toggleFavorite(flick, item) {
        flick.favorite = item.classList.toggle('fav');
        this.save();
    }
    
    updateText() {
        const text = document.querySelector("#heading");
        text.textContent = "*Actually* New Stroop Test";
    }
}


 const app = new App;













