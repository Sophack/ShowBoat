
let showTitle = document.getElementById("titleId");
let showPoster = document.getElementById("show-poster");
let showGenres = document.getElementById("genresId");
let showDuration = document.getElementById("durationId");
let showReleaseDate = document.getElementById("releaseDateId");
let showSimilarTitles = document.getElementById("recommended");
let showUserRating = document.getElementById("userRatingId");
let showCriticScore = document.getElementById("criticsScoreId");
let showAvaileableOn = document.getElementById("availableOnId")
let showType = document.getElementById("typeId");
/* <li id="starringId">Starring:</li> */

function resultsPage() {
    // on load of second html, get object from local storage
    const showDetails = localStorage.getItem("searchedShow");
    show = JSON.parse(showDetails)
    // console.log("showDetails: ", JSON.parse(showDetails));
    console.log(show);
    console.log(show.title);
    console.log(show.genres);
    for (i = 0; i < show.genres.length; i++) {
        console.log(show.genres[i]);
    };
    console.log(show.runtime);
    console.log(show.releaseDate);
    console.log(show.similarTitles);
    console.log(show.userRating);
    console.log(show.criticScore);
    console.log(show.findOn);
    console.log(show.type);



    showTitle.textContent = "Title: " + (show.title);
    showAvaileableOn.textContent = "Available on: " + (show.findOn);
    showReleaseDate.textContent = "Release date: " + (show.releaseDate);
    /* <li id="starringId">Starring:</li> */
    showUserRating.textContent = "User Rating: " + (show.userRating);
    showCriticScore.textContent = "Critics Score: " + (show.criticScore);
    showDuration.textContent = "Duration: " + (show.runtime);
    showGenres.textContent = "Genre(s): " + (show.genres);
    showType.textContent = "Type: " + (show.type);

    showPoster = (show.poster);

    // for this, we'll need to fetch the IDs and use those IDs to get the poster
    // showSimilarTitles = (show.similarTitles);
    for (i = 0; i < show.similarTitles.length; i++) {
        // console.log(show.similarTitles[i]);
        titleId = (show.similarTitles[i])
        // then we can fetch using the id
        idSearchLink = 'https://api.watchmode.com/v1/title/' + titleId + '/details/?apiKey=Fwh0ajztLiFlfUgwLyKvODRDtIlZpC46tMBPivKJ&append_to_response=sources';
        // console.log(idSearchLink);
        // can we do a pull in script.js for name, id & poster then store locally, so when we need to get the posters for similar titles, we dont need to call from api
        fetch(idSearchLink)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // console.log(data.title);
                // console.log(data.poster);
                showSimilarTitles = (data.poster)
            });

    };
};

resultsPage();