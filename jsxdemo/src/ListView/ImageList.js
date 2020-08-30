import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

class ImageList extends React.Component {
  render() {
    return (
      <div className="image-list">
        {this.props.images.map((singleImg) => {
          return <ImageCard key={singleImg.id} image={singleImg} />;
        })}
      </div>
    );
  }
}

export default ImageList;
