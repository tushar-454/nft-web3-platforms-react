import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Auctions from './Components/LiveAuctions/Auctions';
import TopArtists from './Components/TopArtists/TopArtists.jsx';

function App() {
  return (
    <div className='container mx-auto px-4'>
      <Header />
      <Hero />
      <TopArtists />
      <Auctions />
    </div>
  );
}

export default App;
