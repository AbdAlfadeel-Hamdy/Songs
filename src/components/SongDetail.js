import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) return <h3>Select a song</h3>;
  return (
    <div>
      <h3>Details:</h3>
      <p>
        Title: {song.title} <br /> Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
