YOUR_API_KEY = "Fwh0ajztLiFlfUgwLyKvODRDtIlZpC46tMBPivKJ";
// const showInfo = document.querySelector("#show-info");
// let count = document.getElementById("show-info").children().length;
// const availableOn = showInfo.querySelector('#second');
// const home = window.open("home.html");
// const results = window.open("results.html")
// let availableOn = results.document.getElementById("availableOnId")

// fetch('https://api.watchmode.com/v1/sources/?apiKey=Fwh0ajztLiFlfUgwLyKvODRDtIlZpC46tMBPivKJ')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log (data); 
//         console.log(data[0].name);
//         for (var i = 0; i < data.length; i++) {
//             console.log(data[i].name);
//         }
//     });


function addToURL() {
    let searchValue = document.getElementById("search-text").value

    console.log(searchValue);
    console.log(typeof searchValue);

    let searchBarLink = 'https://api.watchmode.com/v1/search/?apiKey=Fwh0ajztLiFlfUgwLyKvODRDtIlZpC46tMBPivKJ&search_field=name&search_value='

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
            idSearchLink = 'https://api.watchmode.com/v1/title/' + titleId + '/details/?apiKey=Fwh0ajztLiFlfUgwLyKvODRDtIlZpC46tMBPivKJ&append_to_response=sources';
            console.log(idSearchLink);
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
        



        // function redirectResults(){
        //     window.location.href='./results.html';
        // };
