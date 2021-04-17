import React from 'react';
import PropTypes from 'prop-types';
import { AppStateValue } from '../../Context/AppContext';
import { EVENT_TYPES } from '../../Reducers/AppReducer';

function AutoComplete({ result }) {
  const [, dispatch] = AppStateValue();
  const handleClick = () => {
    dispatch({
      type: EVENT_TYPES.SET_ALBUMS,
      setAlbums: true,
      autocompleteList: [],
      autoCompleteActive: false,
      artist: result.name,
      searchstatus: '',
      trackList: [],
    });
  };
  return (
    <li aria-hidden="true" onClick={handleClick}>
      <span>
        {result.name} - {result.title}
      </span>
    </li>
  );
}

AutoComplete.propTypes = {
  result: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
  }),
};

AutoComplete.defaultProps = {
  result: {},
};

export default AutoComplete;
