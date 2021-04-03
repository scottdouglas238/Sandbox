//Our iterable images
let pictureArray = [
    "https://www.sciencenewsforstudents.org/wp-content/uploads/2020/03/1030_oceanwaves-800x450.png",
    "https://images.squarespace-cdn.com/content/v1/58d34f8859cc687828ac898b/1573744657822-ZBPTF4JYY3HFBSR1TR4R/ke17ZwdGBToddI8pDm48kFJh-pNMbEWuIua_4t_HF8VZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxIZIr-ZEpQ2ki8KDAfgr7FF79vNyAExzgeOSUgMOBd1jA6L5AngCnVNXXj7tmtOW4/1b79d79f45e363bccfe518284711414c.jpg?format=750w",
    "https://www.surfertoday.com/images/stories/ocean-breaking-wave.jpg",
    "https://www.sustainability-times.com/wp-content/uploads/thumbs/ocean-photography-waves-water-light-warren-keelan-10-37sclsnc8udvuuxf6t40e8.jpg"
] 

//dynamically created img buttons with an event listener for each one
function createButton(){
    for (let i = 0; i < pictureArray.length; i++) {
        let imgButtonDiv = document.getElementById("imgButtonsDiv");
        let button = document.createElement("input");
        button.setAttribute("type", "image");
        button.setAttribute("src", pictureArray[i]);
        button.setAttribute("class", "buttons");
        button.addEventListener("click", function(e){
            e.preventDefault()
            sessionStorage.setItem("Picture", this.src)
            console.log(sessionStorage.getItem("Picture", this.src))
        });
        imgButtonDiv.appendChild(button); 
    }
}
//Calling the function on page load
createButton()

//Upon submitting the form, the picture chosen, card title, and text entered by the user will get stored in
//session storage. Then, the function to build the card will be called and the card will be created
//Here I did no use variables because I wanted to make the code as optimized as possible
function formSubmit() {
    const submitForm = document.getElementById("formSubmit");
    submitForm.addEventListener("click", function(e) {
        e.preventDefault()
        sessionStorage.setItem("Card Title", document.getElementById("cardTitle").value);
        sessionStorage.setItem("Card Text", document.getElementById("textarea").value);
        dude()
        document.getElementById("cardTitle").value = ''
        document.getElementById("textarea").value = ''

    })
}
formSubmit()

//Dynamically building a card
function dude(){

let body = document.getElementById("wave")

let colDiv = document.createElement("div");
let cardDiv = document.createElement("div");
let imgDiv = document.createElement("img");
let cardBodyDiv = document.createElement("div");
let h5Div = document.createElement("h5");
let pDiv = document.createElement("p");
let aDiv = document.createElement("a");

colDiv.setAttribute("class", "col-lg-3 cards");
cardDiv.setAttribute("class", "card");
cardDiv.setAttribute("style", "width: 18; height: 36");
imgDiv.setAttribute("src", sessionStorage.getItem("Picture", this.src));
imgDiv.setAttribute("class", "card-img-top");
imgDiv.setAttribute("alt", "...");
imgDiv.setAttribute("id", "waveImg");
cardBodyDiv.setAttribute("class", "card-body");
h5Div.setAttribute("class", "card-title");
h5Div.appendChild(document.createTextNode(sessionStorage.getItem("Card Title", document.getElementById("cardTitle"))))
pDiv.setAttribute("class", "card-text");
pDiv.setAttribute("class", "card-text");
pDiv.appendChild(document.createTextNode(sessionStorage.getItem("Card Text", document.getElementById("textarea"))))
aDiv.setAttribute("href", "#");
aDiv.setAttribute("class", "btn btn-primary");
aDiv.appendChild(document.createTextNode("Go Somewhere"))

body.appendChild(colDiv)
colDiv.appendChild(cardDiv);
cardDiv.appendChild(imgDiv);
cardDiv.appendChild(cardBodyDiv);
cardBodyDiv.appendChild(h5Div);
cardBodyDiv.appendChild(pDiv);
cardBodyDiv.appendChild(aDiv);
}




