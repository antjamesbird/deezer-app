import React, { useState, useEffect } from 'react';
import useApi from '../../Hooks/useApi';
import { AppState } from '../../Context/AppContext';
import CONSTANTS from '../../Constants/index';
import { EVENT_TYPES } from '../../Reducers/AppReducer';

function Search() {
  const [query, setQuery] = useState('');

  const url = query && `${CONSTANTS.endpoints.search}?q=${query}`;
  const { status, data } = useApi(url);

  const [, dispatch] = AppState();
  const handleSearch = (e) => {
    const searchQuery = e.target.value;

    if (!searchQuery) {
      dispatch({
        type: EVENT_TYPES.SET_CLEAR_RESULTS,
        searchResults: [],
        setAlbums: false,
        trackList: [],
        autocompleteList: [],
        autoCompleteActive: false,
        searchstatus: '',
        curentAlbum: {},
        curentAlbumFull: {},
      });
      return;
    }

    if (searchQuery.length >= 3) setQuery(searchQuery);
  };

  useEffect(() => {
    dispatch({
      type: EVENT_TYPES.SEARCH_STATUS,
      searchstatus: status,
    });
    if (data) {
      dispatch({
        type: EVENT_TYPES.SET_SEARCH_RESULTS,
        searchResults: data,
        autoCompleteActive: true,
      });
    }
  }, [data, dispatch, status]);

  return (
    <form>
      <label htmlFor="name">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          name="name"
        />
      </label>
      {/* <input type="submit" value="Submit" /> */}
    </form>
  );
}

export default Search;
