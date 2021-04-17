export const EVENT_TYPES = Object.freeze({
  SET_SEARCH_RESULTS: Symbol('SET_SEARCH_RESULTS'),
  SET_CLEAR_RESULTS: Symbol('SET_CLEAR_RESULTS'),
  SET_ALBUMS: Symbol('SET_ALBUMS'),
  SEARCH_STATUS: Symbol('SEARCH_STATUS'),
  SET_ALBUM_TRACKS: Symbol('SET_ALBUM_TRACKS'),
});

const reducer = (state, action) => {
  switch (action.type) {
    case EVENT_TYPES.SET_SEARCH_RESULTS: {
      const autocompleteList = action.searchResults.map((item) => ({
        id: item.id,
        name: item.artist.name,
        title: item.title,
        artistId: item.artist.id,
      }));
      return {
        ...state,
        searchResults: action.searchResults,
        autocompleteList,
        autoCompleteActive: action.autoCompleteActive,
      };
    }
    case EVENT_TYPES.SET_CLEAR_RESULTS: {
      return {
        ...state,
        searchResults: action.searchResults,
        setAlbums: action.setAlbums,
        trackList: action.trackList,
        autocompleteList: action.autocompleteList,
        searchstatus: action.searchstatus,
        autoCompleteActive: action.autoCompleteActive,
      };
    }
    case EVENT_TYPES.SET_ALBUMS: {
      const artistAlbums = state.searchResults.filter(
        (item) => item.artist.name === action.artist
      );
      return {
        ...state,
        setAlbums: action.setAlbums,
        autocompleteList: action.autocompleteList,
        artistAlbums,
        autoCompleteActive: action.autoCompleteActive,
        searchstatus: action.searchstatus,
      };
    }
    case EVENT_TYPES.SEARCH_STATUS: {
      return {
        ...state,
        searchstatus: action.searchstatus,
      };
    }
    case EVENT_TYPES.SET_ALBUM_TRACKS: {
      return {
        ...state,
        trackList: action.trackList,
        curentAlbum: action.curentAlbum,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
