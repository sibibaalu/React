import React, { useState, useEffect } from "react";
import youtube from "../api/Youtube";

const KEY = "AIzaSyC6yphgB1k6vdqwEm8E984eI_1k6B7C4WM";

const UseVideos = (defaultSearchText) => {
  const [responseVideos, setResponseVideos] = useState([]);

  useEffect(() => {
    searchVideo(defaultSearchText);
  }, [defaultSearchText]);

  const searchVideo = async (searchText) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        type: "video",
        maxResults: "10",
        key: KEY,
        q: searchText,
      },
    });

    setResponseVideos(response.data.items);
  };

  return [responseVideos, searchVideo];
};

export default UseVideos;
