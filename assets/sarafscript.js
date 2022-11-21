// var likeButton = document.getElementById("#heartBtn");

// async function searchbar 

// //set object properties and values 
function saveUserFave(){
var userFav = {
    userChoice: likeButton.
} };

// //the user choice is whether they clicked it or not
// //eventlistener for the button
likeButton.addEventListener("click", function(event){
     saveUserFave();
// })

// //converting the object into string 
localStorage.setItem("userFavs", JSON.stringify(userFavs));

// //converting object back into JSON

// $( function() {
//     $( ".widget input[type=submit], .widget a, .widget button" ).button();
//     $( "button, input, a" ).on( "click", function( event ) {
//       event.preventDefault();
//     } );
//   } );



var 
var heartList = document.querySelector('#heartBtn');

function heartLike() {
    var storedLikes = JSON.parse(localStorage.getItem("favorites"));
}

for (var i = 0; i < heartLike.length; i++) {
    var like = favourite[i];

    var li = document.createElement("li");
    li.textContent = like;
    li.setAttribute("data-index", i);

    var button = document.createElement("favourite");
    button.textContent = "Your choice has been noted ✔️";

    li.appendChild(button);
    heartList.appendChild(li);
  }

heartLike ()