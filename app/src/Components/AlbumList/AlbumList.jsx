import Album from "../Album/Album";
import { AppStateValue } from "../../Context/AppContext";

function Results() {
  const [{ artistAlbums }, dispatch] = AppStateValue();
  return (
    <div>
      {
          artistAlbums.map((album) => <Album key={album.id} {...album} />)
      }
    </div>
  );
}

export default Results;
