import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SuggVideoList from "./SuggVideoList";
import MainVideo from "./MainVideo";
import UseVideos from "./UseVideos";

const AppTube = () => {
  const [selectedVideo, setselectedVideo] = useState(null);
  const [responseVideos, searchFunction] = UseVideos("Cricket");

  useEffect(() => {
    setselectedVideo(responseVideos[0]);
  }, [responseVideos]);

  return (
    <div className="ui container">
      <SearchBar handleSubmit={searchFunction} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <MainVideo video={selectedVideo} />
          </div>
          <div className="five wide column">
            <SuggVideoList
              videos={responseVideos}
              onVideoSelect={setselectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppTube;
