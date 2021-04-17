import React from 'react';
import PropTypes from 'prop-types';

function List({ track, index }) {
  return (
    <li>
      <span>{index + 1}</span>
      <span>{track.title}</span>
      <span>{track.artist.name}</span>
      <span>{track.duration}</span>
      <span>{track.release || '0000'}</span>
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
};

List.defaultProps = {
  track: {},
  index: null,
};

export default List;
