import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "FRW", duration: "4:30" },
    { title: "Tag", duration: "3:00" },
    { title: "Basha E3tmd", duration: "2:30" },
    { title: "Samir 2amis", duration: "5:00" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
