const SingleTopArtists = () => {
  return (
    <div className='gradient p-1 rounded-lg bg-backGroundGray transition'>
      <div className='flex gap-4 justify-between items-center bg-backGroundDarkGray p-6 rounded-lg'>
        <div className='img'>
          <img
            src='https://nft-tailwind.preview.uideck.com/src/images/artists/image-01.png'
            alt=''
          />
        </div>
        <div className='details'>
          <h1 className='text-white font-semibold text-lg'>Top artists one</h1>
          <p className='text-green font-semibold text-base'>14.5 ETH</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTopArtists;
