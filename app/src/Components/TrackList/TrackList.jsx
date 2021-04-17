import React from 'react';
import PropTypes from 'prop-types';

function List({ track }) {
  return (
    <li>
      <span>{track.title}</span>
      <span>{track.artist.name}</span>
      <span>{track.duration}</span>
      <span>{track.release}</span>
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
};

List.defaultProps = {
  track: {},
};

export default List;
