import { useEffect, useState } from 'react';
import SectionHead from '../Shared/SectionHead';
import Auction from './Auction';

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);
  useEffect(() => {
    fetch('Auctions.json')
      .then((res) => res.json())
      .then((data) => setAuctions(data));
  }, []);
  return (
    <div>
      <SectionHead title='Live Auctions' button='View All' />
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10'>
        {auctions.map((auction, index) => (
          <Auction key={index} auction={auction} />
        ))}
      </div>
    </div>
  );
};

export default Auctions;
