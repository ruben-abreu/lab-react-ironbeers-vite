import { Link } from 'react-router-dom';
import beerImg from '../assets/beers.png';
import randomBeerImg from '../assets/random-beer.png';
import newBeerImg from '../assets/new-beer.png';

function HomePage() {
  return (
    <>
      <Link to='/beers'>
        <img src={beerImg} alt='beers' className='beer-imgs' />
        <h2>All Beers</h2>
      </Link>
      <Link to='/random-beer'>
        <img src={randomBeerImg} alt='random-beer' className='beer-imgs' />
        <h2>Random Beer</h2>
      </Link>
      <Link to='/new-beer'>
        <img src={newBeerImg} alt='new-beer' className='beer-imgs' />
        <h2>New Beer</h2>
      </Link>
    </>
  );
}

export default HomePage;
