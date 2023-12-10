import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState('');

  const getBeers = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      console.log(response);
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  const searchBeers = async () => {
    try {
      const response = await axios.get(`${API_URL}/search?q=${query}`);
      console.log(response.data);
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchBeers();
  }, [query]);

  return (
    <div>
      <label htmlFor='search'>Search:</label>
      <input
        type='text'
        name='search'
        id='search'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {!beers.length && <h2>Loading...</h2>}
      {beers.map(beer => (
        <div key={beer._id} className='Beers'>
          <Link to={`/beers/${beer._id}`}>
            <img src={beer.image_url} alt='beer' width={'50 px'} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>
              <span>Created by:</span> {beer.contributed_by}
            </p>
            <hr />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllBeersPage;
