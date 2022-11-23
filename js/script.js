const API_KEY = "1kSSSmY3DbTcWEslz3Nf1isUeRSeZXj8sROnaogP";

function fetchBySearch() {
    let searchValue = document.getElementById("search-text").value

    console.log(searchValue);
    console.log(typeof searchValue);

    let searchBarLink = `https://api.watchmode.com/v1/search/?apiKey=${API_KEY}&search_field=name&search_value=`

    updatedSearchLink = searchBarLink + searchValue;
    console.log(updatedSearchLink);

    // then we'll fetch using the updated URL
    fetch(updatedSearchLink)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.title_results[0]);
            console.log(data.title_results[0].name);
            console.log(data.title_results[0].id);
            let titleId = data.title_results[0].id

            // then we can fetch using the id
            idSearchLink = `https://api.watchmode.com/v1/title/${titleId}/details/?apiKey=${API_KEY}&append_to_response=sources`;
            // console.log(idSearchLink);
            fetch(idSearchLink)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    console.log(data.title);
                    console.log(data.runtime_minutes);
                    console.log(data.poster);
                    console.log(data.critic_score);
                    console.log(data.genre_names);
                    console.log(data.release_date);
                    console.log(data.sources);
                    console.log(data.similar_titles);
                    console.log(data.type);
                    console.log(data.user_rating);

                    for (i = 0; i < data.sources.length; i++) {
                        if (data.sources[i].type === "sub") {
                            console.log("im working!");
                            let availableOn = (data.sources[i].name);
                            // availableOn.textContent = (data.sources[i].name);
                            console.log(availableOn);
                            // create an object and store inside local storage
                            let searchedShow = {
                                title: data.title,
                                poster: data.poster,
                                genres: data.genre_names,
                                runtime: data.runtime_minutes,
                                releaseDate: data.release_date,
                                similarTitles: data.similar_titles,
                                userRating: data.user_rating,
                                criticScore: data.critic_score,
                                findOn: availableOn,
                                type: data.type,
                                webUrl: data.sources[i].web_url
                            }
                            console.log(searchedShow);
                            // local storage if using a lot of data
                            localStorage.setItem("searchedShow", JSON.stringify(searchedShow));
                            window.location.href = "/assets/index/results.html";
                        };

                    };
                });

        });
};

//heart button code

var heartBtn = document.getElementById('btnh1')

function toggle(){
    if (heartBtn.style.color=="blue"){
      heartBtn.style.color= "grey"
    }
    else{
      heartBtn.style.color = "blue"
    }

}


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