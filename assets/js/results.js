let showTitle = document.getElementById("titleId");
let showPoster = document.getElementById("show-poster");
let showLink = document.getElementById("show-link");
let showGenres = document.getElementById("genresId");
let showDuration = document.getElementById("durationId");
let showReleaseDate = document.getElementById("releaseDateId");
let showSimilarTitles = document.getElementById("recommended");
let showUserRating = document.getElementById("userRatingId");
let showCriticScore = document.getElementById("criticsScoreId");
let showAvaileableOn = document.getElementById("availableOnId")
let showType = document.getElementById("typeId");
let similarTitle0 = document.getElementById("similarTitle0");
let similarTitle1 = document.getElementById("similarTitle1");
let similarTitle2 = document.getElementById("similarTitle2");
let similarTitle3 = document.getElementById("similarTitle3");
let titlePoster = [];


function resultsPage() {
    // on load of second html, get object from local storage
    const showDetails = localStorage.getItem("searchedShow");
    show = JSON.parse(showDetails);
    // console.log("showDetails: ", JSON.parse(showDetails));
    // console.log(show);
    // console.log(show.title);
    // console.log(show.genres);
    // for (i = 0; i < show.genres.length; i++) {
    //     console.log(show.genres[i]);
    // };
    // console.log(show.runtime);
    // console.log(show.releaseDate);
    // console.log(show.similarTitles);
    // console.log(show.userRating);
    // console.log(show.criticScore);
    // console.log(show.findOn);
    // console.log(show.type);

    showTitle.textContent = "Title: " + (show.title);
    showAvaileableOn.textContent = "Available on: " + (show.findOn);
    showReleaseDate.textContent = "Release date: " + (show.releaseDate);
    /* <li id="starringId">Starring:</li> */
    showUserRating.textContent = "User Rating: " + (show.userRating);
    showCriticScore.textContent = "Critics Score: " + (show.criticScore);
    showDuration.textContent = "Duration: " + (show.runtime);
    showGenres.textContent = "Genre(s): " + (show.genres);
    showType.textContent = "Type: " + (show.type);
    showPoster.setAttribute('src', (show.poster));
    // showLink.setAttribute('href', (show.link));
    //this is the link from the poster
    // href="https://www.disneyplus.com/en-gb/movies/encanto/33q7DY1rtHQH"

    // for this, we'll need to fetch the IDs and use those IDs to get the poster
    for (i = 0; i < 4; i++) {
        idTitle = (show.similarTitles[i])
        idSearchLink = 'https://api.watchmode.com/v1/title/' + idTitle + '/details/?apiKey=8aHoTJyEcy2TVy9tyfBT3Nb0p8En8Fme0gzuLqfk&append_to_response=sources';
        fetch(idSearchLink)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                titlePoster.push((data.poster));
                console.log((data.poster));
                console.log(typeof (data.poster));
                console.log(titlePoster);
                console.log(typeof titlePoster);
            });
        console.log(i);
        
            if (i = 0){
                let src = similarTitle0.getAttribute('src');
                if (!src) {
                    similarTitle0.setAttribute('src', titlePoster[0]);
                }
            } 
            else if (i = 1) {
                let src = similarTitle0.getAttribute('src');
                if (!src) {
                    similarTitle1.setAttribute('src', titlePoster[1]);
                }
            } else if (i = 2) {
                let src = similarTitle0.getAttribute('src');
                if (!src) {
                    similarTitle2.setAttribute('src', titlePoster[2]);
                }
            } else if (i = 3) {
                let src = similarTitle0.getAttribute('src');
                if (!src) {
                    similarTitle3.setAttribute('src', titlePoster[3]);
                }
            };
        }

    // }
    // console.log(titlePoster);
    // console.log(typeof titlePoster);
    // console.log(titlePoster.keys());
    // console.log(titlePoster.keys(titlePoster));


    // console.log(titlePoster.at(0));

    // console.log(titlePoster[0]);

   
};

resultsPage();