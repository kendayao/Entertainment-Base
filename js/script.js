

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
        const resAwards=data.Awards



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

        var pTitleSub=$("<p>")
        pTitleSub.text(resRated+" | "+resGenre+" | "+resRuntime)
        $(divCol2).append(pTitleSub)


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
        var searchTrailer=resTitle+" "+resYear+ " trailer"
        var urlyoutube="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q="+searchTrailer+"&key=AIzaSyBPEJPstEOICq_6g87F5v_fd4XGIAK9i_w"
            $.ajax({
                url: urlyoutube,
                method: "GET"
            }).then(function(response){
                
                console.log(response)

                var buttonEl=$("<button>")
                buttonEl.attr("class", "view-trailer-button")
                buttonEl.text("View Trailer")

                var aEl=$("<a>")
                aEl.attr("href","https://www.youtube.com/watch?v="+response.items[0].id.videoId)
                aEl.attr("target", "_blank")
                $(divCol2).append(aEl)
                $(aEl).append(buttonEl)
                
                
            })

        
        
    }).catch(function(error){
    console.log(error)
    })
}