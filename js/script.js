

$(".find-button").on("click", function(event){
    event.preventDefault();
    $(".content").empty()
    apiCall()
    
})



function apiCall(){
    const title=$(".find-input").val().toLowerCase().trim()
    const queryURL="http://www.omdbapi.com/?t="+title+"&apikey=9c268223"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(data){
        $(".find-input").val("")
        console.log(data)
        
        const resImage=data.Poster
        const resTitle=data.Title
        const resYear=data.Year
        const resDirector=data.Director
        const resActors=data.Actors
        const resPlot=data.Plot
        const resRated=data.Rated
        const resGenre=data.Genre
        const resRuntime=data.Runtime
        const resCountry=data.Country
        const resProduction=data.Production
        const resAwards=data.Awards
        

        // var divContainer=$("<div>")
        // divContainer.attr("class","container")
        // $(".content").append(divContainer)



        var divRow=$("<div>")
        divRow.attr("class","row")
        $(".content").append(divRow)
        var divCol1=$("<div>")
        divCol1.attr("class","col-md-6 search-image")
        $(divRow).append(divCol1)
        var imgEl=$("<img>")
        imgEl.attr({src: resImage,
        class: "movie-image",
        alt: "movie-poster"})
        $(divCol1).append(imgEl)




        var divCol2=$("<div>")
        divCol2.attr("class","col-md-6 search-details")

        var h3TitleEl=$("<h3>")
        h3TitleEl.text(resTitle+" "+"("+resYear+")") 
        $(divCol2).append(h3TitleEl)

        var pDirectorLabelEl=$("<p>")
        pDirectorLabelEl.text("Director")
        pDirectorLabelEl.attr("class", "response-label")
        $(divCol2).append(pDirectorLabelEl)
        var pDirectorEl=$("<p>")
        pDirectorEl.text(resDirector)
        $(divCol2).append(pDirectorEl)

        var pActorsLabelEl=$("<p>")
        pActorsLabelEl.text("Actors")
        pActorsLabelEl.attr("class", "response-label")
        $(divCol2).append(pActorsLabelEl)
        var pActorsEl=$("<p>")
        pActorsEl.text(resActors)
        $(divCol2).append(pActorsEl)

       
        var pPlotLabelEl=$("<p>")
        pPlotLabelEl.text("Plot")
        pPlotLabelEl.attr("class", "response-label")
        $(divCol2).append(pPlotLabelEl)   
        var pPlotEl=$("<p>")
        pPlotEl.text(resPlot)
        $(divCol2).append(pPlotEl)

        var pRatedLabelEl=$("<p>")
        pRatedLabelEl.text("Rated")
        pRatedLabelEl.attr("class", "response-label")
        $(divCol2).append(pRatedLabelEl) 
        var pRatedEl=$("<p>")
        pRatedEl.text(resRated)
        $(divCol2).append(pRatedEl)

        var pGenreLabelEl=$("<p>")
        pGenreLabelEl.text("Genre")
        pGenreLabelEl.attr("class", "response-label")
        $(divCol2).append(pGenreLabelEl) 
        var pGenreEl=$("<p>")
        pGenreEl.text(resGenre)
        $(divCol2).append(pGenreEl)


        var pRuntimeLabelEl=$("<p>")
        pRuntimeLabelEl.text("Runtime")
        pRuntimeLabelEl.attr("class", "response-label")
        $(divCol2).append(pRuntimeLabelEl)
        var pRuntimeEl=$("<p>")
        pRuntimeEl.text(resRuntime)
        $(divCol2).append(pRuntimeEl)

        var pCountryLabelEl=$("<p>")
        pCountryLabelEl.text("Country")
        pCountryLabelEl.attr("class", "response-label")
        $(divCol2).append(pCountryLabelEl)
        var pCountryEl=$("<p>")
        pCountryEl.text(resCountry)
        $(divCol2).append(pCountryEl)

        var pAwardsLabelEl=$("<p>")
        pAwardsLabelEl.text("Awards")
        pAwardsLabelEl.attr("class", "response-label")
        $(divCol2).append(pAwardsLabelEl)
        var pAwardsEl=$("<p>")
        pAwardsEl.text(resAwards)
        $(divCol2).append(pAwardsEl)


        divRow.append(divCol2)
        

        
        
    }).catch(function(error){
    console.log(error)
    })
}