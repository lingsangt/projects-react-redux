import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};
    
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

