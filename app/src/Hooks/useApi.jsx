import { useEffect, useRef, useReducer } from "react";

export const useApi = (url) => {
  const cache = useRef({});

  const initialState = {
    status: "",
    error: null,
    data: null,
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SEARCHING":
        return { ...initialState, status: "searching" };
      case "SEARCH_COMPLETE":
          console.log('action', action);
        return { ...initialState, status: "complete", data: action.payload };
      case "SEARCH_ERROR":
        return { ...initialState, status: "error", error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: "SEARCHING" });
      if (cache.current[url]) {
          console.log('in cache', cache.current[url]);
        const data = cache.current[url].data;
        console.log('cache', cache);
        console.log('data', data);
        dispatch({ type: "SEARCH_COMPLETE", payload: data });
      } else {
        try {
            console.log('make call');
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;
          if (cancelRequest) return;
          dispatch({ type: "SEARCH_COMPLETE", payload: data.data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: "SEARCH_ERROR", payload: error.message });
        }
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return state;
};
