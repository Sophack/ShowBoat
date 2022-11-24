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






//the below function shows the likes saved on the array by their ID 
//this will be later used to access the local storage 
// function addMovieLS (){
//   let storeMovieInfo= {
//     id: 
//   }

//   const genres = [
//     {
//       "id": 28,
//       "name": "Action"
//     },
//     {
//       "id": 12,
//       "name": "Adventure"
//     },
//     {
//       "id": 16,
//       "name": "Animation"
//     },
//     {
//       "id": 35,
//       "name": "Comedy"
//     },
//     {
//       "id": 80,
//       "name": "Crime"
//     },
//     {
//       "id": 99,
//       "name": "Documentary"
//     },
//     {
//       "id": 18,
//       "name": "Drama"
//     },
//     {
//       "id": 10751,
//       "name": "Family"
//     },
//     {
//       "id": 14,
//       "name": "Fantasy"
//     },
//     {
//       "id": 36,
//       "name": "History"
//     },
//     {
//       "id": 27,
//       "name": "Horror"
//     }
//   ]


// //below code is for the heart button to save to a favourites list
// var heartBtn = document.getElementById("heartBtn");
// getFavourite();
// //the below function should post a random recipe in the middle of the homepage

// function getFavourite (favouriteData, string = false) {
//   var favourite = document.createElement('div'); //creating a div under favourites
//   favourite.classList.add('favourites');

//   favourite.innerHTML = `
//   <div class="fav-header">
//   ${string ? `
//   <span class="userFav">
//     Testing Fav List
//   </span>` :""}  
  
//   <div class="fav-list">
//     <img src="${favouriteData.titleId}"
//      alt="${favouriteData.favourite}"/>
//   </div>
//   <div class="fav-body">
//     <h4>${favouriteData.title_results}</h4>
//   <button class="fav-btn active">
//     <i class="far fa-heart"></i>
//   </button>
// </div>`;
// }



// }


// var btn = favourite.querySelector(".fav-btn");

// btn.addEventListener("click", () => {
//     btn.classList.toggle("active");
// });

//     favourite.appendChild(meal);
// }

// function addMovieToLS(favouriteId){
//   var mealIds = getMealsFromLS();
//   localStorage.setItem('favIds', JSON.stringify ([...favIds]));
// }

// function removeMovieFromLS(mealId){
//   var favIds = getMovieFromLS();
//   localStorage.setItem('favIds', JSON.stringify ([...favIds]));
// }

// function getMovieFromLS() {
//   var favIds = JSON.parse(localStorage.getItem('favIds'));
//   return favIds;
// }

//calling the variable meals & appending from the ID so it will show up
//the button should store to local storage & add the meal to favourites list