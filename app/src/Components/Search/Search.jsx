import { useState } from "react";
import { useApi } from "../../Hooks/useApi";
import { AppStateValue } from "../../Context/AppContext";
import { CONSTANTS } from "../../Constants/index";

function Search() {
  const [query, setQuery] = useState("");
  const url = query && `${CONSTANTS.search}?q=${query}`;

  const { status, data, error } = useApi(url);
  const [{ searchResults }, dispatch] = AppStateValue();
  console.log("searchResults", searchResults);
  const handleSearch = (e) => {
    const query = e.target.value;
    if (query) {
      setQuery(query);
    }
  };
  
  console.log('data', data);
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
