import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Billa Theme", duration: "02:30" },
    { title: "Mankataha", duration: "05:00" },
    { title: "Thupakki", duration: "04:30" },
    { title: "Bigil", duration: "03:50" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
