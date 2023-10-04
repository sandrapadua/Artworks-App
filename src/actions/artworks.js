import axios from 'axios';

// Define action types
export const FETCH_ARTWORKS_SUCCESS = 'FETCH_ARTWORKS_SUCCESS';
export const FETCH_ARTWORK_DETAILS_SUCCESS = 'FETCH_ARTWORK_DETAILS_SUCCESS';

// Action creator to fetch a list of artworks
export const fetchArtworks = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://api.artic.edu/api/v1/artworks'
    );
    dispatch({
      type: FETCH_ARTWORKS_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    console.error('Error fetching artworks:', error);
  }
};

// Action creator to fetch artwork details by ID
export const fetchArtworkDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.artic.edu/api/v1/artworks/${id}`
    );
    dispatch({
      type: FETCH_ARTWORK_DETAILS_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    console.error(`Error fetching artwork details for ID ${id}:`, error);
  }
};
