import { FETCH_ARTWORKS_SUCCESS, FETCH_ARTWORK_DETAILS_SUCCESS } from '../actions/artworks';

// Initial state for the artworks reducer
const initialState = {
  list: [],             // List of artworks
  selectedArtwork: null, // Currently selected artwork
};

// Artworks reducer function
const artworksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTWORKS_SUCCESS:
      return {
        ...state,
        list: action.payload, // Update the list of artworks
      };
    case FETCH_ARTWORK_DETAILS_SUCCESS:
      return {
        ...state,
        selectedArtwork: action.payload, // Update the selected artwork
      };
    default:
      return state;
  }
};

export default artworksReducer;
