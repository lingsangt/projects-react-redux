import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';


class App extends React.Component {

    onSearchSubmit(term) {

        /*
        As per axios documentation https://unsplash.com/documentation#search-photos, to get a single page of photo results for
        a query, make a get request:

        GET /search/photos

        Go to 'Location' under 'Schema' to see that the root address to make
        the request at is https://unsplash.com/

        Go to public actions under Authorizations for documentation on adding 
        headers.
        */
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID n-T-wgrEgXFEPrBwFWwb6hwfhehvimCFowi8rX8qIlc'
            }

        }).then(response => {
            console.log (response.data.results);
        });

    }

    render() {
        return (
            <div className="ui conatiner" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }

};

export default App;