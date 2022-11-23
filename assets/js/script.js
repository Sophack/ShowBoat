const API_KEY = "UUeMtTmz64bqsGmtroleJMBD02GJaL6xdGABIjng";

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
                    // console.log(data);
                    // console.log(data.title);
                    // console.log(data.runtime_minutes);
                    // console.log(data.poster);
                    // console.log(data.critic_score);
                    // console.log(data.genre_names);
                    // console.log(data.release_date);
                    // console.log(data.sources);
                    // console.log(data.similar_titles);
                    // console.log(data.type);
                    // console.log(data.user_rating);

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
                            window.location.href = "./results.html";
                        };

                    };
                });

        });
};