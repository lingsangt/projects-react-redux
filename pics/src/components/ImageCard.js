import React from 'react';

/*
Process:
Let the ImageCard render itself and its image.
Reach into the DOM and figure out the height of the image.
Set the image height on state to get the component to rerender.
When rerendering, assign a 'grid-row-end' to make sure the image 
takes up the appropriate space.
*/
class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    /*
    We can pass this as a particular JSX element with the ref 
    property within the props when we render the image, and use 
    this to reference the image throughout here.
    */
    this.imageRef = React.createRef();
  }

  /*
  Recall that we let the image render itself first, then we reach into
  the DOM and figure out the height of the image.

  this.imageRef = {current: {img:  , accessKey, clientHeight, ....}}
  */
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    
    /*
    Note that if we wanted to get the height of a specific image, we 
    would write document.querySelector('img').clientHeight (if there
    only the one img tag).
    */
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    /*
    Note that ref is a JSX tag, not a DOM element.
    */
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
