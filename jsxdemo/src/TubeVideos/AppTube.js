import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/Youtube";
import SuggVideoList from "./SuggVideoList";
import MainVideo from "./MainVideo";

const KEY = "AIzaSyC6yphgB1k6vdqwEm8E984eI_1k6B7C4WM";

class App extends React.Component {
  state = { responseVideos: [], selectedVideo: null };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (searchText) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        type: "video",
        maxResults: "10",
        key: KEY,
        q: searchText,
      },
    });

    this.setState({
      responseVideos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar handleSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <MainVideo video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <SuggVideoList
                videos={this.state.responseVideos}
                onVideoSelect={this.handleVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
