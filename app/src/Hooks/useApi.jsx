import { useEffect, useRef, useReducer } from "react";

export const useApi = (url) => {
  const cache = useRef({});

  const initialState = {
    status: "",
    error: null,
    data: [],
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SEARCHING":
        return { ...initialState, status: "searching" };
      case "SEARCH_COMPLETE":
        return { ...initialState, status: "complete", data: action.payload };
      case "SEARCH_ERROR":
        return { ...initialState, status: "error", error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    console.log("gets here");
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: "SEARCHING" });
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: "SEARCHING", payload: data });
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;
          if (cancelRequest) return;
          dispatch({ type: "SEARCH_COMPLETE", payload: data });
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
