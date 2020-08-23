
// hide Please enter movie title alert
$(".alert").css("display", "none")

var date=new Date()
var currentYear=date.getFullYear()
$(".current-year").text(currentYear)

// When search button is clicked
$(".find-button").on("click", function(event){
    event.preventDefault();

    // if no input show "Please enter movie" alert else call movie api
    if($(".find-input").val()===""){
        $(".alert").css("display", "block")
        setTimeout(function(){
            $(".alert").css("display", "none")
        }, 2000)
    }else{
    $(".content").empty()
    apiCall()
    $('html, body').animate({scrollTop:$("#info-section").offset().top},500)
    }
})

// Call omdb api
function apiCall(){
    const title=$(".find-input").val().toLowerCase().trim()
    const queryURL="https://www.omdbapi.com/?t="+title+"&apikey=9c268223"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(data){
        $(".find-input").val("")
        if (data.Error==="Movie not found!"){
            var h3ErrorEl=$("<h3>")
            h3ErrorEl.attr("class","movie-error")
            h3ErrorEl.text("Movie Not Found, Please Search Again")
            $(".content").append(h3ErrorEl)
        }else{
        
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
        
        // create back to search link
        var aEl=$("<a>")
        aEl.attr("href", "#header-section")
        aEl.attr("class", "back-search")
        aEl.text("Back to Search")
        $(".content").append(aEl)
        
        // movie poster column
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

        //move details column
        var divCol2=$("<div>")
        divCol2.attr("class","col-md-6 search-details")

        // movie title
        var h3TitleEl=$("<h3>")
        h3TitleEl.text(resTitle+" "+"("+resYear+")") 
        $(divCol2).append(h3TitleEl)
        
        // movie rating, genre, runtime
        var pTitleSub=$("<p>")
        pTitleSub.attr("class", "sub-title")
        pTitleSub.text(resRated+" | "+resGenre+" | "+resRuntime)
        $(divCol2).append(pTitleSub)
        
        //movie director
        var pDirectorLabelEl=$("<p>")
        pDirectorLabelEl.text("Director")
        pDirectorLabelEl.attr("class", "response-label")
        $(divCol2).append(pDirectorLabelEl)
        var pDirectorEl=$("<p>")
        pDirectorEl.attr("class", "response-details")
        pDirectorEl.text(resDirector)
        $(divCol2).append(pDirectorEl)
        
        //movie actors
        var pActorsLabelEl=$("<p>")
        pActorsLabelEl.text("Actors")
        pActorsLabelEl.attr("class", "response-label")
        $(divCol2).append(pActorsLabelEl)
        var pActorsEl=$("<p>")
        pActorsEl.attr("class", "response-details")
        pActorsEl.text(resActors)
        $(divCol2).append(pActorsEl)
        
        //movie plot
        var pPlotLabelEl=$("<p>")
        pPlotLabelEl.text("Plot")
        pPlotLabelEl.attr("class", "response-label")
        $(divCol2).append(pPlotLabelEl)   
        var pPlotEl=$("<p>")
        pPlotEl.attr("class", "response-details")
        pPlotEl.text(resPlot)
        $(divCol2).append(pPlotEl)

        //movie country
        var pCountryLabelEl=$("<p>")
        pCountryLabelEl.text("Country")
        pCountryLabelEl.attr("class", "response-label")
        $(divCol2).append(pCountryLabelEl)
        var pCountryEl=$("<p>")
        pCountryEl.attr("class", "response-details")
        pCountryEl.text(resCountry)
        $(divCol2).append(pCountryEl)
        
        //movie awards
        var pAwardsLabelEl=$("<p>")
        pAwardsLabelEl.text("Awards")
        pAwardsLabelEl.attr("class", "response-label")
        $(divCol2).append(pAwardsLabelEl)
        var pAwardsEl=$("<p>")
        pAwardsEl.attr("class", "response-details")
        pAwardsEl.text(resAwards)
        $(divCol2).append(pAwardsEl)

        divRow.append(divCol2)

        // api to get movie trailer
        var searchTrailer=resTitle+" "+resYear+ " trailer"
        var urlyoutube="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q="+searchTrailer+"&key=AIzaSyBPEJPstEOICq_6g87F5v_fd4XGIAK9i_w"
            $.ajax({
                url: urlyoutube,
                method: "GET"
            }).then(function(response){
                $(".modal-body").empty()
                // append movie trailer video to modal
                var buttonEl=$("<button>")
                buttonEl.attr("data-toggle","modal")
                buttonEl.attr("data-target","#trailerModal")
                buttonEl.attr("class","trailer-button")
                buttonEl.text("View Trailer")
                $(divCol2).append(buttonEl)

                var iframeEl=$("<iframe>")
                iframeEl.attr({
                    width: "100%",
                    height: "250px",
                    src: "https://www.youtube.com/embed/"+response.items[0].id.videoId,
                    frameborder: "0",
                    allow: "acclerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                })
                $(".modal-body").append(iframeEl)
                $(".modal-title").text(resTitle+" Trailer")
                
            })

        }
        
    }).catch(function(error){
    console.log(error)
    })
}