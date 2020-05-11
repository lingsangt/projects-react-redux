import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render (<App />, document.querySelector ('#root'));

/*
Part 2: Reading Search Input


In SearchBar.js, we have the input element as an uncontrolled element:

onInputChange (event){
    console.log (event.target.value);
}

<input type="text" onChange={this.onInputChange}/>

We refactor to make it a controlled element as follows:

state = {term: ''};

<input 
    type="text" 
    value={this.state.term}
    onChange={e=>this.setState({term: e.target.value})}
/>


Recall that this is the flow we want:
User types in input
Callback gets invoked
We call setState with the new value
Component rerenders
Input is told what its value is (coming from state)


What's the difference between controlled and uncontrolled?
In the uncontrolled version before the refactor, to get the value of the input 
*right now,* react must reach into the DOM and retrieve the value out of 
<input value="hi there" />. The value was stored in the HTML World and not in 
the React World.

However, it would be better to store the value in the React World instead of 
storing the data inside the DOM. 

In the controlled version, we store the value in the React World as 
state = {term: 'hi there}, and for the DOM to retrieve the value of the input, 
we have <input value={go look at state to get current value}/>.

In controlled, we could even reformat the input easily, like using
onChange={e=>this.setState({term: e.target.value.toUpperCase()})}.



In part 2, we also work out a way to submit the information on the form from
the SearchBar. 

We first have to workout a small issue on using the keyword 'this' inside 
the function onFormSubmit. The notes for this is written in SearchBar.js. 



Then, we have to work out how to pass the input from the SearchBar back up to 
App, so that App could make the API to fetch the results. Recall that in the 
'flowchart', App go 'down' to the children SearchBar and ImageList. Since props 
can only be passed down from parent to child in the flowchart, we cannot just 
simply pass the input in SearchBar as a prop back to App. 

Instead, we use a trick. We turn App into a class-based component. In App, 
define a call-back called this.onSearchSubmit, and pass this.onSearchSubmit 
as a prop to SearchBar. Then, in onFormSubmit in SearchBar, we can pass the input 
back to App by calling this.props.onSubmit (this.state.term).





*/