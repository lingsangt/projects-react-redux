import React from 'react';

class SearchBar extends React.Component {

    onInputChange (event){

        /*
        For input type="text" onChange event, event.target.value is the 
        input text the user entered.
        */
        console.log (event.target.value);
    }

    onInputClick(){
        console.log ('Input was clicked!');
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
                <form className = "ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onClick={this.onInputClick} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;