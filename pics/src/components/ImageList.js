import React from 'react';

import './ImageList.css';

const ImageList = (props) => {
    
    /*
    If we did not add a key prop, it gives a Warning that Each child in a 
    list should have a unique 'key' prop.

    Whenever we are updating a list to be rendered, the newly rendered list
    must be matched to items currently in the DOM via keys. We use the ID of 
    the items as the key for the item because the ID often uniquely identifies 
    the item.

    
    React often requests for an alt prop as well, in order to give a meaningful 
    description if the image is not available. We thus have as well
    alt={image.description}
    */
    const images = props.images.map ( ({description, id, urls}) => {
        return <img alt={description} key={id} src={urls.regular} />;
    });

    return <div>{images}</div>;
};

export default ImageList;