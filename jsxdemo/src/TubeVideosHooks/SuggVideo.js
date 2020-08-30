import React from "react";
import "./VideoItem.css";

class SuggVideo extends React.Component {
  render() {
    const video = this.props.video;
    return (
      <div
        className="video-item item"
        onClick={() => this.props.onVideoSelect(video)}
      >
        <img
          className="ui image"
          alt={video.snippet.title}
          src={video.snippet.thumbnails.high.url}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default SuggVideo;
