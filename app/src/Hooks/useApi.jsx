import { useEffect, useRef, useReducer } from 'react';

const useApi = (url) => {
  const cache = useRef({});

  const initialState = {
    status: '',
    error: null,
    data: null,
  };

  const [state, dispatch] = useReducer((reducerstate, action) => {
    switch (action.type) {
      case 'SEARCHING':
        return { ...initialState, status: 'Searching...' };
      case 'SEARCH_COMPLETE':
        return {
          ...initialState,
          status: 'Search Results...',
          data: action.payload,
        };
      case 'SEARCH_ERROR':
        return {
          ...initialState,
          status: 'There was an error...',
          error: action.payload,
        };
      default:
        return reducerstate;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: 'SEARCHING' });
      if (cache.current[url]) {
        const { data } = cache.current[url];
        dispatch({ type: 'SEARCH_COMPLETE', payload: data });
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;
          if (cancelRequest) return;
          dispatch({ type: 'SEARCH_COMPLETE', payload: data.data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: 'SEARCH_ERROR', payload: error.message });
        }
      }
    };

    fetchData();

    // eslint-disable-next-line consistent-return
    return () => {
      cancelRequest = true;
    };
  }, [url]);

  return state;
};

export default useApi;
