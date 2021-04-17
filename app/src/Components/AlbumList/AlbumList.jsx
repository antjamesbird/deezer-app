import React from 'react';
import Album from '../Album/Album';
import { AppStateValue } from '../../Context/AppContext';

function Results() {
  const [{ artistAlbums }] = AppStateValue();
  return (
    <div className="album-list">
      {artistAlbums.map((album) => (
        <Album key={album.id} album={album} size="md" />
      ))}
    </div>
  );
}

export default Results;
