import React from 'react';
import Album from '../Album/Album';
import { AppState } from '../../Context/AppContext';

function AlbumList() {
  const [{ artistAlbums }] = AppState();
  return (
    <div className="album-list">
      {artistAlbums.map((album) => (
        <Album key={album.id} album={album} size="md" />
      ))}
    </div>
  );
}

export default AlbumList;
