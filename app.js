//Our iterable images
let pictureArray = [
    "https://www.sciencenewsforstudents.org/wp-content/uploads/2020/03/1030_oceanwaves-800x450.png",
    "https://images.squarespace-cdn.com/content/v1/58d34f8859cc687828ac898b/1573744657822-ZBPTF4JYY3HFBSR1TR4R/ke17ZwdGBToddI8pDm48kFJh-pNMbEWuIua_4t_HF8VZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxIZIr-ZEpQ2ki8KDAfgr7FF79vNyAExzgeOSUgMOBd1jA6L5AngCnVNXXj7tmtOW4/1b79d79f45e363bccfe518284711414c.jpg?format=750w",
    "https://www.surfertoday.com/images/stories/ocean-breaking-wave.jpg",
    "https://www.sustainability-times.com/wp-content/uploads/thumbs/ocean-photography-waves-water-light-warren-keelan-10-37sclsnc8udvuuxf6t40e8.jpg"
] 
//declaring the wave picture buttons
let wave1 = pictureArray[0] && false;
let wave2 = pictureArray[1] && false;
let wave3 = pictureArray[2] && false;
let wave4 = pictureArray[3] && false;

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
            dude();
        });
        imgButtonDiv.appendChild(button); 
    }
}
createButton()

//Dynamically building a card
function dude(){
// const number = Math.round(Math.random()*3)    

let body = document.getElementById("wave")

let colDiv = document.createElement("div");
let cardDiv = document.createElement("div");
let imgDiv = document.createElement("img");
let cardBodyDiv = document.createElement("div");
let h5Div = document.createElement("h5");
let pDiv = document.createElement("p");
let aDiv = document.createElement("a");

colDiv.setAttribute("class", "col-lg-3");
cardDiv.setAttribute("class", "card");
cardDiv.setAttribute("style", "width: 18; height: 36");
imgDiv.setAttribute("src", sessionStorage.getItem("Picture", this.src));
imgDiv.setAttribute("class", "card-img-top");
imgDiv.setAttribute("alt", "...");
imgDiv.setAttribute("id", "waveImg");
cardBodyDiv.setAttribute("class", "card-body");
h5Div.setAttribute("class", "card-title");
h5Div.appendChild(document.createTextNode("Card title"))
pDiv.setAttribute("class", "card-text");
pDiv.setAttribute("class", "card-text");
pDiv.appendChild(document.createTextNode("Some quick example text to build on the card title and make up the bulk of the card's content."))
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
// dude()
// setInterval(function(){dude()}, 1000)


