import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render (<App />, document.querySelector ('#root'));

/*
Part 3: We continue from Part 2 and work out a way to submit the information on the form from
the SearchBar. 

We work out how to pass the input from the SearchBar back up to 
App, so that App could make the API to fetch the results. Recall that in the 
'flowchart', App go 'down' to the children SearchBar and ImageList. Since props 
can only be passed down from parent to child in the flowchart, we cannot just 
simply pass the input in SearchBar as a prop back to App. 

Instead, we use a trick. We turn App into a class-based component. In App, 
define a call-back called this.onSearchSubmit, and pass this.onSearchSubmit 
as a prop to SearchBar. Then, in onFormSubmit in SearchBar, we can pass the input 
back to App by calling this.props.onSubmit (this.state.term).




*/