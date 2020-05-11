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



*/