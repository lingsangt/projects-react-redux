import React from 'react';

const ImageList = (props) => {
    
    /*
    If we did not add a key prop, it gives a Warning that Each child in a 
    list should have a unique 'key' prop.

    Whenever we are updating a list to be rendered, the newly rendered list
    must be matched to items currently in the DOM via keys. We use the ID of 
    the items as the key for the item because the ID often uniquely identifies 
    the item.
    */
    const images = props.images.map ( (image) => {
        return <img key={image.id} src={image.urls.regular} />;
    });

    return <div>{images}</div>;
};

export default ImageList;