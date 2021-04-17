import React from 'react';
import TrackList from '../TrackList/TrackList';
import { AppStateValue } from '../../Context/AppContext';
import Album from '../Album/Album';

function Detail() {
  const [{ trackList, curentAlbum }] = AppStateValue();

  return (
    <div className="detail">
      <div className="current-album">
        <Album size="lg" album={curentAlbum} />
      </div>
      <div className="track-list">
        <ul>
          <li>
            <span>#</span>
            <span>Title</span>
            <span>Artist</span>
            <span>Time</span>
            <span>Released</span>
          </li>
          {trackList.map((track, index) => (
            <TrackList key={track.id} index={index} track={track} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Detail;
