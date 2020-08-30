import React from "react";

class MainVideo extends React.Component {
  render() {
    if (!this.props.video) {
      return "Select a video";
    }

    const videoSrc =
      "https://www.youtube.com/embed/" + this.props.video.id.videoId;
    return (
      <div>
        <div className="ui embed">
          <iframe title="Video Player" src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4>{this.props.video.snippet.title}</h4>
          <p>{this.props.video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default MainVideo;
