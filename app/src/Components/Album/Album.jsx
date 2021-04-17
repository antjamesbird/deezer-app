import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useApi from '../../Hooks/useApi';
import CONSTANTS from '../../Constants/index';
import { AppState } from '../../Context/AppContext';
import { EVENT_TYPES } from '../../Reducers/AppReducer';

function Album({ album, size, disableSearch }) {
  const [, dispatch] = AppState();
  const [query, setQuery] = useState('');
  const url = query && `${CONSTANTS.endpoints.album}?q=${query}`;
  const { status, data } = useApi(url);

  const handleClick = () => {
    if (disableSearch) return;
    const { id } = album.album;
    setQuery(id);
    if (data) {
      dispatch({
        type: EVENT_TYPES.SET_CURRENT_ALBUM_FULL,
        trackList: data.tracks.data,
        curentAlbumFull: data,
      });
    }
  };

  useEffect(() => {
    if (data) {
      dispatch({
        type: EVENT_TYPES.SET_CURRENT_ALBUM_FULL,
        trackList: data.tracks.data,
        curentAlbumFull: data,
      });
    }
  }, [data, dispatch, status]);
  return (
    <div aria-hidden="true" onClick={handleClick}>
      <img
        src={
          size === 'md'
            ? album.cover_medium || album.album.cover_medium
            : album.cover_big || album.album.cover_big
        }
        alt={album.album ? album.album.title : album.title}
      />
      <h2>{album.album ? album.album.title : album.title}</h2>
    </div>
  );
}

Album.propTypes = {
  album: PropTypes.shape({
    cover_medium: PropTypes.string,
    cover_big: PropTypes.string,
    title: PropTypes.string,
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
  disableSearch: PropTypes.bool,
};

Album.defaultProps = {
  album: {},
  size: 'md',
  disableSearch: false,
};

export default Album;
