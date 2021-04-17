import React from 'react';
import TrackList from '../TrackList/TrackList';
import { AppStateValue } from '../../Context/AppContext';

function Detail() {
  const [{ trackList }] = AppStateValue();

  return (
    <div>
      <h1>{trackList.title}</h1>
      <ul>
        <li>
          <span>Title</span>
          <span>Artist</span>
          <span>Time</span>
          <span>Released</span>
        </li>
        {trackList.map((track) => (
          <TrackList key={track.id} track={track} />
        ))}
      </ul>
    </div>
  );
}

export default Detail;
