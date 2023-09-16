import PropTypes from 'prop-types';
const SingleTopArtists = ({ artist }) => {
  const { artist_name, artist_image, artist_price } = artist;
  return (
    <div className='gradient p-1 rounded-xl bg-backGroundGray transition'>
      <div className='flex gap-4 justify-between items-center bg-backGroundDarkGray p-6 rounded-xl'>
        <div className='img'>
          <img src={artist_image} />
        </div>
        <div className='details'>
          <h1 className='text-white font-semibold text-lg'>{artist_name}</h1>
          <p className='text-green font-semibold text-base'>
            {artist_price} ETH
          </p>
        </div>
      </div>
    </div>
  );
};
SingleTopArtists.propTypes = {
  artist: PropTypes.object.isRequired,
};
export default SingleTopArtists;
