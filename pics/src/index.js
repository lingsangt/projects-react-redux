import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render (<App />, document.querySelector ('#root'));

/*
Part 4: Making API Requests with React.

After user submits input, onSearchSubmit makes API request (via an AJAX Client) 
to Unsplash API to retrieve pictures for the search input. There are 2 libraries
frequently used in React applications to manage requests for fetching data: 
axios (3rd party package) and fetch (function built into modern browsers). We
use axios.

npm install --save axios
npm start (to restart server)

Documentation for Unsplash API:
unsplash.com/developers



Handling Axios Requests
So far, we have this for fetching images: 

onSearchSubmit (term){
    axios.get ('https://api.unsplash.com/search/photos', {
    params: {query: term},
    headers: {
        Authorization: 'Client-ID n-T-wgrEgXFEPrBwFWwb6hwfhehvimCFowi8rX8qIlc'
    }

});


Let's say we want the app to print out the number of images requests. 

This network request is a asychronous request, so there are two ways to make
it so that we can wait for the axios request to complete before moving onto 
logging the number of images fetched in the function.

Method 1:
Whenever we make a request to axios, it returns a promise object. We can 
chain on .then as follows: 

onSearchSubmit (term){
    axios.get ('https://api.unsplash.com/search/photos', {
    params: {query: term},
    headers: {
        Authorization: 'Client-ID n-T-wgrEgXFEPrBwFWwb6hwfhehvimCFowi8rX8qIlc'
    }

}).then ( (response) => {
        console.log (response);
    } 
)

This logs the whole object returned from the search query, including the status
(200 for request was successful), statusText, config for the request, and most
importantly, the data.results property that contains the list of images returned.




*/