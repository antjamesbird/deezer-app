import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

export const StateContext = createContext([[], () => {}]);

export const Provider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

Provider.propTypes = {
    
  reducer: PropTypes.func,
  initialState: PropTypes.shape({
    searchResults: PropTypes.array,
  }),
};

Provider.defaultProps = {
  reducer: () => null,
  initialState: {},
  children: null,
};

export const AppStateValue = () => useContext(StateContext);
