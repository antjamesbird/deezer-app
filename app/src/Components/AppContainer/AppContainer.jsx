import React, { Fragment } from 'react';
import { AppState } from '../../Context/AppContext';
import './Container.css';
import Search from '../Search/Search';
import AlbumList from '../AlbumList/AlbumList';
import Detail from '../Detail/Detail';
import AutoComplete from '../AutoComplete/AutoComplete';

function AppContainer() {
  const [
    {
      autocompleteList,
      setAlbums,
      trackList,
      searchstatus,
      searchResults,
      autoCompleteActive,
      query,
    },
  ] = AppState();

  return (
    <div className="container">
      <div className="header">
        <Search />
        {!!searchstatus && (
          <div className="search-status">
            <p>
              <strong>{searchstatus}</strong>
            </p>
          </div>
        )}

        {autoCompleteActive && (
          <div className="auto-complete">
            {autocompleteList.length > 0 && (
              <ul>
                {autocompleteList.map((item) => (
                  <AutoComplete key={item.id} result={item} />
                ))}
              </ul>
            )}
            {searchResults.length === 0 && (
              <div className="no-results">
                <p>No Results matched your search</p>
              </div>
            )}
          </div>
        )}
      </div>
      {setAlbums && (
        <>
          <h1>Rearch results for: {query}</h1>
          <AlbumList />
        </>
      )}
      {trackList.length > 0 && <Detail />}
    </div>
  );
}

export default AppContainer;
