const apiKey1 = "H1WZOIEMOXEW1Z2H" 
const apiKey2 = "UVV1OIJYR1HSOP3Z";

$("#submit").on("click",  function(){
  let companySearch;
  companySearch = $("#input").val();
$.ajax({
    url: "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + companySearch + "&apikey=" + apiKey1,
    method: "GET"
}).then(function(response){
  for (let i = 0; i < 2; i++) {
    let compSymbol = response.bestMatches[i]["1. symbol"];

  $.ajax({
    url: "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + compSymbol +"&apikey=" + apiKey2,
    method: "GET"
  }).then(function(response){
    let list = [];
    const companyName = Object.values(response)
    const companyNames = companyName[2];
    list.push(companyNames);
    // console.log(list)
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      console.log(element)
      const button = $("<button>").attr("class", "btn btn-dark compButton").append(element)
      $("#companyNameButton").attr("display", "flex");
      $("#companyNameButton").append(button);
    }
  })

  }
})
})
