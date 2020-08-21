

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
        imgEl.attr({src: data.Poster,
        class: "movie-image",
        alt: "movie-poster"})
        $(divCol1).append(imgEl)




        var divCol2=$("<div>")
        divCol2.attr("class","col-md-6")
        var h3El=$("<h3>")
        h3El.text(data.Title)
        $(divCol2).append(h3El)
        divRow.append(divCol2)
        

        
        
    }).catch(function(error){
    console.log(error)
    })
}