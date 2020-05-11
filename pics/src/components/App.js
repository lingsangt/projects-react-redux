import React from 'react';
import axios from 'axios';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';


class App extends React.Component {

    /*
    Initialize images state to be empty array instead of null, so that 
    app would not crash if we had to access property of images (say, length) 
    before search is returned.
    */
    state = {images: []};

    /*
    We have to use this.setState, so we use an arrow function.

    If this were not an arrow function, the keyword 'this' in this.setState here
    would refer to the object to the left of the dot that called this function, 
    which is 'this.props' in the onFormSubmit function in SearchBar. 
    'this.props' happens to be this.onSearchSubmit (as you can see in the 
    render method of App.js)! So use an array function because you need 'this'
    to be binded to an instance of App.
    */
    onSearchSubmit = async term => {

        /*
        As per axios documentation https://unsplash.com/documentation#search-photos, to get a single page of photo results for
        a query, make a get request:

        GET /search/photos

        Go to 'Location' under 'Schema' to see that the root address to make
        the request at is https://unsplash.com/

        Go to public actions under Authorizations for documentation on adding 
        headers.
        */
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState ({images: response.data.results});

    }

    render() {
        return (
            <div className="ui conatiner" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }

};

export default App;