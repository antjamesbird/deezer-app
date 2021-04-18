export const EVENT_TYPES = Object.freeze({
  SET_SEARCH_RESULTS: Symbol('SET_SEARCH_RESULTS'),
  SET_CLEAR_RESULTS: Symbol('SET_CLEAR_RESULTS'),
  SET_ALBUMS: Symbol('SET_ALBUMS'),
  SEARCH_STATUS: Symbol('SEARCH_STATUS'),
  SET_CURRENT_ALBUM_FULL: Symbol('SET_CURRENT_ALBUM_FULL'),
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
        query: action.query,
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
        query: action.query,
      };
    }
    case EVENT_TYPES.SET_ALBUMS: {
      const getArtistAlbumns = state.searchResults.filter(
        (item) => item.artist.name === action.artist
      );
      // Filter out duplicates
      const filter = {};
      const artistAlbums = [];
      getArtistAlbumns.forEach((item) => {
        filter[item.album.id] = item;
      });
      const keys = Object.keys(filter);
      keys.forEach((key) => {
        // eslint-disable-next-line no-prototype-builtins
        if (filter.hasOwnProperty(key)) {
          artistAlbums.push(filter[key]);
        }
      });
      return {
        ...state,
        setAlbums: action.setAlbums,
        autocompleteList: action.autocompleteList,
        artistAlbums,
        autoCompleteActive: action.autoCompleteActive,
        searchstatus: action.searchstatus,
        trackList: action.trackList,
      };
    }
    case EVENT_TYPES.SEARCH_STATUS: {
      return {
        ...state,
        searchstatus: action.searchstatus,
      };
    }
    case EVENT_TYPES.SET_CURRENT_ALBUM_FULL: {
      return {
        ...state,
        curentAlbumFull: action.curentAlbumFull,
        trackList: action.trackList,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
