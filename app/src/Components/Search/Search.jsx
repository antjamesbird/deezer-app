import { useState, useEffect } from "react";
import { useApi } from "../../Hooks/useApi";
import { AppStateValue } from "../../Context/AppContext";
import { CONSTANTS } from "../../Constants/index";
import { EVENT_TYPES } from "../../Reducers/AppReducer";

function Search() {
  const [query, setQuery] = useState("");

  const url = query && `${CONSTANTS.search}?q=${query}`;
  const { status, data, error } = useApi(url);

  const [, dispatch] = AppStateValue();
  
  const handleSearch = (e) => {
    const query = e.target.value;

    if (!query) {
      console.log('yo');
      dispatch({
        type: EVENT_TYPES.SET_CLEAR_RESULTS,
        searchResults: [],
        setAlbums: false,
        trackList: []
      });
      return;
    }
    setQuery(query);
  };

  useEffect(() => {
    if (status === "searching") {
      dispatch({
        type: EVENT_TYPES.SEARCHING,
        searchstatus: status,
      });
    }

    if (data) {
      dispatch({
        type: EVENT_TYPES.SET_SEARCH_RESULTS,
        searchResults: data,
      });
    }
  }, [data, dispatch, status]);

  console.log("data", data);
  return (
    <form>
      <label>
        <input type="text" onChange={handleSearch} name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Search;
