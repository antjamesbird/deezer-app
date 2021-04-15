import { Fragment } from "react";
import { Provider, AppStateValue } from "./Context/AppContext";
import { initialState } from "./State/state";
import reducer from "./Reducers/AppReducer";
import "./App.css";
import Search from "./Components/Search/Search";
import AlbumList from "./Components/AlbumList/AlbumList";
import Detail from "./Components/Detail/Detail";

function App() {
  return (
    <Provider initialState={initialState} reducer={reducer}>
      <Fragment>
        <Search />
        <AlbumList />
        <Detail />
      </Fragment>
    </Provider>
  );
}

export default App;
