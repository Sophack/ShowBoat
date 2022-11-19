var likeButton = document.getElementById("#heartBtn");

//eventlistener for the button
likeButton.addEventListener("click", function(event){
    prompt("added to your list!");
})



//set object properties and values 
var userFavs = {
    userChoice: 
} 
//the user choice is whether they clicked it or not


//converting the object into string 
localStorage.setItem("userFavs", JSON.stringify(userFavs));

//converting object back into JSON

$( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).on( "click", function( event ) {
      event.preventDefault();
    } );
  } );

//what data am i storing?
//whether the user liked the movie or not 
//this is better