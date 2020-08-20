

const queryURL="http://www.omdbapi.com/?t=Titanic&apikey=9c268223"


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(data,err){
    console.log(data)
}).catch(function(error){
    console.log(error)
}
    
)