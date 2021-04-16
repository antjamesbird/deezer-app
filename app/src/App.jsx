import { Provider } from "./Context/AppContext";
import { initialState } from "./State/state";
import reducer from "./Reducers/AppReducer";
import "./App.css";
import AppContainer from "./Components/AppContainer/AppContainer";

function App() {
  return (
    <Provider initialState={initialState} reducer={reducer}>
      <AppContainer />
    </Provider>
  );
}

export default App;
