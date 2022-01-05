# Bukit Vista Front End Programmer Test

## About The Project
Created a page where guest can check their reservation and update their Estimated Time of Arrival (ETA).

## Getting Started
### Prerequisites
 - npm / yarn (yarn is recommended)

### How to run

 1. Clone the repo
 
    ``` git clone https://github.com/vincen-tho/isomorphic.git ```

 2. Install NPM packages
 
    ``` yarn install ```

 3. Run local server
 
    ``` yarn start ```

 4. Open http://localhost:3000/ on your browser


## Notes

### How to navigate inside the website
 1. Press the sign in button (you don't need to fill username/password) 
 2. Navigate to guest portal

My work is inside the customApp folder.

Directory: 
```
src
    ├── components
    ├── containers
    ├── customApp
    │   ├── components
    │   │   ├── BookingDetails.js
    │   │   ├── Search.js
    │   │   └── UpdateTime.js  
    |   |   
    │   ├── containers
    │   │   └── guestDetails.js
    │   |
    │   ├── config.js
    │   ├── router.js
    │   └── sidebar.js
    ├── helpers
    ├── Image
    ├── ...
    ├── ...
    ├── ...
    └── serviceWorker.js
```

- guestDetails.js is the main file (equivalent to an App.js file)
- BookingDetails.js is a component used to render the booking details
- Serach.js is a component used to create a text field capable of searching booking codes with query validation
- A GET request is made every time the query changes
- UpdateTime.js is a component used to update the arrival time of guest
- A PUT request is made when the user click on the submit button

### Could be improved
- Also make a GET request when user click the submit button when changing arrival time so that the arrival time displayed on the page could be updated without having to change the query first
