import { useState, useEffect } from 'react';
import { useApi } from "../../Hooks/useApi";
import { CONSTANTS } from "../../Constants/index";
import { AppStateValue } from "../../Context/AppContext";
import { EVENT_TYPES } from "../../Reducers/AppReducer";

function Album({ ...props }) {
  const [{ searchResults }, dispatch] = AppStateValue();
  const [query, setQuery] = useState("");
    const url = query && `${CONSTANTS.tracks}?q=${query}`;
    const { status, data, error } = useApi(url);
    console.log('data', data);
  const handleClick = () => {
    setQuery(props.album.id);
  };

  useEffect(() => {
    if (data) {
      dispatch({
        type: EVENT_TYPES.SET_ALBUM_TRACKS,
        trackList: data,
      });
    }
  }, [data, dispatch, status]);
  return (
    <div onClick={handleClick}>
      <img src={props.album.cover_medium} alt={props.album.title} />
      <h2>{props.album.title}</h2>
    </div>
  );
}

export default Album;
