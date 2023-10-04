import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchArtworks } from '../actions/artworks';
import '../styles.css';

function Home({ artworks, fetchArtworks }) {
  useEffect(() => {
    fetchArtworks();
  }, [fetchArtworks]);
  return (
    <div >
      <h1>Artworks</h1>
      <ul className='main-container'>
        {artworks?.list?.map((artwork) => (
          <li key={artwork.id}>
            <a href={`/artwork/${artwork.id}`}>{artwork.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  artworks: state?.artworks, // Map the list of artworks to artworks prop
});

export default connect(mapStateToProps, { fetchArtworks })(Home);
