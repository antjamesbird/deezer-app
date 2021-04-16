import { AppStateValue } from "../../Context/AppContext";
import { EVENT_TYPES } from "../../Reducers/AppReducer";

function AutoComplete({ ...props }) {
    console.log('fdsf', props);
  const [, dispatch] = AppStateValue();
  const handleClick = (e) => {
    dispatch({
        type: EVENT_TYPES.SET_ALBUMS,
        setAlbums: true,
        autocomplete: [],
        artist: props.name
    })
    console.log("e", props.id);
  };
  return (
    <li>
      <button onClick={handleClick}>
        <span>
          {props.name} - {props.title}
        </span>
      </button>
    </li>
  );
}

export default AutoComplete;
