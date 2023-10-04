import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchArtworkDetails } from '../actions/artworks';
import { useParams } from 'react-router-dom';
import '../styles.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function ArtworkDetail({ artwork, match, fetchArtworkDetails }) {
  const { id } = useParams();

  useEffect(() => {
    fetchArtworkDetails(id);
  }, [fetchArtworkDetails, id]);

  // CSS classes
  const titleClass = 'details-title';
  const valueClass = 'details-value';

  const renderDetailPairs = () => {
    const detailPairs = [
      { title: 'Title', value: artwork.title },
      { title: 'Artist', value: artwork.artist_title },
      { title: 'Year', value: artwork.date_display },
      { title: 'Place of Origin', value: artwork.place_of_origin },
      { title: 'Medium', value: artwork.medium_display },
      { title: 'Dimensions', value: artwork.dimensions },
      { title: 'Inscriptions', value: artwork.inscriptions },
      { title: 'Classification', value: artwork.classification_title },
      { title: 'Category', value: artwork.category_titles },
      { title: 'Credit Line', value: artwork.credit_line },
      { title: 'Is on View', value: artwork.is_on_view ? 'Yes' : 'No'},
      { title: 'Gallery', value: artwork.gallery_title },
      { title: 'Department', value: artwork.department_title },
      { title: 'Artwork Type', value: artwork.artwork_type_title },
      { title: 'Boost Rank', value: artwork.boost_rank },
      { title: 'Is Public Domain', value: artwork.is_public_domain ?   'Yes' : 'No' },
      {
        title: 'Is Zoomable',
        value: artwork.is_zoomable ? 'Yes' : 'No',
      },
      { title: 'Max Zoom Window Size', value: artwork.max_zoom_window_size },
      {
        title: 'Colorfulness',
        value: artwork.colorfulness,
      },
      {
        title: 'Color (HSL)',
        value:
          artwork.color !== undefined
            ? `H: ${artwork.color.h}, S: ${artwork.color.s}, L: ${artwork.color.l}`
            : '',
      },
      { title: 'Latitude', value: artwork.latitude },
      { title: 'Longitude', value: artwork.longitude },
      { title: 'LatLon', value: artwork.latlon },
      { title: 'Provenance', value: artwork.provenance_text },
      {
        title: 'Description',
        value: artwork.description,
        isHTML: true, // Use dangerouslySetInnerHTML
      },
      { title: 'Exhibition History', value: artwork.exhibition_history },
      { title: 'Publication History', value: artwork.publication_history },
      { title: 'Copyright Notice', value: artwork.copyright_notice },
    ];

    return detailPairs.map((pair, index) => (
      pair.title !== 'Colorfulness' ?
      (pair.value && <tr key={index}>
        <td className={titleClass}>{pair.title}:</td>
        <td className={valueClass}>
          {pair.isHTML ? (
            <div dangerouslySetInnerHTML={{ __html: pair.value }} />
          ) : (
            pair.value
          )}
        </td>
      </tr>): 
       (<tr key={index}>
        <td className={titleClass}>{pair.title}:</td>
        <td className={valueClass}>
            {pair.value}
        </td>
      </tr>)
    ));
  };

  return (
    <div className="detail-container">
      <h1 className="detail-title">Artwork Detail</h1>
      <Link className ="back-to-home-link" to="/">Back to home</Link>

      {artwork ? (
        <table className="details-table">
            <div className="details-pair">
          {artwork?.thumbnail && (
            <img 
              src={artwork.thumbnail.lqip} 
              alt={artwork.thumbnail.alt_text}
              style={{ width: '50%', maxWidth: '850px' }}
            />
          )}
        </div>
          <tbody>{renderDetailPairs()}</tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  artwork: state.artworks.selectedArtwork, // Map the selectedArtwork to artwork prop
});

export default connect(mapStateToProps, { fetchArtworkDetails })(ArtworkDetail);
