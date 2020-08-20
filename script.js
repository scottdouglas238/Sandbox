$(".btn-search").on("click", function (e) {
    e.preventDefault();
    let searchTerm = $("#searchTerm").val();
    let articleNum = $("#numberOfRecords").val();
    let inputStartYear = $("#startYear").val();
    if (inputStartYear === "") {
        startYear = "";
    } else {
        startYear = "&begin_date=" + inputStartYear + "0101"
    }
    let inputEndYear = $("#endYear").val();
    if (inputEndYear === "") {
        endYear = ""
    } else {
        endYear = "&end_date=" + inputEndYear + "1231"
    }
    
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + startYear + endYear + "&api-key=ED1VL6lK1MTnpi2Jq1BlwPP5OO6uA6uv"
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)
            returnedArticles = response.response.docs.slice(0, articleNum)
            console.log(returnedArticles)
            for (let i = 0; i < returnedArticles.length; i++) {
                let article = returnedArticles[i];
                titleAjax = article.headline.main; // title
                authorAjax = article.byline.original; // author
                dateAjax = article.pub_date; // publish date
                sectionAjax = article.section_name; // section/category
                linkAjax = article.web_url; // link to article


                var card = $("<div>")
                card.attr("class", "card")
                var newResult = $("<div>");
                newResult.attr("id", "new-result")
                newResult.attr("class", "card-body")
                //create the card
                //create various elements of the card
                var headline = $("<h3>");
                headline.attr("class", "card-title").text(titleAjax)
                var author = $("<h3>");
                author.attr("class", "card-subtitle").text(authorAjax)
                var section = $("<h3>");
                section.attr("class", "card-text").text(sectionAjax)
                var date = $("<h3>")
                date.attr("class", "card-text").text(dateAjax)
                var link = $("<a>")
                link.attr("href", "#")
                link.attr("class", "card-link").text(linkAjax)
                //append to the card
                newResult.append(headline, author, section, date, link)
                $("#results").append(card)
                card.append(newResult)
            // }
        }
        )
})