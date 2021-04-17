import React from 'react';
import PropTypes from 'prop-types';

function List({ track, index, release }) {
  const formatTime = (seconds) => {
    const date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  };
  return (
    <li>
      <span>{index + 1}</span>
      <span>{track.title}</span>
      <span>{track.artist.name}</span>
      <span>{formatTime(track.duration)}</span>
      <span>{release}</span>
    </li>
  );
}

List.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string,
    duration: PropTypes.number,
    release: PropTypes.string,
    artist: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
  index: PropTypes.number,
  release: PropTypes.string,
};

List.defaultProps = {
  track: {},
  index: null,
  release: '',
};

export default List;
