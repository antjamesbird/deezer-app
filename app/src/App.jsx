import { Fragment } from "react";
import "./App.css";
import Search from "./Components/Search/Search";
import Results from "./Components/Results/Results";
import Detail from "./Components/Detail/Detail";

function App() {
  return (
    <Fragment>
      <Search />
      <Results />
      <Detail />
    </Fragment>
  );
}

export default App;
