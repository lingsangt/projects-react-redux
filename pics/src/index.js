import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render (<App />, document.querySelector ('#root'));

/*
Part 6: Display Images in a Grid


Notes on ImageList.css

grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
-grid-template-columns creates a set number of columns, and auto-fill 
    means that css will decide the number of columns. 
-Each column would be minimum 250 pixels wide, and at most 1fr (which means
    maximum allocation of space, where every column we create is equal in 
    size).



grid-auto-rows: 10px;
-How tall each row is. 


grid-row-end: span 3
m-eans that this cell takes up 3 cells of space (vertically)

Because each image requires a different span size, we create imagecards for 
each image.


*/