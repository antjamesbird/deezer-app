import React from 'react';
import TrackList from '../TrackList/TrackList';
import { AppState } from '../../Context/AppContext';
import Album from '../Album/Album';

function Detail() {
  const [{ trackList, curentAlbumFull }] = AppState();

  return (
    <div className="detail">
      <div className="current-album">
        <Album disableSearch size="lg" album={curentAlbumFull} />
      </div>
      <div className="track-list">
        <ul>
          <li>
            <span className="heading">
              <strong>#</strong>
            </span>
            <span className="heading">
              <strong>Title</strong>
            </span>
            <span className="heading">
              <strong>Artist</strong>
            </span>
            <span className="heading">
              <strong>Time</strong>
            </span>
            <span className="heading">
              <strong>Released</strong>
            </span>
          </li>
          {trackList.map((track, index) => (
            <TrackList
              key={track.id}
              release={curentAlbumFull.release_date}
              index={index}
              track={track}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Detail;
