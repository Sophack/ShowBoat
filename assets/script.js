YOUR_API_KEY = "1kSSSmY3DbTcWEslz3Nf1isUeRSeZXj8sROnaogP";
// const showInfo = document.querySelector("#show-info");
// let count = document.getElementById("show-info").children().length;
// const availableOn = showInfo.querySelector('#second');
// const home = window.open("home.html");
// const results = window.open("results.html")
// let availableOn = results.document.getElementById("availableOnId")




function addToURL() {
    let searchValue = document.getElementById("search-text").value

    console.log(searchValue);
    console.log(typeof searchValue);

    let searchBarLink = 'https://api.watchmode.com/v1/search/?apiKey=1kSSSmY3DbTcWEslz3Nf1isUeRSeZXj8sROnaogP&search_field=name&search_value='

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
            let titleId = data.title_results[0].id;

            // then we can fetch using the id
            idSearchLink = 'https://api.watchmode.com/v1/title/' + titleId + '/details/?apiKey=1kSSSmY3DbTcWEslz3Nf1isUeRSeZXj8sROnaogP&append_to_response=sources';
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
                                // will need to find length of genres
                                genres: data.genre_names,
                                runtime: data.runtime_minutes,
                                releaseDate: data.release_date,
                                // will need to find length of similarTitles
                                similarTitles: data.similar_titles,
                                userRating: data.user_rating,
                                criticScore: data.critic_score,
                                // will need to find length of sources
                                findOn: availableOn,
                                type: data.type
                            }
                            console.log(searchedShow);
                            // local storage if using a lot of data
                            localStorage.setItem("searchedShow", JSON.stringify(searchedShow));
                            window.location.replace("http://127.0.0.1:5502/results.html");
                        }
                    }
                });

        });
}




//         // function redirectResults(){
//         //     window.location.href='./results.html';
//         // };


//below code is for the heart button to save to a favourites list


//the below function should post a random recipe in the middle of the homepage


async function getRandomMeal(){
    var resp =await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    var respData =await resp.json();
    var randomMeal= respData.meals[0];
    console.log(randomMeal);

    addMeal(randomMeal, true);
    
}

//this function will look up full meals by their ID (replaced i= with +id)
async function getMealById(id){
    var meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' +id); 
}

//set up the functions first and then add the variables needed 
//the below function will search meals by their name (replaced the s= with +term)
async function getMealsBySearch(term){
    var meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' +term);
}
//below is a function to add another meal
//getting mealData and the random condition being false 
function addMeal (mealData, random = false) {
    var meal = document.createElement('div'); //creating a div under meal
    meal.classList.add('meal');

    meal.innerHTML = `
    <div class="meal">
    ${random ? `
    <span class="random">
      Random Recipe
    </span>` :""}  
    
    <div class="meal-header">
      <img src="${mealData.strMealThumb}"
       alt="${mealData.meal}"/>
    </div>
    <div class="meal-body">
      <h4>${mealData.strMeal}</h4>
    <button class="fav-btn active">
      <i class="far fa-heart"></i>
    </button>

    
  </div>
</div>`;
var btn = meal.querySelector(".fav-btn");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
});

    meals.appendChild(meal);
}

function addMealToLS(mealId){
  var mealIds = getMealsFromLS();
  localStorage.setItem('mealIds', JSON.stringify ([...mealIds]));
}

function removeMealsFromLS(mealId){
  var mealIds = getMealsFromLS();
  localStorage.setItem('mealIds', JSON.stringify ([...mealIds]));
}



function getMealsFromLS() {
  var mealIds = JSON.parse(localStorage.getItem('mealIds'));
  return mealIds;
}

//calling the variable meals & appending from the ID so it will show up
//the button should store to local storage & add the meal to favourites list