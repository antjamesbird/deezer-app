import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useApi from '../../Hooks/useApi';
import CONSTANTS from '../../Constants/index';
import { AppStateValue } from '../../Context/AppContext';
import { EVENT_TYPES } from '../../Reducers/AppReducer';

function Album({ album, size }) {
  const [, dispatch] = AppStateValue();
  const [query, setQuery] = useState('');
  const url = query && `${CONSTANTS.endpoints.tracks}?q=${query}`;
  const { status, data } = useApi(url);

  const handleClick = () => {
    setQuery(album.album.id);
  };

  useEffect(() => {
    if (data) {
      dispatch({
        type: EVENT_TYPES.SET_ALBUM_TRACKS,
        trackList: data,
        curentAlbum: album,
      });
    }
  }, [data, dispatch, status]);
  return (
    <div aria-hidden="true" onClick={handleClick}>
      <img
        src={size === 'md' ? album.album.cover_medium : album.album.cover_big}
        alt={album.album.title}
      />
      <h2>{album.album.title}</h2>
    </div>
  );
}

Album.propTypes = {
  album: PropTypes.shape({
    album: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      cover_medium: PropTypes.string,
      cover_big: PropTypes.string,
    }),
    artist: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
  size: PropTypes.string,
};

Album.defaultProps = {
  album: {},
  size: 'md',
};

export default Album;
