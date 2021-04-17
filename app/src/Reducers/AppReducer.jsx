export const EVENT_TYPES = Object.freeze({
  SET_SEARCH_RESULTS: Symbol('SET_SEARCH_RESULTS'),
  SET_CLEAR_RESULTS: Symbol('SET_CLEAR_RESULTS'),
  SET_ALBUMS: Symbol('SET_ALBUMS'),
  SEARCHING: Symbol('SEARCHING'),
  SET_ALBUM_TRACKS: Symbol('SET_ALBUM_TRACKS'),
});

const reducer = (state, action) => {
  switch (action.type) {
    case EVENT_TYPES.SET_SEARCH_RESULTS: {
      const autocomplete = action.searchResults.map((item) => ({
        id: item.id,
        name: item.artist.name,
        title: item.title,
        artistId: item.artist.id,
      }));
      return {
        ...state,
        searchResults: action.searchResults,
        autocomplete,
      };
    }
    case EVENT_TYPES.SET_CLEAR_RESULTS: {
      return {
        ...state,
        searchResults: action.searchResults,
        setAlbums: action.setAlbums,
        trackList: action.trackList,
        autocomplete: action.autocomplete,
      };
    }
    case EVENT_TYPES.SET_ALBUMS: {
      const artistAlbums = state.searchResults.filter(
        (item) => item.artist.name === action.artist
      );
      return {
        ...state,
        setAlbums: action.setAlbums,
        autocomplete: action.autocomplete,
        artistAlbums,
      };
    }
    case EVENT_TYPES.SEARCHING: {
      return {
        ...state,
        searchstatus: action.searchstatus,
      };
    }
    case EVENT_TYPES.SET_ALBUM_TRACKS: {
      return {
        ...state,
        trackList: action.trackList,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
