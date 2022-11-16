# ShowBoat 

## Description

A movie and TV show database that allows a user to search a show and find out which streaming service hosts it and provides additional information, while allowing users to save shows to a watchlist. 

## Initial Wireframes & User Flow

![Screenshot 2022-11-15 at 8 57 38 PM](https://user-images.githubusercontent.com/113313870/202065439-7afb3490-5be9-442c-a3a7-358a575554f1.png)

- Home/Search page:
  - user visits site and can either search a show or open their likes list
  - User can see and spin a carousel that shows which streaming services are included in the database 
  - The Header of the page always navigates a user to home search page when clicked 

![Screenshot 2022-11-15 at 8 57 43 PM](https://user-images.githubusercontent.com/113313870/202065557-33a5f843-9467-4f06-b3e1-66bdb84e3e1f.png)

- Results Page:
  -   User is displayed which streaming service provides the show/movie alongside basic information about the show/movie
  -   User can click the heart icon to like a show/movie and open a modal displaying their watchlist. 
  -   User can close the modal or remove items from the watchlist 
  -   User can search additional shows/movies. When submitted, navigates to a new results page
  -   Similar titles the user may like are populated in the carousel below the result 
  -   Header when clicked, navigates back to home page. 


![Screenshot 2022-11-15 at 8 57 38 PM](https://user-images.githubusercontent.com/113313870/202065576-f883f564-aa7e-4ce2-bc02-85e6e0e2030e.png)

- Modal for watchlist:
  - This stores users watchlist in local storage and displys a list of liked shows/movies. 
  - User can remove individual items
  - User can close modal. 

## API's Used:
- https://api.watchmode.com/docs/#search 
- Currently researching a second API. 

## MVP:
- Fully functional logic as outlined in "User Flow" 
- A basic html structure that allows the logic to be showcased effectively
- A basic CSS with our chosen color scheme 
