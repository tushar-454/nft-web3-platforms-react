import { useEffect, useState } from 'react';
import SingleTopArtists from './SingleTopArtists';

const TopArtistsList = () => {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    fetch('TopArtists.json')
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);
  return (
    <div className='overflow-x-auto'>
      <div className={`flex gap-4 py-10 flex-nowrap w-[220rem]`}>
        {artists.map((artist, index) => (
          <SingleTopArtists key={index} />
        ))}
      </div>
    </div>
  );
};

export default TopArtistsList;
