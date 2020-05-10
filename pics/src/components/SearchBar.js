import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    /*
    Note on if onFormSubmit were not an arrow function and we had as follows:

    onFormSubmit (event){
        console.log (this.state.term);
    }

    There would be a TypeError: Cannot read property 'state' of undefined.

    'this' does not refer to an instance of the class SearchBar. For details on 
    what it may refer to, see https://www.freecodecamp.org/news/the-complete-guide-to-this-in-javascript/ 


    One solution is to bind the function in the constructor by adding this
    line to the constructor:

    this.onFormSubmit = this.onFormSubmit.bind (this);

    That line would then ensure that when the keyword 'this' is used in 
    onFormSubmit, it would refer to an instance of the class SearchBar. However,
    binding may not transpile well in Babel.



    Another solution is to write it as an arrow function as below. The difference?

    The way we wrote it above is a shorthand for this, with the keyword function:

    onFormSubmit: function(event){
        console.log (this.state.term);
    }

    And every time we have the keyword function, we get a broken value for 'this.'

    However, one feature of arrow functions is that it automatically binds the 
    value of 'this'.



    A third solution would be, instead of writing this in the render function

    <form onSubmit={this.onFormSubmit} ...

    we wrap that into an arrow function as

    <form onSubmit={() => this.onFormSubmit ()} ... 

    */

    onFormSubmit = event => {

        //Don't want the form to automatically submit itself and refresh the page
        event.preventDefault ();


    }
    
    render(){

        /*
        Note the {this.onInputChange} has no extra parenthesis like this.onInputChange()

        If there were parenthesis, the function would be called everytime render was called.
        But without the parenthesis, this.InputChange is just passed in as a reference to 
        <input /> onChange.

        Other examples of event handlers are onClick and onSubmit.

        Note that we can't attach these event handlers to div elements because div elements can't 
        be clicked.
        */
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className = "ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={e=>this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;

