

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
        

        var divContainer=$("<div>")
        divContainer.attr("class","container")
        $(".content").append(divContainer)



        var divRow=$("<div>")
        divRow.attr("class","row")
        $(divContainer).append(divRow)
        var divCol1=$("<div>")
        divCol1.attr("class","col-md-6")
        $(divRow).append(divCol1)
        var imgEl=$("<img>")
        imgEl.attr({src: resImage,
        class: "movie-image",
        alt: "movie-poster"})
        $(divCol1).append(imgEl)




        var divCol2=$("<div>")
        divCol2.attr("class","col-md-6")
        var h3TitleEl=$("<h3>")
        h3TitleEl.text(resTitle+" "+"("+resYear+")") 
        $(divCol2).append(h3TitleEl)
        var pDirectorEl=$("<p>")
        pDirectorEl.text("Director "+resDirector)
        $(divCol2).append(pDirectorEl)
        var pActorsEl=$("<p>")
        pActorsEl.text("Actors "+resActors)
        $(divCol2).append(pActorsEl)
        var pPlotEl=$("<p>")
        pPlotEl.text(resPlot)
        $(divCol2).append(pPlotEl)
        var pRatedEl=$("<p>")
        pRatedEl.text("Rated"+resRated)
        $(divCol2).append(pRatedEl)
        var pGenreEl=$("<p>")
        pGenreEl.text(resGenre)
        $(divCol2).append(pGenreEl)
        var pRuntimeEl=$("<p>")
        pRuntimeEl.text(resRuntime)
        $(divCol2).append(pRuntimeEl)
        var pCountryEl=$("<p>")
        pCountryEl.text(resCountry)
        $(divCol2).append(pCountryEl)
        var pProductionEl=$("<p>")
        pProductionEl.text(resProduction)
        $(divCol2).append(pProductionEl)
        var pAwardsEl=$("<p>")
        pAwardsEl.text(resAwards)
        $(divCol2).append(pAwardsEl)
        divRow.append(divCol2)
        

        
        
    }).catch(function(error){
    console.log(error)
    })
}