import React, { Fragment } from 'react';
import { AppStateValue } from '../../Context/AppContext';
import Search from '../Search/Search';
import AlbumList from '../AlbumList/AlbumList';
import Detail from '../Detail/Detail';
import AutoComplete from '../AutoComplete/AutoComplete';

function AppContainer() {
  const [{ autocomplete, setAlbums, trackList }] = AppStateValue();
  return (
    <>
      <Search />
      {autocomplete.length > 0 && (
        <ul>
          {autocomplete.map((item) => (
            <AutoComplete key={item.id} result={item} />
          ))}
        </ul>
      )}
      {setAlbums && <AlbumList />}
      {trackList.length > 0 && <Detail />}
    </>
  );
}

export default AppContainer;
