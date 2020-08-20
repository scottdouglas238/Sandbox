$(document).ready(function () {


let queryBrewery = "https://api.openbrewerydb.org/breweries?by_postal=85233"

    $.ajax({
    url: queryBrewery,
    method: "GET"
}) .then(function(response){
   console.log(response);
})



})