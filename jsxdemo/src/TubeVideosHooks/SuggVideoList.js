import React from "react";
import SuggVideo from "./SuggVideo";

class SuggVideoList extends React.Component {
  render() {
    return (
      <div className="ui relaxed divided list">
        {this.props.videos.map((video) => {
          return (
            <SuggVideo
              key={video.id.videoId}
              video={video}
              onVideoSelect={this.props.onVideoSelect}
            />
          );
        })}
      </div>
    );
  }
}

export default SuggVideoList;
